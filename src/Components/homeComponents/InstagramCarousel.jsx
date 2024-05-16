import React from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';


const InstagramCarousel = () => (
    <div className="mx-auto px-40">
        <div className="w-full">
            <Carousel className="carosal" arrows autoplay>
                <div className="my-auto">
                    <img
                        src="https://i.ibb.co/hBmnXPR/DINING-ROOM2-copy.jpg"
                        className="mx-auto w-2/3 rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/HHpPK1z/GUEST-ROOM-AS-copy.jpg"
                        className="mx-auto w-1/2 rounded-xl"
                    />
                </div>
                <div>
                <img
                        src="https://i.ibb.co/fq00rDG/KIDS-BEDROOM3-copy.jpg"
                        className="mx-auto w-1/2 rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/Ny683Cx/LIVING-ROOM-AD1-copy.jpg"
                        className="mx-auto w-2/3 rounded-xl"
                    />
                </div>
            </Carousel>
        </div>
    </div>
);
export default InstagramCarousel;