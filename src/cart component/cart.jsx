import React, { useEffect, useState, useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import CartContent from "./cart component/cart content";
import { CartContext } from "../context folder/appContext";
import { motion } from "framer-motion";

export let changeAddToCart = false;
export let productsIDInTheCartListpagetotal = 0;

function Cart() {
    const [deliveryFee, setDeliveryFee] = useState(1500);
    const [subtotal, setSubtotal] = useState(0);
    const [foodState, setFoodState] = useState([]);
    const [tax, setTax] = useState(0);

    const cart = useContext(CartContext);

    useEffect(() => {
        const fetchData = () => {
            const allFoods = JSON.parse(localStorage.getItem("userCart")) || [];
            if (allFoods.length === 0) {
                setFoodState("Oops! Cart is Empty");
            } else {
                setTax(5);
                setFoodState(
                    allFoods.map((item, index) => (
                        <CartContent
                            key={index}
                            {...item}
                            removeFromCart={() => {
                                cart.deleteFromCartList(item.id);
                                if (allFoods.length === 1) {
                                    setTax(0);
                                    setDeliveryFee(0);
                                    setFoodState("Oops! Cart is Empty");
                                }
                            }}
                        />
                    ))
                );
            }
        };

        fetchData();
    }, [cart.productsInTheCartList]);

    useEffect(() => {
        setSubtotal(cart.totalCart + deliveryFee + tax);
    }, [cart.totalItemInCart]);

    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-end items-start z-50">
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <motion.h1
                    className="text-4xl font-bold text-gray-500 sm:block hidden"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    We are Reliable, Swift and Truthful .<br /> We are the best
                </motion.h1>
            </div>
            <div className="w-96 bg-white h-full shadow-lg p-5">
                <div className="flex justify-between items-center border-b pb-2">
                    <NavLink to="/" >
                        <p className="text-l font-bold text-orange-500">Mr Smart wears</p>
                    </NavLink>
                    <NavLink to="/" style={{color:"gray"}}>
                        <IoCloseCircleOutline className="text-2xl cursor-pointer" />
                    </NavLink>
                </div>

                <h2 className="text-center text-gray-900 font-bold text-lg my-3">Your Cart</h2>
                <div className="text-center">{foodState}</div>

                <div className="flex gap-2 my-3">
                    <input type="text" placeholder="Promo code" className="border p-2 flex-1 h-10 w-4 rounded-[5px]" />
                    <button className="border border-orange-500 text-orange-500 px-3 py-2 h-10">Apply-code</button>
                </div>

                <div className="flex justify-between text-gray-900">
                    <p>Tax:</p>
                    <p>₦{tax}</p>
                </div>
                <div className="flex justify-between text-gray-900">
                    <p>Delivery fee:</p>
                    <p>₦{deliveryFee}</p>
                </div>
                <div className="flex justify-between text-gray-900">
                    <p>Cart total:</p>
                    <p>₦{cart.totalCart}</p>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between font-bold text-gray-900">
                    <p>Subtotal:</p>
                    <p>₦{subtotal}</p>
                </div>

                <Link to={subtotal !== 0 ? "/checkout" : "#"}>
                    <button class="border-2 border-purple-500 hover:border-gray-500 ..." className="w-full bg-gray-900 text-orange-500 py-2 mt-3 focus:outline-none">
                        Proceed to checkout
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
