import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import Carousel from "react-elastic-carousel";

export default function Slider() {
  return (
    <div className="container-slider">
        <Carousel className="image-corousel">
          <item className="image-container-l">
            <img
              alt="president"
              src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img1.jpeg?raw=true"
              width="400"
              height="400"
            />
             <h3>Glen Bautista</h3>
            <p>Communication Officer</p>
        
          </item>
          <item className="image-container-l">
            <img
              alt="Vice-president"
              src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img5.jpeg?raw=true"
              width="400"
              height="400"
            />
            <h3>George Mlanzi</h3>
            <p>President</p>
           
          </item>
          {/* <item className="image-container-l">
            <img
              alt=""
              src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img4.jpeg?raw=true"
            />
            <h3>George Mlanzi</h3>
            <p>President</p>
          </item> */}
          <item>
            <img
              alt=""
              src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img8.jpeg?raw=true"
              width="400"
              height="400"
            />
            <h3>Khalipha Majid</h3>
            <p>Board Member</p>
          </item>
          <item className="image-container-l">
            <img
              alt=""
              src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img9.jpeg?raw=true"
              width="400"
              height="400"
            />
            <h3>Lilian Mgonja</h3>
            <p>Board Member</p>
          </item>

          <item className="image-container-l">
            <img
              alt="Vice-president"
              src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img12.jpeg?raw=true"
              width="400"
              height="400"
            />
            <h3>Safia Navarro-Shanghvi</h3>
            <p>Board Member</p>
          </item>
          <item className="image-container-l">
            <img
              alt=""
              src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/leadershipimages/img6.jpeg?raw=true"
              width="400"
              height="400"
            />
            <h3>Ruth Nkya</h3>
            <p>Director Of Intertainment</p>
          </item>
        </Carousel>
    </div>
  );
}
