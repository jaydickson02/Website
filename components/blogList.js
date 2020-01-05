import Link from 'next/link';

let blogList = (props) => {
    console.log(props.allBlogs)
    let posts = props.allBlogs.map(post => 
    <Link key ={post.document.data.title} href={`/blog/${post.document.data.title}`}>
        <a>{post.document.data.title}</a>
    </Link>);
    
    
    return(
        <div>
            {posts}
        </div>
    )
}

export default blogList;