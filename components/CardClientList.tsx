import { PostResponce } from "@/app/lib/posts"
import { use } from "react"
import { Link } from "lucide-react"
import { CardDemo } from "./Card"

export default function CardClientList({ loadPost }: { loadPost: Promise<PostResponce[]> }) {
    const posts = use(loadPost)
    return (
        <div>

            {posts.map((post) => (
                <Link

                    href={`/dashboard/blog/${post.id}`}
                    key={post.id}

                >
                    <CardDemo
                        userId={post.userId}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />
                </Link>
            ))}

        </div >
    )
}