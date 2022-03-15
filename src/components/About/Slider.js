import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <>
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/feature/about/src/assets/images/Event10.jpeg?raw=true"
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="cover"
                />
                {/* src={process.env.PUBLIC_URL + `/src/assets/images/leadershipimages/img${index + 1}.jpeg`} className="my-2"style={{ width: "100%" }}
                        
                        alt="Group Leader"
                        />  */}
              </div>
              {/* <p>President</p> */}
            </>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: 12 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
