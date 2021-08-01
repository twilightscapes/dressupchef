

import * as React from "react"
import { graphql, Link } from "gatsby"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { FaHandPointDown } from "react-icons/fa"
import Intro2 from '../components/Intro2'
import LogoMark from "../../static/assets/DUC-logomark.svg"
// import GalleryMenu from "../../components/galleryMenu"
// import { Helmet } from "react-helmet"
// import TouchUp from '../components/TouchUp'
// import { RiSendPlane2Line } from "react-icons/ri"
import { Helmet } from "react-helmet"
import { FiZoomIn } from 'react-icons/fi'
// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "../../index.module.css"
import ShareSocial from '../components/share' 
import { StaticImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
const CustomBox = styled.div`





// img{cursor: zoom-in !important;}




@media (min-width: 58em) {

}


`


export const query = graphql`
query {
  shopifyCollection(handle: { eq: "dressupchef" }) {
    products {
      ...ProductCard
    }
  }
}
`

export default function GalleryPage({ data }) {
  return (
<> 
<Helmet>
    <body className="homepage1" />
    
</Helmet>

<Seo
          title={`Dress Up Chef - Designer Kitchen Aprons`}
          description={`Designer Kitch Aprons handmade from Mens Dress Shirts - one of a kind unique hand sewn aprons`}
          image={'https://dressupchef.com/default-og-image.jpg'}
        />




    <CustomBox>
    <Layout>






{/* <div className="zoomer" style={{zIndex:'1', position:'fixed', bottom:'5vh', display:'flex', justifyContent:'center', width:'100vw'}}>
    <span style={{display:'flex',alignItems:'center', justifyContent:'center', position:'fixed', bottom:'50px', zIndex:'1', textAlign:'center', color:'#fff', fontSize:'100%', fontFamily:'Hammersmith One', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', }}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</span>
</div> */}











<div className="home-banner flexbutt" style={{position:'relative', height:'auto', overflow:'hidden'}}>

      <div className="flexcheek seotext" style={{padding:'0 3% 3rem 3%',}}>

      <div style={{display:'flex', justifyContent:'center', padding:'0 0', alignContent:'center', alignItems:'center'}}><LogoMark style={{maxWidth:'40%', filter:'drop-shadow(1px 1px 0px #111)' }} />

          <h1 className="title0" style={{color:'var(--primary-color)', fontSize:'60px', lineHeight:'100%', textAlign:'center', textShadow:'0px 1px 1px 2px #000', filter:'drop-shadow(1px 1px 1px #000)'}}>DRESS UP<br /> CHEF</h1></div>
          <p
            className="brand" style={{fontSize:'18px', marginTop:'2rem', textAlign:'center',}}
          >
            Handmade Kitchen Aprons Made From Mens Dress Shirts.
          </p>

          <p>Hi, I'm Laura and welcome to Dress Up Chef. This site is an outlet that my son set up me to sell a hobby that I took up during Hurricane Katrina.</p>
          
{/* I had a bunch of extra shirts that I had bought for my husband and my son that they didn't want. */}
 
<br />
 <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'0', borderRadius:'0', overflow:'',}}>

<ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'60%',}}>    




<blockquote style={{width:'', margin:'0'}}>I started by creating an apron for myself and then others saw it and wanted one too. <br /><br />Soon, I had made one for all of my friends, so I figured ya'll might like one as well? </blockquote>




</ScrollAnimation>

<ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'0', order:'2 !important',  zIndex:'0', filter: 'drop-shadow(0px 0px 3px #222)'}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'0', overflow:'hidden', clipPath:'circle()',
border:'4px solid white', }} ><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/mom-icon.jpg" style={{borderColor:'transparent', borderRadius:'40%'}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Laura Lambert</div>
</div>
</ScrollAnimation>

</div>




  
          {/* <Link
            to="/designer-aprons/apron"
            className="actionJackson txtshadow"
            style={{
              cursor:'pointer',
              width:'70%',
              margin:'0 auto'

            }}
          >
            View Aprons
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link> */}


          <br /><br />
<StaticImage alt="Dress Up Chef" src="../img/product-close-up.jpg" style={{borderColor:'transparent',}} />

      </div>



        




  

<div className="flexcheek" style={{position:'relative', overflow:'hidden'}}>
      <Intro2 />
      
      







      </div>
        </div>













        {/* <div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>
        <h2 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>FREE SHIPPING ON ALL ORDERS!</h2>
</div> */}



<div className="brand" style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 auto 0 auto', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'90%', gap:'20px', background:''}}>

  <span style={{fontSize:'60px', transform:'rotate()', lineHeight:'80%'}}>FREE <br /><span style={{letterSpacing:''}}>Shipping</span></span>

  <span style={{fontSize:'60px', color:'var(--primary-color)', lineHeight:'90%'}}>
  On all <br /> Orders!
  </span>
</div>




        <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Currently Available Aprons</h3>

    

    <div className="frontprod" style={{marginTop:'2rem'}}>
      <ProductListing products={data.shopifyCollection.products} className="frontprod" />
</div>
<br />
<br />
<br />

<p style={{textAlign:'center', margin:'2rem 0 0 0'}}>Please SHARE:</p>
<ShareSocial className="print" />


      {/* <Link
              className="moreButton"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              to="/vault/favorites/"
            >
              View More {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </Link> */}

            {/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'2rem 0 2rem 0'}}>
              
              

<p style={{textAlign:'center', margin:'2rem 0 0 0'}}>GET ALL YOUR FAVORITES NOW</p>

<div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>

  <span style={{fontSize:'70px', color:'white', transform:'rotate()', lineHeight:'80%'}}>PICK ANY <br /><span style={{letterSpacing:''}}>THREE</span></span>

  <span style={{fontSize:'40px', color:'var(--primary-color)', lineHeight:'90%'}}>
  ONLY PAY<br /> FOR TWO
  </span>
</div>
</div> */}

{/* <blockquote style={{fontSize:'130%', border:'1 px dotted', padding:'1rem', borderRadius:'12px', width:'60%', margin:'3rem auto 1rem auto', padding:'0 8%', textAlign:'center'}}>You know what they say about people who can't pick 3 of anything? Maybe we need to talk?</blockquote>


<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation> */}


   </Layout></CustomBox>
    </>
  )
}