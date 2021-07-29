/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"

import { RiArrowRightSLine } from "react-icons/ri"
// import Intro2 from '../components/Intro2'
import { Helmet } from "react-helmet"
import Newsignup from "../components/newssign"
// import ShareSocial from '../components/share' 
import styled from "styled-components"
// import { FaHandPointDown } from "react-icons/fa"
// import ScrollAnimation from 'react-animate-on-scroll'
// import Trumpy from '../../static/assets/trump-family-board.svg'
// import Gearbox from "../components/gearbox"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const CustomBox = styled.div`


`




export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`



const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" />
</Helmet>
<Seo
          title={`Photo Galleries`}
          description={`photography`}
          image={'/default-og-image.jpg'}
        />
      
      <div className="vidbox" style={{maxHeight:'100vh', maxWidth:'100vw'}}>
<div className="video-background" style={{zIndex:'0'}}>


{/*  */}

<div className="home-banner flexbutt" style={{position:'absolute', height:'100vh', overflow:'hidden', zIndex:'0', border:'0px solid', left:'0', right:'0', top:'0',bottom:'0', width:'100vw'}}>

      <div className="flexcheek seotext" style={{padding:'0 3% 3rem 3%', color:'#fff'}}>


          

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
         style={{textShadow:'2px 2px 0 #000'}} />
  
          


          


      </div>

      <div className="flexcheek" style={{position:'relative', overflow:'hidden', paddingTop:'10vh'}}>
      {/* <Intro2 /> */}
     {/* <Newsignup /> */}
      

     <h1 className="title1">{frontmatter.title}</h1>
          <p
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </p>


     <Link
            to={frontmatter.cta.ctaLink}
            className="actionJackson txtshadow"
            style={{
              cursor:'pointer',
              width:'70%',
              margin:'0 auto'

            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>






      </div>

        </div>

{/*  */}


    <div className="video-foreground" style={{position:'absolute', zIndex:'-1'}}>
      
<iframe className="video" width="100%" height="350" src="https://www.youtube.com/embed/vWNkRK6-oU4?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=vWNkRK6-oU4" frameBorder="0" allowFullScreen></iframe>

    





     
    </div>
</div>
</div>

      
      

        


      <div style={{padding:'2rem 3%'}}>
        <BlogListHome data={posts} />
        </div>



        {/* <div style={{padding:'2rem 3%'}}>
        <Gearbox data={posts} />
        </div> */}
      
      

{/* <Trumpy /> */}
{/* <img id="trump" className="trump" src={Trumpy} alt="Trump sucks" title="Trump sucks" style={{minWidth:'100vw', maxWidth:'100%',}} /> */}

{/* <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Wanna get in touch?</h3>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation> */}

    </Layout>
    </CustomBox>
  )
}

export default HomePage