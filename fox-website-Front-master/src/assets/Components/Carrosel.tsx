import "./Carrosel.css";
import{ Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import varse from "../imgs/7e8d61af9b5721f29ec6a7a782841ea79cdf46f2779b5f24e7427c96bb572fb9._SX1080_FMjpg_.jpg";
import irla from "../imgs/maxresdefault.jpg";
import mar from "../imgs/The_Super_Mario_Bros._Movie_poster12.jpg";
import ophe from "../imgs/oppen1.jpeg";


import 'swiper/css';
import 'swiper/css/autoplay';

function Carsel(){
    return(
        <>
        <div className="CRm">
            <Swiper
            autoplay={{
                delay: 5000
            }}
            
            modules={[Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="sl1">
                    <a href="#/V-de-Vingança">
                        <img className="CRfoto" src={varse}/>
                    </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  className="sl2">
                    <a href="#/O-irlandes">
                    <img className="CRfoto" src={irla}/>
                    </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sl3">
                    <a href="#/Super-Mario">
                    <img className="CRfoto" src={mar}/>
                    </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sl4">
                    <a href="#/Openheimer">
                    <img className="CRfoto" src={ophe}/>
                    </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        </>
    ) 
}

export default Carsel