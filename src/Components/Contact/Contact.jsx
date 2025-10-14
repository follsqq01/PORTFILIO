import React, { useRef } from "react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";

import "./Contact.css";

const Contact = () => {
  const containerRef = useRef(null);

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
      <section
        className="contact"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <div className="contact-copy" data-scroll-section>
          <br />
          <br />
          <p>Always happy to work with interesting and creative projects!</p>
          <br />
          <a href="#">iscrastudio@yandex.ru</a>
          <br />
          <br />
          {/* <br />
          <p>Opening times : Mon–Fri, 10–18</p>
          <br /> */}
          <br />
          <span>Networks</span>
          <br />
          <br />
          <a href="#">Telegram</a>
          <br />
          <a href="#">Instagram</a>
          <br />

          <br />
          {/* <br />
          <span>Our Workplace</span>
          <br /> */}
          <br />
          {/* <p>Moscow</p>
          <p></p>
          <p>Russia</p>
          <br /> */}
          <span id="copyright">
            Iscra studio is a design studio <br /> Moscow, RU © 2025 ALL RIGHTS
            RESERVED.
          </span>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
};

export default transition(Contact);
