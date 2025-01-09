import { useState } from "react";
import { FaSearch, FaRegCalendarAlt } from "react-icons/fa";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        console.log("Search Query:", event.target.value);
    };

    return (
        <div>
            <div className="flex flex-col gap-4 pt-4 md:pt-32">
                {/* Header */}
                <div className="flex justify-between items-center gap-4">
                    <h1 className="text-xl md:text-4xl font-semibold text-center">
                        Placeholder Posts
                    </h1>

                    {/* Search Bar */}
                    <div className="relative ">
                        <input
                            type="text"
                            placeholder="Search ..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="bg-[#F0F1F5] rounded-lg px-4 py-2 w-full sm:w-64 text-black focus:outline-none focus:ring-1 focus:ring-blue-700"
                        />
                        <FaSearch className="absolute top-3 right-4 cursor-pointer" />
                    </div>
                </div>
            </div>
            <section className="pt-10">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="group border border-gray-300 rounded-2xl">
                        <div className="flex items-center">
                            <img
                                src="https://pagedone.io/asset/uploads/1696244317.png"
                                alt="blogs tailwind section"
                                className="rounded-t-2xl w-full object-cover"
                            />
                        </div>
                        <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl bg-[#F7F9F9]">
                            <div className="flex justify-between font-medium items-center">
                                <span className="flex mb-3 gap-2 items-center">
                                    <FaRegCalendarAlt size={18} />
                                    January 01, 2023
                                </span>
                                <p className="bg-white px-4 py-1 rounded-md">Category</p>
                            </div>
                            <h4 className="text-3xl text-gray-900 font-medium leading-9 my-3">
                                Blog post title{" "}
                            </h4>
                            <p className="text-gray-500 leading-6">
                                Discover smart investment strategies to streamline and organize your
                                portfolio. Discover smart investment strategies to streamline and
                                organize your portfolio.{" "}
                                <button className="text-[#206CE5] font-semibold">Read more..</button>
                            </p>
                        </div>
                    </div>
                    {/* Card 2*/}
                    <div className="group border border-gray-300 rounded-2xl">
                        <div className="flex items-center">
                            <img
                                src="https://pagedone.io/asset/uploads/1696244317.png"
                                alt="blogs tailwind section"
                                className="rounded-t-2xl w-full object-cover"
                            />
                        </div>
                        <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl bg-[#F7F9F9]">
                            <div className="flex justify-between font-medium items-center">
                                <span className="flex mb-3 gap-2 items-center">
                                    <FaRegCalendarAlt size={18} />
                                    January 01, 2023
                                </span>
                                <p className="bg-white px-4 py-1 rounded-md">Category</p>
                            </div>
                            <h4 className="text-3xl text-gray-900 font-medium leading-9 mt-4">
                                Blog post title{" "}
                            </h4>
                            <p className="text-gray-500 leading-6 ">
                                Discover smart investment strategies to streamline and organize your
                                portfolio.. <button>Read more..</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
