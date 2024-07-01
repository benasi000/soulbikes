import React from 'react';
import LightGallery from 'lightgallery/react';
import data from "../../../constants/data";
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
        <div className='row'>
            <span className="work__content grid">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}>
                    {/* <a href={images.Soul_1} className="">
                    <img src = {images.Soul_1} alt = "" className="homeGalleryImgs" />
                   </a>

                    <a href={images.Soul_2} className="">
                    <img src = {images.Soul_2} alt = "" className="homeGalleryImgs" />
                    </a>

                    <a href={images.Soul_3} className="">
                    <img src = {images.Soul_3} alt = "" className="homeGalleryImgs" />
                    </a>

                    <a href={images.Soul_4} className="">
                    <img src = {images.Soul_4} alt = "" className="homeGalleryImgs" />
                    </a>

                    <a href={images.Soul_5} className="">
                    <img src = {images.Soul_5} alt = "" className="homeGalleryImgs" />
                    </a>

                    <a href={images.Soul_6} className="">
                    <img src = {images.Soul_6} alt = "" className="homeGalleryImgs" />
                    </a>

                    <a href={images.Soul_7} className="">
                    <img src = {images.Soul_7} alt = "" className="homeGalleryImgs" />
                    </a>

                    <a href={images.Soul_8} className="">
                    <img src = {images.Soul_8} alt = "" className="homeGalleryImgs" />
                    </a> */}

                    {
                    data.works.map((work, index) => {
                     return (
                       <div href={work.img} key={index} className="work__content--itemGallery ">
                        <img href={work.img} key={index} src = {work.img} alt = "" className="h-auto max-w-full rounded-lg" />
                       </div>
                     )
                    })
                    } 



                    {/* <div href={images.Soul_1} className="work__content--item ">
                    <img src = {images.Soul_1} alt = "" className="work__content--item h-auto max-w-full rounded-lg" style={height} />
                   </div>

                    <div href={images.Soul_2} className="work__content--item ">
                    
                    </div>

                    <div href={images.Soul_3} className="work__content--item ">
                    <img src = {images.Soul_3} alt = "" className="h-auto max-w-full rounded-lg" />
                    </div>

                    <div href={images.Soul_4} className="work__content--item ">
                    <img src = {images.Soul_4} alt = "" className="h-auto max-w-full rounded-lg" />
                    </div>

                    <div href={images.Soul_5} className="work__content--item ">
                    <img src = {images.Soul_5} alt = "" className="h-auto max-w-full rounded-lg" />
                    </div>

                    <div href={images.Soul_6} className="work__content--item ">
                    <img src = {images.Soul_6} alt = "" className="h-auto max-w-full rounded-lg" />
                    </div>

                    <div href={images.Soul_7} className="work__content--item ">
                    <img src = {images.Soul_7} alt = "" className="h-auto max-w-full rounded-lg" />
                    </div>

                    <div href={images.Soul_8} className="work__content--item ">
                    <img src = {images.Soul_8} alt = "" className="h-auto max-w-full rounded-lg" />
                    </div>  */}
            </LightGallery>
            </span>
            
        </div>
    );
}


export default NewGallery;