import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import CartIcon from "../cart component/cartIcon";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 shadow-md bg-white relative">
            <h2 className="text-lg sm:text-xl font-bold text-orange-500 flex justify-center items-center">
               <img src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-orange-logo-design-png-image_4781563.jpg" alt="logo"  width="40px" height="40px"/> Mr Smart Wears
            </h2>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 text-gray-700" >
                <NavLink to="/"  style={{color:"gray"}}>Home</NavLink>
                <NavLink to="/shop"  style={{color:"gray"}}>Shop</NavLink>
                <NavLink to="/about"  style={{color:"gray"}}>About</NavLink>
                <NavLink to="/contact"  style={{color:"gray"}}>Contact</NavLink>
            </ul>

            <div className="flex items-center space-x-4">
                <CartIcon />
                <NavLink to="/login" className="text-gray-700 hover:text-orange-500" style={{color:"gray"}}>
                    Login
                </NavLink>
                
                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
                    <NavLink to="/"  style={{color:"gray"}} onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/shop"  style={{color:"gray"}} onClick={() => setIsOpen(false)}>Shop</NavLink>
                    <NavLink to="/about"  style={{color:"gray"}} onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to="/contact"  style={{color:"gray"}} onClick={() => setIsOpen(false)}>Contact</NavLink>
                    <NavLink to="/login"  style={{color:"gray"}} onClick={() => setIsOpen(false)}>Login</NavLink>
                </div>
            )}
        </nav>
    );
}

export default Navbar;