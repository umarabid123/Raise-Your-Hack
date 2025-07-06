const {
  signupSchema,
  signinSchema,
  acceptCodeSchema,
  changePasswordSchema,
  acceptFPCode,
} = require("../middlewares/validator");
const { doHash, doHashValidation } = require("../utils/hasing");
const User = require("../models/userModal");
const jwt = require("jsonwebtoken");
const transport = require("../middlewares/sendMail");
const hashValue = require("../utils/hasing");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error, value } = signupSchema.validate({ email, password });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }
    const existingUser = await User.findOne({
      email,
    });
    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists!" });
    }
    const passwordHash = await doHash(password, 12);
    const newUser = new User({
      email,
      password: passwordHash,
    });
    const result = await newUser.save();
    result.password = undefined;
    res.status(201).json({
      success: true,
      message: "Your account has been created successfully",
      result,
    });
  } catch (error) {
      console.log("Error", error);
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error, value } = signinSchema.validate({
      email,
      password,
    });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email }).select("+password");
    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials!" });
    }
    const result = await doHashValidation(password, existingUser.password);
    if (!result) {
      return res
        .status(401)
        .json({ success: false, message: "User does not exists!" });
    }
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        verified: existingUser.verified,
      },
      process.env.SECRET_KEY,
      { expiresIn: "8h" }
    );
    res
      .cookie("Authorized", "Bearer" + token, {
        express: new Date(Date.now() + 8 * 3600000),
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        success: true,
        token,
        message: "logged in successfully",
      });
  } catch (error) {
    console.log("error:", error);
  }
};

exports.signout = async (req, res) => {
  res.clearCookie("Authorization").status(200).json({
    success: true,
    message: "logout successfully",
  });
};

exports.verificaticonCode = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist!",
      });
    }
    if (existingUser.verified) {
      return res.status(400).json({
        success: false,
        message: "You are already verified!",
      });
    }
    const codeValue = Math.floor(Math.random() * 1000000).toString();
    let info = await transport.sendMail({
      from: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
      to: existingUser.email,
      subject: "verification code",
      html: "<h1>" + codeValue + "</h1>",
    });
    if (info.accepted[0] === existingUser.email) {
      const hashedCode = hashValue.hmacProcess(
        codeValue,
        process.env.HMAC_VERIFICATION_CODE_SECRET
      );
      existingUser.verificationCode = hashedCode;
      existingUser.verificationCodeValidation = Date.now();
      await existingUser.save();
      return res.status(200).json({
        success: true,
        message: "code sent!",
      });
    }
  } catch (error) {
    console.log("error:", error);
  }
};

exports.verifyVerificationCode = async (req, res) => {
  const { email, providedCode } = req.body;
  try {
    const { error } = acceptCiodeSchema.validate({ email, providedCode });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }

    const providedValue = providedCode.toString();
    const existingUser = await User.findOne({ email }).select(
      "+verificationCode +verificationCodeValidation"
    );

    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    if (existingUser.verified) {
      return res
        .status(400)
        .json({ success: false, message: "You are already verified!" });
    }

    if (!existingUser.verificationCodeValidation) {
      return res.status(400).json({
        success: false,
        message: "Something is wrong with code!",
      });
    }

    if (Date.now() - existingUser.verificationCodeValidation > 5 * 60 * 1000) {
      return res
        .status(400)
        .json({ success: false, message: "Code has expired" });
    }

    const hashedCodeValue = hashValue.hmacProcess(
      providedValue,
      process.env.HMAC_VERIFICATION_CODE_SECRET
    );

    if (hashedCodeValue === existingUser.verificationCode) {
      existingUser.verified = true;
      existingUser.verificationCode = undefined;
      existingUser.verificationCodeValidation = undefined;
      await existingUser.save();

      return res.status(200).json({
        success: true,
        message: "Your account has been verified!",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Incorrect verification code!",
    });
  } catch (error) {
    console.error("Verification error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

exports.changePassword = async (req, res) => {

  const { userId, verified } = req.user;
  const { oldPassword, newPassword } = req.body;
  try {
    const { error } = changePasswordSchema.validate({ oldPassword, newPassword });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }
   
    const existingUser = await User.findOne({_id:userId}).select('+password')
    if(!existingUser){
      return res.status(401).json({
        success:false,
        message:'User does not exist!'
      })
    }
    const result = await doHashValidation(oldPassword, existingUser.password);
    if(!result){
      return res.status(401).json({
        success:false, message:'Invalid credentials!'
      })
    }
    const hashedPassword = await doHash(newPassword,12)
    existingUser.password = hashedPassword;
    await existingUser.save()
    return res.status(200).json({
      success:true,
      message:'password change successfully!'
    })

  } catch (error) {
    console.log("error:", error);
  }
};

exports.sendForgotVerificationCode = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist!",
      });
    }
    const codeValue = Math.floor(Math.random() * 1000000).toString();
    let info = await transport.sendMail({
      from: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
      to: existingUser.email,
      subject: "verification code",
      html: "<h1>" + codeValue + "</h1>",
    });
    if (info.accepted[0] === existingUser.email) {
      const hashedCode = hashValue.hmacProcess(
        codeValue,
        process.env.HMAC_VERIFICATION_CODE_SECRET
      );
      existingUser.forgotPasswordCode = hashedCode;
      existingUser.forgotPasswordCodeValidation = Date.now();
      await existingUser.save();
      return res.status(200).json({
        success: true,
        message: "code sent!",
      });
    }
  } catch (error) {
    console.log("error:", error);
  }
};
exports.forgotVerificationCode = async (req, res) => {
  const { email, providedCode,newPassword } = req.body;
  try {
    const { error,value } = acceptFPCode.validate({ email, providedCode,newPassword });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }
        
    const providedValue = providedCode.toString();
    const existingUser = await User.findOne({ email }).select(
       "+forgotPasswordCode +forgotPasswordCodeValidation"
    );
        

   
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }


    if (!existingUser.forgotPasswordCodeValidation) {
      return res.status(400).json({
        success: false,
        message: "Something is wrong with code!",
      });
    }

    if (Date.now() - existingUser.forgotPasswordCodeValidation > 5 * 60 * 1000) {
      return res
        .status(400)
        .json({ success: false, message: "Code has expired" });
    }

    const hashedCodeValue = hashValue.hmacProcess(
      providedValue,
      process.env.HMAC_VERIFICATION_CODE_SECRET
    );

    if (hashedCodeValue === existingUser.forgotPasswordCode) {
      existingUser.verified = true;
      existingUser.forgotPasswordCode = undefined;
      existingUser.forgotPasswordCodeValidation = undefined;
      await existingUser.save();

      return res.status(200).json({
        success: true,
        message: "Your account has been verified!",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Incorrect verification code!",
    });
  } catch (error) {
    console.error("Verification error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};