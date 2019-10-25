//Material

//Components
import PostBoard from "../components/blog/postBoard"
import Navbar from "../components/navbar"
//Next

let blog = () => {
    
    return(
        <div>
            <Navbar />
            <h1>Blog!!!</h1>
            <PostBoard />
        </div>
    )
}


export default blog;

//Gonna have to have a get inital props