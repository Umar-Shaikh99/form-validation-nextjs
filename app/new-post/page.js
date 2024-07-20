import { createPost } from "@/components/action";
import PostForm from "@/components/post-form";


export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
