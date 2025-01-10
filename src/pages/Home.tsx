import { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Post } from "../types";
import BlogCard from "../components/BlogCard";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const respose = await fetch('https://jsonplaceholder.org/posts');
            const data = await respose.json();
            setPosts(data.slice(0, 4))
        }
        fetchBlogPosts();
    }, [])


    // handle search query
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // clear the search input field
    const clearSearch = () => {
        setSearchQuery("");
    };

    // filter post based on title and slug
    const filteredPosts = posts.filter((post: Post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="flex flex-col gap-4 pt-24 md:pt-32">
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
                        {
                            searchQuery ? (
                                <FaTimes className="absolute top-3 right-4 cursor-pointer" onClick={clearSearch} />
                            ) : <FaSearch className="absolute top-3 right-4 cursor-pointer" />
                        }
                    </div>
                </div>
            </div>
            <section className="pt-10">
                <div className="grid grid-cols-1 gap-6 md:gap-14 md:grid-cols-2">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post: Post) => (
                            <BlogCard key={post?.id} post={post} />
                        ))) : (
                        (
                            <div className="col-span-full text-center text-lg text-red-600">
                                No search item found!!
                            </div>
                        )
                    )
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;
