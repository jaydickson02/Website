import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

//Components
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'


export default function BlogTemplate(props) {

  // data from getInitialProps
  const markdownBody = props.content
  const frontmatter = props.data

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }
  
  return (
    <Layout>
    <Navbar page={1}/>
    
    <article className="blog">
        <figure className="blog__hero">
        <img
            src={frontmatter.hero_image}
            alt={`blog_hero_${frontmatter.title}`}
        />
        </figure>
        <div className="blog__info">
        <h1>{frontmatter.title}</h1>
        <h3>{reformatDate(frontmatter.date)}</h3>
        </div>
        <div className="blog__body">
        <ReactMarkdown source={markdownBody} />
        </div>
        <h3 className="blog__footer">
        Author: {frontmatter.author}
        </h3>
    </article>
    <style jsx>
      {`
        .blog__body img {
          max-width: 100%;
          display: block; 
        }

        .blog h1 {
          margin-bottom: .7rem;
        }
        
        .blog__hero {
          height: 30vh;
          width: 95%;
          margin: 0;
          overflow: hidden;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
        }
        .blog__hero img {
          margin-bottom: 0;
          object-fit: cover;
          min-width:100%;
          max-height:100%;
          object-position: center;
        }
        
        .blog__info {
          padding: 1.5rem 1.25rem;
          width: 100%;
          max-width: 768px;
          margin: 0 auto;
        }
        .blog__info h1 {
          margin-bottom: 0.66rem;
        }
        .blog__info h3 {
          margin-bottom: 0;
        }
        
        .blog__body {
          width: 100%;
          padding: 0 1.25rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .blog__body a {
          padding-bottom: 1.5rem;
        }
        .blog__body:last-child {
          margin-bottom: 0;
        }
        .blog__body h1 h2 h3 h4 h5 h6 p {
          font-weight: normal;
        }
        .blog__body p {
          color: inherit;
        }
        .blog__body ul {
          list-style: initial;
        }
        .blog__body ul ol {
          margin-left: 1.25rem;
          margin-bottom: 1.25rem;
          padding-left: 1.45rem;
        }
        
        .blog__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1.25rem;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        .blog__footer h2 {
          margin-bottom: 0;
        }
        .blog__footer a {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .blog__footer a svg {
          width: 20px;
        }
        
        @media (min-width: 768px) {
          .blog {
            display: flex;
            flex-direction: column;
          }
          .blog__body {
            max-width: 800px;
            padding: 0 2rem;
          }
          .blog__body span {
            width: 100%;
            margin: 1.5rem auto;
          }
          .blog__body ul ol {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .blog__hero {
            min-height: 200px;
            height: 25vh;
          }
          .blog__info {
            text-align: center;
            padding: 2rem 0;
          }
          .blog__info h1 {
            max-width: 500px;
            margin: 0 auto 0.66rem auto;
          }
          .blog__footer {
            padding: 2.25rem;
          }
        }
        
        @media (min-width: 1440px) {
          .blog__hero {
            height: 50vh;
          }
          .blog__info {
            padding: 3rem 0;
          }
          .blog__footer {
            padding: 2rem 2rem 3rem 2rem;
          }
        }
      `}
      
    </style>
  </Layout>
  )
}

BlogTemplate.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${slug}.md`)
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default)
  return {
    ...data
  }
}