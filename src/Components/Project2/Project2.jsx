import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";
import echo_video from "../../assets/echo_video.mp4";
import app from "../../assets/app_echo.png";
import book1 from "../../assets/book1_echo.jpg";
import book2 from "../../assets/book2_echo.jpg";
import book3 from "../../assets/book3_echo.jpg";
import book4 from "../../assets/book4_echo.jpg";
import book5 from "../../assets/book5_echo.jpg";
import book6 from "../../assets/book6_echo.jpg";
import book7 from "../../assets/book7_echo.jpg";
import book8 from "../../assets/book8_echo.jpg";
import book9 from "../../assets/book9_echo.jpg";
import preview_echo from "../../assets/preview_echo.jpg";
import book10 from "../../assets/book10_echo.jpg";
import book11 from "../../assets/book11_echo.jpg";
import book12 from "../../assets/book12_echo.jpg";
import book13 from "../../assets/book13_echo.jpg";
import book14 from "../../assets/book14_echo.jpg";
import book15 from "../../assets/book15_echo.jpg";
import postcards2 from "../../assets/postcards2.png";
import postcard_echo from "../../assets/postcard2_echo.png";

import poster1 from "../../assets/poster1.png";
import poster2 from "../../assets/poster2.png";
import poster3 from "../../assets/poster3.png";
import mocup1 from "../../assets/mocup1_echo.png";
import mocup2 from "../../assets/mocup2_echo.png";

import card4 from "../../assets/card4.png";
import lightbox from "../../assets/lightbox.jpg";
import tShirt from "../../assets/t-shirt-tag.png";
import postcards from "../../assets/postcards.png";
import fashion_website from "../../assets/fashion_website.mp4";
import render1_echo from "../../assets/render1_echo.png";
import render2_echo from "../../assets/render2_echo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const images = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
  book11,
  book12,
  book13,
  book14,
  book15,
];

import ImageSlider from "./ImageSlider";

import "./Project2.css";
import { px } from "framer-motion";

const Project = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  }

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        className="project-wrapper"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <section className="project-type" data-scroll-section>
          <div className="project-type-copy">
            <span>ECHO</span>
            <span>2024</span>
          </div>
        </section>
        <section className="project-hero" data-scroll-section>
          <div className="project-hero-img">
            <img src={preview_echo} alt="" />
          </div>
        </section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                every memory is an echo of our past. echo is an interactive
                space that generates personal human memories through visual
                representation and sounds using AI.
              </p>
              {/* <br />
              <p>
                AR-008-0625-MSK: <br></br>i. AR — archived rewear; <br></br>ii.
                number of items in the collection — 008; <br></br>iii. date —
                June 2025; <br></br> iv. location — Moscow.
              </p> */}
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>every memory is an echo of our past</h1>
            </div>
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={render1_echo} alt="" />
          </div>
        </section>

        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={render2_echo} alt="" />
          </div>
        </section>

        <section className="project-img-full" data-scroll-section>
          <ImageSlider />
        </section>

        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={postcard_echo} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={postcards2} alt="" />
          </div>
        </section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                in addition to personal “dives” into memories, “echo” is engaged
                in organizing and holding thematic events.
              </p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>series of posters for ECHO</h1>
            </div>
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={poster1} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={mocup1} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={poster2} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={mocup2} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={poster3} alt="" />
          </div>
        </section>
        <section className="social-media"></section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                the multi-page site is made up of archived memories and includes
                sections on the space, meetings, merch, and archive.
              </p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>multi-page web-site</h1>
            </div>
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={app} alt="" />
          </div>
        </section>
        <section className="project-both-img" data-scroll-section>
          <video
            src={echo_video}
            autoPlay
            loop
            muted
            playsInline
            className="videoPreview_YoungKink"
          />
        </section>
        <section className="projects discover" data-scroll-section>
          <div className="projects-copy">
            <div className="projects-copy-h1">
              <h1>Find more projects</h1>
            </div>
            <div className="projects-copy-ws"></div>
          </div>
          <div className="projects-list">
            <Link to="/sample-project-page3">
              <div className="project">
                <div className="project-img project-img-3"></div>
                <div className="project-name">
                  <p>WITCH'S HAT:</p>
                </div>
                <div className="project-category">
                  <p>charity children's project</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page4">
              <div className="project">
                <div className="project-img project-img-4"></div>
                <div className="project-name">
                  <p>AR-008-0625-MSK:</p>
                </div>
                <div className="project-category">
                  <p>second-hand store with a history</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="footer" data-scroll-section>
          <div className="footer-copy">
            <div className="footer-copy-h1">
              <a href="#">
                <h1>Contacts</h1>
              </a>
            </div>
            <div className="footer-copy-text">
              <p>Design studio</p>
              <br />
              <p>
                <a href="#">Telegram</a> • <a href="#">Instagram</a> •{" "}
                <a href="#">iscrastudio@yandex.ru</a>{" "}
              </p>
              <br />
              <p>Moscow, RU {time}</p>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(Project);
