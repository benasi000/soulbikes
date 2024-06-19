import React from 'react';
import LightGallery from 'lightgallery/react';
import data from "../../../constants/data";
import images from "../../../constants/images";
import "./WorkGalerija.css";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function NewGallery() {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div >
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]} >
               {/* {
                    data.works.map((work, index) => {
                     return (
                       <div href={work.img} key={index} className="">
                        <img src = {work.img} alt = "" className="h-auto max-w-full rounded-lg" />
                       </div>
                     )
                    })
                } */}
                <a href={images.Soul_1}  className='size-20'>
                    <img alt="img1" src={images.Soul_1} className='grid-rows-1'/>
                </a>
                <a href={images.Soul_1} >
                    <img alt="img1" src={images.Soul_1} className='grid-rows-1 size-20'/>
                    </a>


            </LightGallery>
        </div>
    );
}


export default NewGallery;