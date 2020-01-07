import matter from 'gray-matter'
import Layout from '../components/layout'
import BlogList from '../components/blogList'
import Navbar from "../components/navbar"
import Meta from '../components/headSEO'

  const blog = props => {
    return (
      <Layout>
         <Meta title={'Blog | Jay Dickson'} 
            desc={"Programming, Science and whatever else I feel like writing about. Find it all here."}/>
        <Navbar page={1}/>
        <section>
          <BlogList allBlogs={props.allBlogs} />
        </section>
      </Layout>
    )
  }

  blog.getInitialProps = async function() {
    // get all .md files from the src/posts dir
    const posts = (context => {
      // grab all the files matching this context
      const keys = context.keys()
      // grab the values from these files
      const values = keys.map(context)
      // go through each file
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.')
        // get the current file value
        const value = values[index]
        // Parse frontmatter & markdownbody for the current file
        const document = matter(value.default)
        // return the .md content & pretty slug
        return {
          document,
          slug,
        }
      })
      // return all the posts
      return data
    })(require.context('../posts', true, /\.md$/))
  
    return {
      allBlogs: posts
    }
  }
  
  export default blog