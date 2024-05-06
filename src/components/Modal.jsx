import React from "react";
import { UilShieldCheck } from "@iconscout/react-unicons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Modal = () => {
  useGSAP(() => {
    const cn = gsap.timeline()
    cn.from(".ch", {
        y: 150,
        scale: 0,
        duration: 1.5,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true
    })
    cn.from(".txt", {
        y: 100,
        opacity: 0,
        ease: "bounce",
        duaration: 1,
        repeat: 1
    }, ">")
  });
  return (
    <div className="overlay">
      <div className="modal">
        <div className="check">
          <div className="ch">
            <UilShieldCheck size={170} color="#F45C2C" />
          </div>
          <h3 className="txt">Application Successfully Submitted</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;
