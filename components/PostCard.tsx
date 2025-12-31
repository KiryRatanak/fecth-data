import { PostResponce } from "@/app/lib/posts";

export default function PostCard({
    userId = 0,
    id = 0,
    title = "default",
    body = "default"
}: PostResponce) {
    return (
        <>
            <h2>Title : {title}</h2>
            <p>Description : {body}</p>
            <p>{userId} | {id}</p>
        </>
    )
}