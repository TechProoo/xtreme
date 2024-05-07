import React, { useRef, useState } from "react";
import Logo from "./Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Form = () => {

  const go = "checked";
  const form = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".lg",
      {
        scale: 0.7,
        opacity: 0.5,
      },
      {
        repeat: 2,
        opacity: 1,
        scale: 1,
        yoyo: true,
        duration: 1.2,
      }
    );
    tl.fromTo(
      ".lg",
      {
        y: 250,
        scale: 0.5,
      },
      {
        y: 0,
        yoyo: true,
        duration: 1,
        scale: 1,
      }
    );
    tl.from(
      "b",
      {
        scale: 0,
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "bounce",
      },
      ">"
    );
    tl.from(
      "input, select",
      {
        y: 50,
        opacity: 0,
        stagger: 0.2,
      },
      ">"
    );
    tl.to(
      ".btn",
      {
        y: 10,
        opacity: 1,
        ease: "back"
      },
      ">"
    );
  }, []);



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_akyrvcw",
        "template_c3hu1be",
        form.current,
        "2khhqb45n_XPdVi3R"
      )
      .then(
        () => {
          console.log("SUCCESS!");
         
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <header>
        <div className="lg">
          <Logo />
        </div>
        <div className="vol">
          <b>Volunteers sign up</b>
        </div>
      </header>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="form-control"
          name="full_name"
          placeholder="Full name"
          required
        />

        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="tel"
          className="form-control"
          name="phone"
          required
          placeholder="Mobile No."
        />
        <input
          type="text"
          className="form-control"
          name="address"
          placeholder="Address"
          required
        />
        <input
          type=""
          className="form-control"
          name="dob"
          placeholder="DOB e.g Nov, 28 2000"
          required
        />
        <select
          className="form-select form-select inf"
          aria-label="select example"
          name="software"
          defaultValue="Choose a software"
        >
          <option disabled hidden>
            Choose a software
          </option>
          <option value="Adobe After Effects">
            Adobe After Effects (Motion Graphics, Video Editing)
          </option>
          <option value="Adobe Audition">Adobe Audition (Audio Editing)</option>
          <option value="Adobe Dreamweaver">
            Adobe Dreamweaver (Web Development)
          </option>
          <option value="Adobe Illustrator">
            Adobe Illustrator (Graphic Design, UI/UX)
          </option>
          <option value="Adobe InDesign">
            Adobe InDesign (Graphic Design, Publishing)
          </option>
          <option value="Adobe Lightroom">
            Adobe Lightroom (Photography, Image Editing)
          </option>
          <option value="Adobe Photoshop">
            Adobe Photoshop (Graphic Design, Image Editing)
          </option>
          <option option value="Adobe Premiere Pro">
            Adobe Premiere Pro (Video Editing)
          </option>
          <option value="Adobe XD">Adobe XD (UI/UX Design)</option>
          <option value="Autodesk Maya">
            Autodesk Maya (3D Modeling, Animation)
          </option>
          <option value="Blender">Blender (3D Modeling, Animation)</option>
          <option value="Bootstrap">Bootstrap (Web Development)</option>
          <option value="Canva">Canva (Graphic Design, UI/UX)</option>
          <option value="Cinema 4D">Cinema 4D (3D Modeling, Animation)</option>
          <option value="CorelDRAW">CorelDRAW (Graphic Design)</option>
          <option value="Figma">Figma (UI/UX Design)</option>
          <option value="Final Cut Pro">Final Cut Pro (Video Editing)</option>
          <option value="GIMP">GIMP (Graphic Design, Image Editing)</option>
          <option value="Google Web Designer">
            Google Web Designer (Web Development)
          </option>
          <option value="InVision">InVision (UI/UX Design)</option>
          <option value="JavaScript">JavaScript (Web Development)</option>
          <option value="KeyShot">KeyShot (3D Rendering)</option>
          <option value="Nuke">Nuke (Visual Effects)</option>
          <option value="Pixi.js">Pixi.js (Web Development)</option>
          <option value="React">React (Web Development)</option>
          <option value="Sketch">Sketch (UI/UX Design)</option>
          <option value="Toon Boom Harmony">
            Toon Boom Harmony (Animation)
          </option>
          <option value="Unity">Unity (Game Development)</option>
          <option value="Unreal Engine">
            Unreal Engine (Game Development)
          </option>
          <option value="Visual Studio Code">
            Visual Studio Code (Web Development)
          </option>
          <option value="Webflow">Webflow (Web Development)</option>
          <option value="Moho Studio">Moho Studio</option>
        </select>

        <select
          className="form-select form-select inf"
          aria-label="select example"
          name="job"
          defaultValue="What do you do"
        >
          <option disabled hidden>
            What do you do
          </option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Video Editing">Video Editing</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="FX and Animation">FX and Animation</option>
          <option value="2D and 3D Animation">2D and 3D Animation</option>
          <option value="Motion Graphics">Motion Graphics</option>
          <option value="Brand Designer">Brand Designer</option>
          <option value="App Development">App Development</option>
        </select>

        <input
          type="text"
          className="form-control"
          name="aim"
          placeholder="What is your of Joining?"
          required
        />

        <Link to="/submitted" className="btn sub" type="submit">
          Submit
        </Link>
      </form>
      
    </div>
  );
};

export default Form;
