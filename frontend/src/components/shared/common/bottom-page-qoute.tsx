import React from "react";

const BottomPageQoute = ({ text, qouteStyle }: { text: string , qouteStyle ?: string}) => {
  return (
    <p
      className={`text-center font-optimanova font-medium text-black text-4xl my-10 mb-16 ${qouteStyle}`}
    >
      {text}
    </p>
  );
};

export default BottomPageQoute;
