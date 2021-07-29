import * as React from "react"
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from './Image'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'
import { RiSendPlane2Line } from "react-icons/ri"
// import DownArrow from './DownArrow'
// import { RiArrowDownCircleLine } from 'react-icons/ri'
// import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'


// import Img1 from './Img1'
// import Img2 from './Img2'
// import Img3 from './Img3'
// import Img4 from './Img4'
// import "../styles/nft.css"
const CustomBox = styled.div`

// caras





`

const CaseStudyPanels = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper home-posts post-card" style={{marginTop:'0', overflow:'hidden', height:'60vh', margin:'2rem 0', overflow:'hidden'}}>
    





  <div className="slidepanel home-posts post-card" >
  








  <div className="outerpanel" style={{borderLeft:'none',}}>

<span className="headline" style={{bottom:'35vh'}}>On Location</span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1', color:'#fff'}}>
          
          

 {/* <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>
 <a href="https://foundation.app/@twilightscapes/stellar-sentries-51674" target="_blank" rel="noopener noreferrer nofollow">
<StaticImage src="../img/favorites/night165.jpg" alt="Twilightscapes" className="" style={{ }} /></a>

</div> */}


<div className="spacer66" style={{height:'20vh'}} />

          <h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>On Location at your Destination</h2>

          <p className="letter">If you're buyin', I'm flyin' </p>



{/* <p>Single Shot - No PS - lightpainted long exposure</p> */}


<div style={{textAlign:'center', padding:'0', margin:'20px 0 0 0'}}>
              <Link
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'80%',
                backgroundColor:'#000 !important',
                textAlign:'center',
                display:'flex',
                margin:'0 auto'
                // flexDirection:'row',
                // justifyContent:'baseline'
              }}
              to="/photos/milky-way"
            >
              View Galleries {" "}
            </Link>
  </div>

        </div>
        
        
    </div>
    <StaticImage src="../../static/assets/dmitry-schemelev-OEnKKXvdbDU-unsplash.jpg" alt="Twilightscapes" className="popp" />

 </div>















 <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline" style={{bottom:'35vh'}}>Weddings/Ceremonies </span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1', color:'#fff'}}>
          
          

 {/* <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>

 <a href="https://foundation.app/@twilightscapes/alien-egg-farm-51678" target="_blank" rel="noopener noreferrer nofollow">
<StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="" style={{ }} /></a>

</div> */}

<div className="spacer66" style={{height:'20vh'}} />

          <h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Elegantly Yours Forever</h2>

          <p className="letter">And after the cake is cut and all the guests have gone there won't be a bill from me - because you've already paid up front!
</p>






{/* <p>Single Shot - No PS - long exposure</p> */}



<div style={{textAlign:'center', padding:'0', margin:'20px 0 0 0'}}>
<Link
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              to="/photos/crazy-geology"
            >
              View Galleries {" "}
            </Link>
  </div>


        </div>
        
        
    </div>
    <StaticImage src="../../static/assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg" alt="Twilightscapes" className="pop" />

 </div>












 <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline" style={{bottom:'35vh'}}>Engagements</span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1', color:'#fff'}}>
          
          

 {/* <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>

 <a href="https://foundation.app/@twilightscapes/boatswain-s-blunder-51680" target="_blank" rel="noopener noreferrer nofollow">
 <StaticImage src="../img/gallery2/night282.jpg" alt="Twilightscapes" className="featured-image " /></a>

</div> */}

<div className="spacer66" style={{height:'20vh'}} />
          <h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>After a long night, it's Amore´</h2>

          <p className="letter">Just one parting piece of advice, remember... that 3am run for TacoBell isn't going to end well. </p>



<div style={{textAlign:'center', padding:'0', margin:'20px 0 0 0'}}>
<Link
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              to="/photos/in-the-city"
            >
              View Galleries {" "}
            </Link>
  </div>


        </div>
        
        
    </div>
    <StaticImage src="../../static/assets/nick-karvounis-8WODX7nO2JE-unsplash.jpg" alt="Twilightscapes" className="pop" />

 </div>







    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default CaseStudyPanels