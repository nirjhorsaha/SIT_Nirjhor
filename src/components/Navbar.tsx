import { LuLogIn } from "react-icons/lu";
import { PiBellRingingBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import useReadMoreStore from "../utils/zustandStore";

const Navbar = () => {
    const clickCount = useReadMoreStore((state) => state.clickCount); // clickCount values from the store

    return (
        <nav className="fixed bg-white py-4 w-full z-20 top-0 start-0 border-b border-[#DBD7D7]">
            <div className="mx-auto  xl:px-20 md:px-10 px-4 flex items-center justify-between">
                <Link to="/" aria-label="Go to Home">
                    <img src="/SIT-logo.png" className="h-16 cursor-pointer" alt="SynesisIT Logo" />
                </Link>
                {/* icons for small devices */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        aria-label="Bell notifications"
                        className="text-gray-800 p-1 rounded-full flex justify-center items-center hover:bg-gray-100 transition"
                    >
                        <PiBellRingingBold size={24} />
                        <sup className="text-sm font-bold">{clickCount}</sup>
                    </button>
                    <button
                        aria-label="Login"
                        className="text-gray-800  rounded-full flex justify-center items-center hover:bg-gray-100 transition"
                    >
                        <LuLogIn size={28} />
                    </button>
                </div>

                {/* buttons for medium and large device */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        aria-label="Bell notifications"
                        className="bg-[#D9D9D933] text-gray-800 font-semibold py-2 px-4 rounded-md flex justify-center items-center hover:bg-gray-100 transition"
                    >
                        Bell Counter <PiBellRingingBold size={20} className="ml-2" />
                        <sup>{clickCount}</sup>
                    </button>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="bg-[#E3E3E3] text-gray-800 px-12 rounded-md flex justify-center items-center hover:bg-gray-300 transition border border-[#767676]"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            className="bg-black text-white  px-12 rounded-md flex justify-center items-center hover:bg-gray-800 transition"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
