import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";
import PostDetailsCard from "../components/PostDetailsCard";

const PostDetails = () => {
  return (
    <div className="pt-28 md:pt-32">
      <PostDetailsCard />
      <Reviews />
      <Newsletter />
    </div>
  );
};

export default PostDetails;