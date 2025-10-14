import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";
import preview4 from "../../assets/preview.mp4";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import macbook_moc4 from "../../assets/macbook_moc4.png";
import book4 from "../../assets/book4.jpg";
import book5 from "../../assets/book5.jpg";
import book6 from "../../assets/book6.jpg";
import book7 from "../../assets/book7.jpg";
import book8 from "../../assets/book8.jpg";
import card4 from "../../assets/card4.png";
import lightbox from "../../assets/lightbox.jpg";
import tShirt from "../../assets/tshirt-tag.png";
import postcards from "../../assets/postcards.png";
import fashion_website from "../../assets/fashion_website.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const images = [book1, book2, book3, book4, book5, book6, book7, book8];

import ImageSlider from "./ImageSlider";

import "./Project4.css";
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
            <span>AR-008-0625-MSK</span>
            <span>2025</span>
          </div>
        </section>
        <section className="project-hero" data-scroll-section>
          <video
            style={{ width: "100vw", height: "auto" }}
            src={preview4}
            autoPlay
            loop
            muted
            playsInline
            className="project-hero-img"
          />
        </section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                Every item has its own story. Someone wore a coat on the day
                they fell in love, a dress to graduation, and a sweater to
                grandma's dacha, where it smelled of raspberries and mint. The
                brand collects clothes that have endured a lot and gives them
                the chance to become part of a new story.
              </p>
              <br />
              <p>
                AR-008-0625-MSK: <br></br>i. AR — archived rewear; <br></br>ii.
                number of items in the collection — 008; <br></br>iii. date —
                June 2025; <br></br> iv. location — Moscow.
              </p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>every thing has a history</h1>
            </div>
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <ImageSlider />
        </section>

        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={lightbox} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={card4} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={tShirt} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={postcards} alt="" />
          </div>
        </section>
        <section className="social-media"></section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>WEB-SITE</h1>
            </div>
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={macbook_moc4} alt="" />
          </div>
        </section>
        <section className="project-both-img" data-scroll-section>
          <video
            src={fashion_website}
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
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-1"></div>
                <div className="project-name">
                  <p>YOUNG KINK:</p>
                </div>
                <div className="project-category">
                  <p>JEWELRY STORE</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page2">
              <div className="project">
                <div className="project-img project-img-2"></div>
                <div className="project-name">
                  <p>ECHO;</p>
                </div>
                <div className="project-category">
                  <p>archive of memories</p>
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
