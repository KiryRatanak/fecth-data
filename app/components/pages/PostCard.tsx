import { PostResponce } from "../../lib/posts"
export default function PostCard({
    userId = 0,
    id = 0,
    title = "default",
    body = "default"
}: PostResponce){
    return(
        <>
            <h2 className="line-clamp-3 bg-purple-">Title : {title}</h2>
            <p className="line-clamp-3 bg-purple-">Description : {body}</p>
            <p className="line-clamp-3 bg-purple-">{userId} | {id}</p>
        </>
    )
}