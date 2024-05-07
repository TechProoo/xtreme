import React from "react";
import { UilShieldCheck } from "@iconscout/react-unicons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Player } from "@lottiefiles/react-lottie-player";

gsap.registerPlugin(useGSAP);



const Modal = () => {
  useGSAP(() => {
    const cn = gsap.timeline();
    cn.from(".overlay", {
      opacity: 0
    })
    cn.from(".ch", {
      y: 30,
      scale: .8,
      duration: 1.5,
      ease: "bounce.out",
      repeat: -1,
      yoyo: true,
    });
    cn.from(
      ".txt",
      {
        y: 100,
        opacity: 0,
        duaration: 1,
      },
      ">"
    );
  });

  useGSAP(() => {
        gsap.to(".loader-overlay", {
           opacity: 0, 
           duration: 1,
           delay: 3
        })
  })


  return (
    <div>
      <div className="loader-overlay">
        <Player
          autoplay
          loop
          src="https://lottie.host/e101e6eb-57a0-437e-b0ec-f753b545eb22/bL3f1wdsX0.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <h3 className="text-center lds">Submitting</h3>
      </div>
      <div className="overlay">
        <div className="modal">
          <div className="check">
            <div className="ch">
              <UilShieldCheck size={170} color="#F45C2C" />
            </div>
            <h3 className="txt">Application Submitted Successfully...</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
