import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { Post } from "../types";
import { formatPostDate } from "../utils/DateFormate";

const PostDetailsCard = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState<Post | null>(null)
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        const fetchBlogPosts = async () => {
            const respose = await fetch(`https://jsonplaceholder.org/posts/${id}`);
            const data = await respose.json();
            setPosts(data)
        }
        fetchBlogPosts();
    }, [id])

    return (
        <div className="grid md:grid-cols-2 gap-10">
            <img
                src={posts?.image}
                alt="blogs image"
                className="rounded-md w-full object-cover border"
            />
            <div className=" ">
                <div className="flex justify-between items-start">
                    <h4 className="text-3xl font-bold leading-9 mb-2">
                        {posts?.title}
                    </h4>
                    <p className="bg-[#C9C5C580] px-4 py-1 rounded-md">{posts?.slug}</p>
                </div>
                <span className="flex mb-4 gap-2 items-center">
                    <FaRegCalendarAlt size={18} />
                    {posts?.publishedAt ? formatPostDate(posts.publishedAt) : "No Date Available"}

                </span>
                <p className="leading-6 text-md">
                    {posts?.content}
                </p>
            </div>
        </div>
    );
};

export default  PostDetailsCard;
