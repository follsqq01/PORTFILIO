import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import transition from "../transition";
import HeroImg from "../../assets/hero-img.jpg";
import BannerImg from "../../assets/banner-img.jpg";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./Home.css";

const Home = () => {
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
        className="home"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <section className="hero-img" data-scroll-section>
          <div className="hero-img-container">
            <img src={BannerImg} alt="" />
          </div>
          <div className="hero-img-copy">
            <div cMWlassName="hero-img-copy-h1">
              <h1>ISCRA</h1>
              <h1>STUDIO</h1>
            </div>
          </div>
        </section>
        <section className="projects" data-scroll-section>
          <div className="projects-copy">
            <div className="projects-copy-ws"></div>

            <div className="projects-copy-h1">
              <h1>
                Hello! We are a multi-disciplinary design studio that is always
                ready to work with creative projects!
              </h1>
            </div>
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
                  <p>ECHO:</p>
                </div>
                <div className="project-category">
                  <p>archive of memories</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="projects-list">
            <Link to="/sample-project-page3">
              <div className="project">
                <div className="project-img project-img-3"></div>
                <div className="project-name">
                  <p>WITCH'S HAT:</p>
                </div>
                <div className="project-category">
                  <p>Charity project</p>
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
        {/* <section className="article" data-scroll-section>
          <div className="article-container">
            <div className="article-container-copy">
              <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                aspernatur ratione iure dicta officiis pariatur corrupti laborum
                rem molestiae odio?
              </h1>
              <a href="#">Some CTA &#8599;</a>
            </div>
          </div>
        </section> */}
        <section className="services" data-scroll-section>
          <div className="services-copy-p">
            <span>areas</span>
          </div>
          <div className="services-copy-h1">
            <h1>
              UX/UI / BRANDING / CODING / ILLUSTRATION / WEB-DESIGN / GENETATIVE
              CONTENT{" "}
            </h1>
          </div>
        </section>
        <section className="services" data-scroll-section>
          <div className="services-copy-p">
            <span>skills</span>
          </div>
          <div className="services-copy-h1">
            <h1>
              FIGMA / ILLUSTRATOR / PHOTOSHOP / INDESIGN / MIDJOURNEY / BLENDER
              / TILDA / READYMAG{" "}
            </h1>
          </div>
        </section>
        {/* <section className="feature-img" data-scroll-section>
          <div className="feature-img-container">
            <img src={HeroImg} alt="" />
          </div>
        </section> */}
        <section className="logos" data-scroll-section>
          {/* <Marquee>
            <div className="client-logos">
              <div className="client-logo">
                <p>Logo 1</p>
              </div>
              <div className="client-logo">
                <p>Logo 2</p>
              </div>
              <div className="client-logo">
                <p>Logo 3</p>
              </div>
              <div className="client-logo">
                <p>Logo 4</p>
              </div>
              <div className="client-logo">
                <p>Logo 5</p>
              </div>
              <div className="client-logo">
                <p>Logo 6</p>
              </div>
              <div className="client-logo">
                <p>Logo 7</p>
              </div>
              <div className="client-logo">
                <p>Logo 8</p>
              </div>
            </div>
          </Marquee> */}
        </section>
        {/* <section className="clients" data-scroll-section> */}
        {/* <div className="client-copy">
            <div className="client-copy-p">
              <p>ABOUT ME</p>
              <br />
              <p>
                Driven by curiosity and a passion for creative problem-solving,
                I immerse myself in every stage of digital product design, from
                user research to prototyping and launch. My experience as a
                recurring hackathon and creaton participant sharpens my ability
                to collaborate under pressure, foster teamwork, and generate
                bold visual solutions on tight timelines. I thrive in hands-on
                client work, always seeking to uncover the underlying goals and
                emotions that shape each brief—valuing open dialogue,
                constructive iteration, and honest feedback above formulaic
                solutions.
              </p>
              <br />
              <p>
                For me, meaningful product design is rooted in human-centric
                thinking, visual clarity, and shared purpose. I believe the best
                outcomes arise when curiosity, strategic rigor, and client
                vision are woven together, and I actively cultivate these
                connections through my academic, creative, and mentoring roles.
              </p>
              <br /> */}
        {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                et earum placeat delectus iure optio sapiente harum consequatur
                ratione totam?
              </p>
            </div>
            <div className="client-copy-p">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, eum at. Vel rem, ipsum tenetur rerum doloremque
                pariatur magnam, quos, quod fugiat quo odit. Quia, pariatur
                officia. Facilis veniam tempore debitis error totam minima
                voluptatum distinctio ut et? Similique, soluta!.
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                et earum placeat delectus iure optio sapiente harum consequatur
                ratione totam?
              </p> */}
        {/* </div>
          </div> */}
        {/* </section> */}
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

export default transition(Home);
