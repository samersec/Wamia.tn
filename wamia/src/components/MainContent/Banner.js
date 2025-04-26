import React from 'react';
import '../../styles/main.css';

const Banner = () => {
  return (
    <div className="cdz-slideshow cdz-rounded-border">
      <div 
        className="cdz-slideshow-outer abs-frame" 
        style={{
          paddingBottom: '58.5%',
          background: 'url(/images/coussin_de_grossesse.png) no-repeat center center',
          backgroundSize: 'cover'
        }}
      >
        <div className="cdz-slideshow-inner abs-frame-inner">
          <div className="items" role="items"></div>
          <div className="desc-placeholder" style={{display: 'none'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;