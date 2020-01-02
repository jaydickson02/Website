//Components
import Navbar from "../components/navbar";

let SubmitBlogPost = () => {

    return(
    <div>
    <Navbar />
    <h1>New Blog Post</h1>
        <form action="http://db.originalone.cloud/api/blog/add" method="post">
            <label>Post Title</label>
            <input name="title" type="text"></input>

            <label>Content</label>
            <textarea name="body" type="text"></textarea>

            <label>Author</label>
            <input name="author" type="text"></input>
            
            <input type="submit"></input>
        </form>
    </div>
    )
}

//TODO: This has no security. Anyone can submit a blog post. Fix it

export default SubmitBlogPost;