import React from "react";
import Slider from "react-slick";
import { brends } from "../util/mock";
import Title from "./Title";

export function Brends() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    };
    return (
        <div className="px-[100px] mt-16">
            <div className=" border-t border-slate-950 pt-6"></div>
            <div className="flex justify-between">
                <Title title="Популярные бренды" />
                <div className='text-xl text-blue cursor-pointer'>Bce бренды</div>
            </div>
            <Slider {...settings} className="px-[50px] mt-12">
                {
                    brends.map(brend =>
                        <div key={brend.id} className="cursor-pointer" >
                            <img src={brend.img} alt={brend.name} className="m-auto" />
                        </div>
                    )
                }
            </Slider>
        </div>

    );
}