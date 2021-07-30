import React from "react"
import { graphql } from "gatsby"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"
import ScrollAnimation from 'react-animate-on-scroll'
import { StaticImage } from "gatsby-plugin-image"
export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />


      <div className="container" style={{padding:'2rem 8%', maxWidth:'1024px'}}>


      <div className="mobile"><GoBack /></div>


      <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',  }}>

<p>
{/* <span className="txtshadow-header" style={{fontSize:'100px', color:'#ccc', position:'absolute', top:'-40px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'100px', color:'#ccc', position:'absolute', bottom:'-50px', right:'-10px',}}>&#10078;</span><br /> */}

Hi, I'm Laura and welcome to Dress Up Chef! This site became an outlet for a hobby that I took up during Hurricane Katrina. I started by creating an apron for myself and then others saw it and wanted one. Once I made one for all of my friends, I figured ya'll might like one too. 
</p>
<br />
{/* <h5>- Laura</h5> */}
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'0', overflow:'hidden', clipPath:'circle()',
border:'2px solid white'}} ><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/mom-icon.jpg" style={{borderColor:'transparent', borderRadius:'40%'}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Laura Lambert</div>
</div>
</ScrollAnimation>

 </div>


      {/* <section className="article-header" style={{textAlign:'left', margin:'0 4%', height:'auto'}}>
            <h1>{frontmatter.title}</h1>
           
          </section>

        <article dangerouslySetInnerHTML={{ __html: html }} /> */}

      </div>




      <GoBack />
    </Layout>
  )
}

export default AboutPage
