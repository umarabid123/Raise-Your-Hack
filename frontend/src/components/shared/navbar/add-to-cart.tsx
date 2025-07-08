import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "@/redux-store/slices/cartSlice";
import { RootState } from "@/components/shared/types"; // Make sure to import from the correct store path
import Image from "next/image";
import CustomButton from "../common/custom-button";
import CloseIcon from "@/svgs/header-svg-grabber";
import { setPopup } from "@/redux-store/slices/toggle-arrow";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const total = cartItems.reduce(
    (acc, item) => acc + (item.currentPrice ?? 0) * item.quantity,
    0
  );

  return (
    <div className="">

        {/* headong + close btn  */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <CustomButton
          icon={
            <CloseIcon
              size={18}
              className="transition-transform duration-300 group-hover:!rotate-90 "
            />
          }
          AdditionalStyle="border !border-gray-300 p-4 rounded-full"
          onClick={() => dispatch(setPopup())}
        /> 
      </div>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="relative">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="mb-4 border-b border-gray-200 pb-4 flex  gap-3"
            >
              <div>
                <Image
                  src={item.img1}
                  alt="product"
                  width={100}
                  height={100}
                  className="h-26 w-26 object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>
                  ${item.currentPrice} x {item.quantity}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <CustomButton
                    onClick={() => dispatch(decreaseQty(item.id))}
                    btnText="-"
                    AdditionalStyle="px-3 py-1 font-bold !bg-gray-200 "
                  />
                  <span>{item.quantity}</span>

                  <CustomButton
                    onClick={() => dispatch(increaseQty(item.id))}
                    btnText="+"
                    AdditionalStyle="px-3 py-1 font-bold !bg-gray-200 "
                  />

                  <CustomButton
                    onClick={() => dispatch(removeFromCart(item.id))}
                    btnText="Remove"
                    AdditionalStyle="!text-white !bg-red-700 p-1 ml-8 text-sm "
                  />
                </div>
              </div>
            </div>
          ))}
          <div className=" sticky bottom-0 bg-white w-full right-3  py-8">
            <p className="text-xl font-semibold flex justify-between items-center mb-2">
              <span>Total: </span>${total.toFixed(2)}
            </p>
            <p className="mb-3 text-zinc-700">
              Taxes and{" "}
              <strong className="underline cursor-pointer">shipping</strong>{" "}
              calculated at checkout
            </p>
            <div className=" flex gap-5 items-center justify-between ">
              <CustomButton
                onClick={() => dispatch(clearCart())}
                btnText="Clear Cart"
                AdditionalStyle="!text-white !bg-red-700 py-3 px-5 flex-1"
              />
              <CustomButton
                //   onClick={() => dispatch(clearCart())}
                btnText="Checkout"
                AdditionalStyle="!text-white !bg-black py-3 px-5 flex-1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
