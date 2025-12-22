import PostCard from "@/app/components/pages/PostCard";

const BASE_API = process.env.NEXT_PUBLIC_API_URL

async function fecthDetailPost(id: string) {
    const data = await fetch(`${BASE_API}posts/${id}`)
    const post = await data.json();
    return post;
}

export default async function Blog(
    {
        params
    }:
        {
            params: Promise<{ slug: string }>
        }
) {
    const { slug } = await params
    const post = await fecthDetailPost(slug)
    return (
        <>
            <div className="group transition-transform hover:-translate-y-1 active:scale-105 bg-green-500 text-white font-bold p-6 rounded shadow-md shadow-gray-500 hover:shadow-lg">
                <PostCard

                    key={post.id}
                    userId={post.userId}
                    title={post.title}
                    id={post.id}
                    body={post.body}

                />
            </div>
            <div className="mt-6">
                <a
                    href="/dashboard"
                    className="inline-flex items-center px-4 py-2 text-green-500 font-bold hover:-translate-y-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all shadow-sm active:scale-105"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Previous Page
                </a>
            </div>

        </>
    )
}