//Components
import Navbar from "../components/navbar";

let SubmitBlogPost = () => {

    return(
    <div>
    <Navbar />
    <h1>New Blog Post</h1>
        <form action="placeholder" method="post">
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


export default SubmitBlogPost;