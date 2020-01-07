import BlogSummary from '../components/blogSummary'

let blogList = (props) => {
    console.log(props.allBlogs)
    //TODO: Sort by date. Date can be accessed at post.document.data.date
    
    let posts = props.allBlogs.map(post => 
        <BlogSummary key ={post.document.data.title} content = {post.document}/>
    );
    
    return(
        <div>
            {posts}
        </div>
    )
}

export default blogList;