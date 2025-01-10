import { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Post } from "../types";
import BlogCard from "../components/BlogCard";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1); 

    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true); // stop loading
            await new Promise((resolve) => setTimeout(resolve, 1000));  // delay for loading
            
            try {
                const response = await fetch(`https://jsonplaceholder.org/posts`);
                const data = await response.json();

                setPosts((prevPosts) => [
                    ...prevPosts,
                    ...data.slice((page - 1) * 4, page * 4), // fetch 4 posts at a time
                ]);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false); // stop loading
            }
        };
        fetchBlogPosts();
    }, [page]);

    // handle search query
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // clear the search input field
    const clearSearch = () => {
        setSearchQuery("");
    };

    // filter posts based on title and slug
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // handle infinite scroll
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !loading) {
            setPage((prevPage) => prevPage + 1); // load the next page
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return (
        <div>
            <div className="flex flex-col gap-4 pt-24 md:pt-32">
                <div className="flex justify-between items-center gap-2 md:gap-4">
                    <h1 className="text-xl md:text-4xl font-semibold md:text-center">
                        Placeholder Posts
                    </h1>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search ..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="bg-[#F0F1F5] rounded-lg px-4 py-2 w-full sm:w-64 text-black focus:outline-none focus:ring-1 focus:ring-blue-700"
                        />
                        {searchQuery ? (
                            <FaTimes
                                className="absolute top-3 right-4 cursor-pointer"
                                onClick={clearSearch}
                            />
                        ) : (
                            <FaSearch className="absolute top-3 right-4 cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>
            <section className="pt-10">
                {loading && posts.length === 0 ? (
                    <div className="flex gap-4 justify-center items-center">
                        <div className="w-8 h-8 border-4 border-blue-700 border-dashed rounded-full animate-spin"></div>
                        <p className="leading-7">Loading posts</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:gap-14 md:grid-cols-2">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, index) => (
                                <BlogCard key={index} post={post} />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-lg text-red-600">
                                No search item found!!
                            </div>
                        )}
                    </div>
                )}
                {/* show loading message when more posts loaded */}
                {loading && posts.length > 0 && (
                    <div className="text-center  mt-6 leading-7">
                        More posts loading{" "}
                        <span className="text-[#A3A6A8] font-extrabold text-3xl">...</span>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
