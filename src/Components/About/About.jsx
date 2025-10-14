import { React, useState, useEffect, useRef } from "react";

import transition from "../transition";
import AboutHero from "../../assets/about-hero.jpg";
import Masha from "../../assets/portraits.png";
import Office from "../../assets/about-office.jpg";
import BannerImg from "../../assets/banner-img.jpg";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./About.css";

const About = () => {
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
        className="about smooth-scroll"
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
              <h1>ABOUT US</h1>
            </div>
          </div>
        </section>

        <section className="about-us" data-scroll-section>
          <div className="about-us-copy">
            <div className="about-us-copy-p">
              <p>A studio where meaning meets form.</p>
              <br />
              <p>
                We are two designers with different worldviews. One is about
                ideas, context, and contemporary art. He searches for meaning,
                sets direction, and shapes concepts.
              </p>
              <br />
              <p>
                The other is about visuals, aesthetics, and structure. He makes
                ideas visible, precise, and powerful.
              </p>
              <br />
              <p>
                We work at the intersection of digital and material – we create
                websites, identities, as well as printed projects: posters,
                books, labels. Together, we create projects in which thought and
                form work in unison. This contrast creates a spark – the energy
                that brings design to life.
              </p>
            </div>
            <div className="about-us-copy-p">
              <span>
                «We believe: — in different points of view as a source of
                originality; — in the balance of meaning and visuals; — in the
                power of dialogue, not compromise»
              </span>
              <br />
            </div>
          </div>
        </section>

        <section className="about-us office" data-scroll-section>
          <div className="hero-img-container">
            <img src={Masha} alt="" />
          </div>
        </section>

        <section id="about-sticky-wrap" data-scroll-section>
          <div
            className="about-sticky about-sticky-1"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#about-sticky-wrap"
          >
            <div className="sticky-content">
              <div className="sitcky-content-h1">
                <h1 className="num">1 / Masha</h1>
              </div>
              <div className="sitcky-content-h1">
                <h1>
                  I work where design meets contemporary art, exploring context
                  and shaping ideas. Design, to me, is organized meaning — where
                  thinking and feeling meet.
                </h1>
              </div>
            </div>
          </div>
          <div className="about-sticky about-sticky-2">
            <div className="sticky-content">
              <div className="sitcky-content-h1">
                <h1 className="num">2 / Ruslan</h1>
              </div>
              <div className="sitcky-content-h1">
                <h1>
                  I specialize in visuals, transforming ideas into vibrant
                  images. For me, design is about creating harmony through form,
                  where each element speaks for itself.
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="more-clients" data-scroll-section>
          <div className="more-clients-h1">
            <h1>We've worked with</h1>
          </div>
          <div className="more-clients-logos">
            <div className="more-clients-logo">LOGO 1</div>
            <div className="more-clients-logo">LOGO 2</div>
            <div className="more-clients-logo">LOGO 3</div>
            <div className="more-clients-logo">LOGO 4</div>
            <div className="more-clients-logo">LOGO 5</div>
            <div className="more-clients-logo">LOGO 6</div>
            <div className="more-clients-logo">LOGO 7</div>
            <div className="more-clients-logo">LOGO 8</div>
            <div className="more-clients-logo">LOGO 9</div>
          </div>
        </section> */}

        <section className="about-us office" data-scroll-section>
          <div className="about-us-copy">
            <div className="about-us-copy-p">
              <span>Iscra</span>
              <span>Design studio</span>
            </div>
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

export default transition(About);
