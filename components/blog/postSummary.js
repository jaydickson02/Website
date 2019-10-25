
let postSummary = (props) => {

    let content = props.content;

    return(
        <div>
            <h1>{content.title}</h1>
            <p>{content.body}</p> 
            <h4>{content.author}</h4>
        </div>
    )//Remove the p tag. Don't need content here. This is a summary
}

export default postSummary;