import React from 'react';
import './Section.css';
import happy from './happy.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';

const Section = () => {
    return (
    
 <div className="section-dark"> 
   <section> 
    <div className="container"> 
     <div className="row"> 
      <div className="col-sm-6 col-md-4 item"> 
       <h2 style={{text-align:"center"}}> Our Achievements </h2> 
       <p style={{text-align:"center"}}> It is long established fact that a reader will be distract by the readable content of a page when looking at its layout. The point of using lorem Ipsum is that it has a more or less normal distribution of letter </p> 
      </div> 
      <div className="col-sm-6 col-md-4 item"> 
       <div className="card"> 
        <div>
         <span><img className="pic1" src={happy} alt="">  </span> 
        </div> 
        <div className="text"> 
         <span className="font"> 700+ </span>
         <br> 
         <span>Happy Clients</span> 
        </div> 
       </div> 
       <div className="card"> 
        <div> 
         <span><img className="pic" src={pic1} alt="">  </span> 
        </div> 
        <div className="text"> 
         <span className="font"> 140+ </span>
         <br> 
         <span> Projects Complete </span> 
        </div> 
       </div> 
       <div className="col-sm-6 col-md-4 item"> 
        <div className="card"> 
         <div> 
          <span><img className="pic" src={pic2} alt="">  </span> 
         </div> 
         <div className="text"> 
          <span className="font"> 25+ </span>
          <br> 
          <span> Crazy Minds </span> 
         </div> 
        </div> 
        <div className="card"> 
         <div> 
          <span><img className="pic" src={pic3} alt="">  </span> 
         </div> 
         <div className="text"> 
          <span className="font"> 75+ </span>
          <br> 
          <span>Running Projects</span> 
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 
    </div>
   </section> 
  </div>
    );
};

export default Section;