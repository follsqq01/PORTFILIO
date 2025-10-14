import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";
import preview4 from "../../assets/project-img-3.jpg";
import wh1 from "../../assets/1_wh.png";
import wh2 from "../../assets/2_wh.png";
import wh3 from "../../assets/3_wh.png";
import wh4 from "../../assets/4_wh.png";
import wh5 from "../../assets/5_wh.png";
import wh6 from "../../assets/6_wh.png";
import wh7 from "../../assets/7_wh.png";
import wh8 from "../../assets/8_wh.png";
import wh9 from "../../assets/9_wh.png";
import wh10 from "../../assets/10_wh.png";
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
import postcards from "../../assets/postcards.png";
import render_wh1 from "../../assets/render_wh1.png";
import render_wh2 from "../../assets/render_wh2.png";
import render_wh3 from "../../assets/render_wh3.png";
import render_wh4 from "../../assets/render_wh4.png";
import fashion_website from "../../assets/fashion_website.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const images = [book1, book2, book3, book4, book5, book6, book7, book8];

import ImageSlider from "./ImageSlider";

import "./Project3.css";
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
            <span>WITCH'S HAT</span>
            <span>2025</span>
          </div>
        </section>
        <section className="project-hero" data-scroll-section>
          <div className="project-hero-img">
            <img src={preview4} alt="" />
          </div>
        </section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                A playful, magical charity project created to remind us of the
                wonder and kindness we all carry inside — and to turn that light
                into support for children on the autism spectrum. Soft pastels,
                whimsical shapes, and friendly creatures invite everyone to
                believe in magic again — where design becomes a gentle act of
                care.
              </p>
              <br />
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>Kindness makes our world magical!</h1>
            </div>
          </div>
        </section>

        {/* <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh1} alt="" />
          </div>
        </section> */}
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh2} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh3} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh5} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh4} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh6} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh7} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh8} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh9} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={wh10} alt="" />
          </div>
        </section>

        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                A magical guidebook with original illustrations designed to
                showcase the studio space
              </p>
              <br />
              <p>
                The first part features the studio's values, which inspire
                creativity and help you see the world in a new way. The second
                part offers a guide to the castle, revealing its rooms, cozy
                café, and workshop, where small miracles happen every day.
              </p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>picture book</h1>
            </div>
          </div>
        </section>

        <section className="project-img-full" data-scroll-section>
          <ImageSlider />
        </section>

        {/* <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={render_wh1} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={render_wh2} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={render_wh3} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={render_wh4} alt="" />
          </div>
        </section> */}
        {/* <section className="project-both-img" data-scroll-section>
          <video
            src={fashion_website}
            autoPlay
            loop
            muted
            playsInline
            className="videoPreview_YoungKink"
          />
        </section> */}
        <section className="projects discover" data-scroll-section>
          <div className="projects-copy">
            <div className="projects-copy-h1">
              <h1>Find more projects</h1>
            </div>
            <div className="projects-copy-ws"></div>
          </div>
          <div className="projects-list">
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
