const Newsletter = () => {
    return (
        <div className="text-center pb-8 md:py-12 px-4">
            <h1 className="text-xl font-semibold leading-7">Follow the latest trends</h1>
            <p className="text-[#757575] text-md mt-2">With our daily newsletter</p>
            <div className="mt-4 flex justify-center items-center gap-2">
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full max-w-xs px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />

                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
