import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";
import ProjectHeroImg from "../../assets/project-img-1.jpg";
import ProjectImg from "../../assets/project-img.jpg";
import ProjectPageImg2 from "../../assets/project-page-img-2.jpg";
import ProjectPageImg3 from "../../assets/project-img-2.jpg";
import motionBadge from "../../assets/motion-badje.mp4";
import bag_YoungKink from "../../assets/bag_YoungKink.png";
import scarf_YoungKink from "../../assets/scarf_YoungKink.png";
import card_YoungKing from "../../assets/card_YoungKink.png";
import box_YoungKink from "../../assets/box_YoungKink.jpg";
import motion_YoungKink from "../../assets/motion_YoungKink.mp4";
import ipad_YoungKink from "../../assets/ipad_YoungKink.png";
import shoppage_YoungKink from "../../assets/shoppage_YoungKink.png";
import pagenotfound_YoungKink from "../../assets/pagenotfound_YoungKink.png";
import videoPreview_YoungKink from "../../assets/videoPreview.mp4";
import posts_YoungKink from "../../assets/posts_YoungKink.mp4";

import "./Project.css";
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
            <span>YOUNG KINK</span>
            <span>2025</span>
          </div>
        </section>
        <section className="project-hero" data-scroll-section>
          <div className="project-hero-img">
            <img src={ProjectHeroImg} alt="" />
          </div>
        </section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                YOUNG KINK is a brand of youth jewelry for those who value style
                and modern presentation. The brand creates minimalist
                accessories from silver, but with the spirit of freedom, punk
                and self-expression, adapted to a wide audience.
              </p>
              <br />
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>DON'T BE AFRAID, BREAK AND LET GO</h1>
            </div>
          </div>
        </section>

        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={card_YoungKing} alt="" />
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={bag_YoungKink} alt="" />
          </div>
        </section>
        <section className="project-both-img no-padding" data-scroll-section>
          <video
            src={posts_YoungKink}
            autoPlay
            loop
            muted
            playsInline
            className="videoPreview_YoungKink"
          />
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={scarf_YoungKink} alt="" />
          </div>
        </section>
        {/* <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                aliquid sed maxime alias, ipsam dolorem dolores nisi. Maiores
                quis debitis fuga nihil magnam, libero, esse quibusdam
                repellendus tenetur, impedit amet. Fugit sunt soluta est
                distinctio officiis qui earum illum facere amet, mollitia odit
                temporibus corporis velit illo molestias, ipsam consectetur!
              </p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>Lorem ipsum dolor sit Lorem, ipsum</h1>
            </div>
          </div>
        </section> */}
        {/* <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={scarf_YoungKink} alt="" />
          </div>
        </section> */}
        <section className="project-info" data-scroll-section>
          <div className="project-info-copy">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officiis pariatur repudiandae qui aspernatur quidem
              voluptatum, voluptates commodi maiores ipsa nostrum, dolores animi
              iste debitis consequatur ut. Ullam odit corporis amet eligendi
              officiis tempora dicta! Modi quibusdam obcaecati fugiat vel,
              soluta ipsa dolorem, animi asperiores, recusandae delectus
              reiciendis quaerat earum.
            </p> */}
            <br />
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              eveniet ullam laboriosam atque veritatis necessitatibus sit nobis
              ab provident nisi illo molestiae velit vero pariatur vel sed,
              facilis optio? Nesciunt!
            </p> */}
          </div>
          <video
            src="/src/assets/motion-badje.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="project-video-preview"
          ></video>
        </section>
        <section className="project-img-full no-padd" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={box_YoungKink} alt="" />
          </div>
        </section>
        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p"></div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>WEB-SITE FOR ONLINE SHOPPING!</h1>
            </div>
          </div>
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={ipad_YoungKink} alt="" />
          </div>
        </section>
        <section className="project-both-img" data-scroll-section>
          <video
            src={videoPreview_YoungKink}
            autoPlay
            loop
            muted
            playsInline
            className="videoPreview_YoungKink"
          />
        </section>
        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={shoppage_YoungKink} alt="" />
          </div>
        </section>
        {/* <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis quibusdam sequi impedit et quidem reprehenderit
                inventore, ipsam eveniet cumque incidunt obcaecati optio
                suscipit vel voluptates corporis, velit nihil corrupti ducimus!
              </p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>
                <a href="#">
                  <u>projecturl.com</u>
                </a>
              </h1>
            </div>
          </div>
        </section> */}
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
