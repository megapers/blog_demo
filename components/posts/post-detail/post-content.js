import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-10-02",
  slug: "getting-started-with-nextjs",
  content: "# This is the first post",
};

function PostContent() {
  //const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;//Uncomment and replace after adding the database
  const imagePath = `/images/posts/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
    </article>
  );
}

export default PostContent;
