import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import transition from "../transition";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Projects = () => {
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
        className="projects-container"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <section className="projects" data-scroll-section>
          <div className="projects-copy">
            <div className="projects-copy-ws"></div>

            <div className="projects-copy-h1">
              <h1>Gallery of some of our projects</h1>
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
          {/* <div className="projects-list">
          <Link to="/sample-project-page">
            <div className="project">
              <div className="project-img project-img-1"></div>
              <div className="project-name">
                <p>Project Name &#8599;</p>
              </div>
              <div className="project-category">
                <p>Project Category</p>
              </div>
            </div>
          </Link>
          <Link to="/sample-project-page">
            <div className="project">
              <div className="project-img project-img-2"></div>
              <div className="project-name">
                <p>Project Name &#8599;</p>
              </div>
              <div className="project-category">
                <p>Project Category</p>
              </div>
            </div>
          </Link>
        </div> */}
          {/* <div className="projects-list">
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-3"></div>
                <div className="project-name">
                  <p>Project Name &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Project Category</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-4"></div>
                <div className="project-name">
                  <p>Project Name &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Project Category</p>
                </div>
              </div>
            </Link>
          </div> */}
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

export default transition(Projects);
