import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import HeroSectionImg from "../../assets/HeroSectionImg.png";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { NavHashLink } from "react-router-hash-link";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const [downloadSuccessfull, isDownloadSuccessfull] = useState(false);

  async function DownloadResume() {
    try {
      const res = await fetch("/Muhammad_Fuzail_Ahmed_Resume.pdf", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch PDF");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Muhammad_Fuzail_Ahmed_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
    } catch (e) {
      window.open(
        "/Muhammad_Fuzail_Ahmed_Resume.pdf",
        "_blank",
        "noopener,noreferrer",
      );
    }
    isDownloadSuccessfull(true);
  }

  return (
    <>
      <div className="w-full md:h-screen h-[95vh] dark:bg-[#0d0e0e]">
        <div className="md:flex items-center justify-between md:px-30 md:pt-30 pt-10">
          {/* left */}
          <div className="md:w-[45vw] w-[90vw] md:m-0 m-auto text-center md:text-left">
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: "true",
              }}
              transition={{
                duration: 0.5,
              }}
              className="font-bold md:text-6xl text-4xl dark:text-white"
            >
              I'm{" "}
              <motion.span
                whileHover={{
                  color: "cyan",
                  cursor: "pointer",
                }}
                transition={{
                  duration: 0.3,
                }}
                className="dark:text-cyan-400 inline-block"
              >
                <TypeAnimation
                  sequence={[
                    "Fuzail",
                    1000,
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ display: "inline-block" }}
                />
              </motion.span>{" "}
              <div>
                <h1 className="text-4xl mt-4">Full-Stack Web Developer</h1>
              </div>
            </motion.h1>
            <p className="dark:text-white mt-6 text-xl">
              React.js • Node.js • Express.js • MongoDB • SQL
            </p>
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: "true",
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="dark:text-white md:my-6 mt-5 md:w-[35vw] text-justify md:font-[600]"
            >
              Computer Science student and full-stack developer building secure,
              responsive, and production-ready web applications. Experienced
              across frontend and backend development with REST APIs, JWT
              authentication, role-based access control, database design, file
              uploads, and deployment.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: "true",
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              className="md:flex items-center gap-4 mt-5 md:mb-0 mb-5"
            >
              <div className="md:mb-0 mb-3">
                <NavHashLink smooth to="/projects">
                  <Button
                    title="View projects"
                    bg="bg-cyan-500"
                    bgHover="hover:bg-transparent"
                  />
                </NavHashLink>
              </div>
              <div>
                <div onClick={DownloadResume}>
                  <Button
                    title="Download Resume"
                    bg="tranparent"
                    bgHover="hover:bg-cyan-400"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          {/* right */}
          <div className="md:w-[33vw] w-[95vw] md:m-0 m-auto md:h-[50vh] relative md:mt-0 mt-15">
            {/* <motion.video
              
              loop
              autoPlay
              muted
              
              src={ShopSpherevideo}
            ></motion.video> */}
            <motion.img
            initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: "true",
                amount: 0.3,
              }}
              transition={{
                delay: 1.5,
                duration: 0.5,
              }}
            className="w-[100%] h-[100%]  rounded-lg cursor-pointer object-cover" src={HeroSectionImg} alt="Full-Stack project image" />
          </div>
        </div>
        {downloadSuccessfull && toast.success("Downloaded Successfully")}
      </div>
    </>
  );
}

export default Hero;
