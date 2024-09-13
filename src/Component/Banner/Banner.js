import React from 'react';
import './Banner.css';
import  eggmeet from '../image/egg-meet-fish.png'
import  neupass from '../image/neupass.png'
import ayurveda from '../image/ayurveda.png'
import  combostore from '../image/combo-store.png'
import save from '../image/buy-more-save-more.webp'
import deal from '../image/deal-of-the-week.webp'

let Banner = () => {
  return (
    <div className='Banner'>
        <div className="container">        <div className='Banner-container'></div>
        <div className="row">
            <div className="eggmeet col-2 col-md-2 col-lg-2 col-xlg-2"><div className='gap'><img src={eggmeet} width="100%"/></div></div>
            <div className="neupass col-2 col-md-2 col-lg-2 col-xlg-2"><div className='gap'><img src={neupass} width="100%"/></div></div>
            <div className="ayurveda col-2 col-md-2 col-lg-2 col-xlg-2"><div className='gap'><img src={ayurveda} width="100%"/></div></div>
            <div className="ayurveda col-2 col-md-2 col-lg-2 col-xlg-2"><div className='gap'><img src={save} width="100%"/></div></div>
            <div className="combostore col-2 col-md-2 col-lg-2 col-xlg-2"><div className='gap'><img src={deal} width="100%"/></div></div>
            <div className="combostore col-2 col-md-2 col-lg-2 col-xlg-2"><div className='gap'><img src={combostore} width="100%"/></div></div>
            </div>

      </div>
    </div>
  );
};

export default Banner;
