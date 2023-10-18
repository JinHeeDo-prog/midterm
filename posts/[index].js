import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter()
    //{"pid" : foo}, {"pid" : " ar"}
    const {pid} = router.query
    return <p>Post : {pid}</p>
} 

export default Post;
