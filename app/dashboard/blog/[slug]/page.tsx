import PostCard from "@/app/components/pages/PostCard";
import Link from "next/link";

const BASE_API =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://jsonplaceholder.typicode.com/";

async function fetchDetailPost(id: string) {
    const res = await fetch(`${BASE_API}posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch post with ID: ${id}`);
    }

    return res.json();
}

export default async function Blog({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const post = await fetchDetailPost(slug);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="bg-green-500 text-white p-6 rounded-2xl shadow-xl">
                <PostCard
                    key={post.id}
                    userId={post.userId}
                    title={post.title}
                    id={post.id}
                    body={post.body}
                />
            </div>

            <div className="mt-8">
                <Link href="/dashboard">Back</Link>
            </div>
        </div>
    );
}
