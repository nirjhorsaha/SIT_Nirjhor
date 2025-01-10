import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Post } from "../types";
import { formatPostDate } from "../utils/DateFormate";
import useReadMoreStore from "../utils/zustandStore";

interface BlogCardProps {
    post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
    const formattedDate = formatPostDate(post?.publishedAt);
    const increment = useReadMoreStore((state) => state.increment);

    const truncateContent = (content: string, charLimit: number) => {
        if (content.length > charLimit) {
            return content.slice(0, charLimit) + "...";
        }
        return content;
    };

    return (
        <div className="group border border-gray-300 rounded-2xl bg-[#F7F9F9]">
            <div className="flex items-center">
                <img
                    src={post?.image}
                    alt="blogs image"
                    className="rounded-t-2xl size-full object-cover"
                />
            </div>
            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl ">
                <div className="flex justify-between font-medium items-center">
                    <span className="flex mb-3 gap-2 items-center">
                        <FaRegCalendarAlt size={18} />
                        {formattedDate}
                    </span>
                    <p className="bg-white px-4 py-1 rounded-md">{post?.slug}</p>
                </div>
                <h4 className="text-3xl text-gray-900 font-medium leading-9 my-3">{post?.title}</h4>
                <p className="text-gray-500 leading-6">
                    {truncateContent(post?.content, 200)}
                    <Link to={`/posts/${post?.id}`}>
                        <button
                            className="text-[#206CE5] font-semibold"
                            onClick={() => increment()}
                        >
                            Read more
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
