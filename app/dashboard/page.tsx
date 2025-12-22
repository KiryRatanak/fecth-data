import Link from "next/link";
import PostCard from "../components/pages/PostCard";
import { PostResponce } from "../lib/posts";

const BASE_API = 'https://jsonplaceholder.typicode.com/';

export default async function Dashboard() {
    const res = await fetch(`${BASE_API}posts`);
    
    if (!res.ok) {
        throw new Error('Failed to fetch dashboard data');
    }
    
    const posts: PostResponce[] = await res.json();

    return (
        <div className="space-y-8">
            <header className="border-l-4 border-indigo-500 pl-4">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    Welcome to Dashboard
                </h1>
                <p className="text-gray-500 mt-2">
                    Viewing {posts.length} total publications.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link 
                        href={`/dashboard/blog/${post.id}`} 
                        key={post.id}
                        className="group transition-transform hover:-translate-y-1 active:scale-105 bg-green-500 text-white font-bold p-6 rounded shadow-md shadow-gray-500 hover:shadow-lg"
                    >
                        <PostCard
                            userId={post.userId}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
