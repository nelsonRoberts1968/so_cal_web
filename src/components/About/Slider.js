import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import Carousel from "react-elastic-carousel";

export default function Slider() {
   
        return (
            <div className="container-slider">
          <>
            <Carousel className="image-corousel">
              <item>
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img1.jpeg"
                  width="400"
                  height="400"
           
                />
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img2.jpeg"
                  width="400"
                  height="400"
                />
                <p> Vice President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img4.jpeg"
                />
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img8.jpeg"
                  width="400"
                  height="400"
                />
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img9.jpeg"
                  width="400"
                  height="400"
                />
                <p>President</p>
              </item>

              <item>
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img5.jpeg"
                  width="400"
                  height="400"
                />
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img6.jpeg"
                  width="400"
                  height="400"
      
                />
                <p>President</p>
              </item>
            </Carousel>
          </>
    </div>
  );
}
