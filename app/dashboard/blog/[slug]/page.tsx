import PostCard from "@/app/components/pages/PostCard";
import Link from "next/link";

const BASE_API = process.env.NEXT_PUBLIC_API_URL || 'jsonplaceholder.typicode.com';

async function fetchDetailPost(id: string) {
    const res = await fetch(`${BASE_API}posts/${id}`);
    
    if (!res.ok) {
        throw new Error(`Failed to fetch post with ID: ${id}`);
    }
    
    return res.json();
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    const post = await fetchDetailPost(slug);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="group transition-all hover:-translate-y-1 active:scale-95 bg-green-500 text-white p-6 rounded-2xl shadow-xl border border-green-400">
                <PostCard
                    key={post.id}
                    userId={post.userId}
                    title={post.title}
                    id={post.id}
                    body={post.body}
                />
            </div>

            <div className="mt-8">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center px-6 py-3 text-green-600 font-bold bg-white border-2 border-green-500 rounded-xl hover:bg-green-50 transition-all active:scale-95 shadow-md"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}
