import { LuLogIn } from "react-icons/lu";
import { PiBellRingingBold } from "react-icons/pi";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white py-4 w-full z-20 top-0 start-0 border-b border-[#DBD7D7]">
                <div className=" flex items-center justify-between">
                    <img src="/SIT-logo.png" className="h-16" alt="SynesisIT Logo" />

                    {/* Icons for Small Devices */}
                    <div className="flex items-center gap-1 md:hidden">
                        <button
                            aria-label="Bell notifications"
                            className="text-gray-800 font-semibold flex justify-center items-center hover:bg-gray-100 transition"
                        >
                            <PiBellRingingBold size={24} />
                            <sup className="text-sm text-red-500 font-bold">6</sup>
                        </button>
                        <button
                            aria-label="Login"
                            className="text-gray-800 p-2 rounded-full flex justify-center items-center hover:bg-gray-100 transition"
                        >
                            <LuLogIn size={28}/>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            aria-label="Bell notifications"
                            className="bg-[#D9D9D933] text-gray-800 font-semibold py-2 px-4 rounded-md flex justify-center items-center hover:bg-gray-100 transition"
                        >
                            Bell Counter <PiBellRingingBold size={20} className="ml-2" />
                            <sup>6</sup>
                        </button>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="bg-[#E3E3E3] text-gray-800 font-semibold px-8 rounded-md flex justify-center items-center hover:bg-gray-300 transition border border-1"
                            >
                                Sign in
                            </button>
                            <button
                                type="button"
                                className="bg-black text-white font-semibold px-8 rounded-md flex justify-center items-center hover:bg-gray-800 transition"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
