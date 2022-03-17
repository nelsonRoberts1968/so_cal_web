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
                  src="so_cal/src/assets/images/leadershipimages/img1.jpeg"
                  className="cover-img"
                />{" "}
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="so_cal/src/assets/images/leadershipimages/img2.jpeg"
                  width="180"
                  height="180"
                  className="cover-img"
                />
                <p> Vice President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="so_cal/src/assets/images/leadershipimages/img2.jpeg"
                  width="150"
                  height="150"
                  className="cover-img"
                />
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="so_cal/src/assets/images/leadershipimages/img3.jpeg"
                  width="150"
                  height="150"
                  className="cover-img"
                />
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="so_cal/src/assets/images/leadershipimages/img4.jpeg"
                  width="150"
                  height="150"
                  className="cover-img"
                />
                <p>President</p>
              </item>

              <item>
                <img
                  alt=""
                  src="so_cal/src/assets/images/leadershipimages/img4.jpeg"
                  width="150"
                  height="150"
                  className="cover-img"
                />
                <p>President</p>
              </item>
              <item>
                <img
                  alt=""
                  src="so_cal/src/assets/images/leadershipimages/img5.jpeg"
                  width="150"
                  height="150"
                  className="cover-img"
                />
                <p>President</p>
              </item>
            </Carousel>
          </>
    </div>
  );
}
