import { FaRegStar, FaStar } from "react-icons/fa6";
import { reviews } from "../utils/ReviewData";

const Reviews = () => {
    return (
        <div className="py-16">
            <h1 className="text-3xl font-semibold mb-8">Latest Reviews</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
                {reviews.map((review, index) => (
                    <div key={index} className="border rounded-md p-4">
                        <div className="flex mb-4 gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                i < review.stars ? (
                                    <FaStar key={i} size={20} className="text-yellow-500" />
                                ) : (
                                    <FaRegStar key={i} size={20} className="text-gray-400" />
                                )
                            ))}
                        </div>
                        <p className="text-2xl font-semibold">{review.title}</p>
                        <p className="mt-2 text-gray-700">{review.body}</p>
                        <div className="flex gap-3 items-center my-4">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-lg font-semibold">{review.name}</p>
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
