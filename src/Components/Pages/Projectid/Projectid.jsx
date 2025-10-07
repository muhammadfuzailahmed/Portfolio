import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Projects } from "../../Data/Projects";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "motion/react";

const normalize = (s) => decodeURIComponent(s).trim().toLowerCase();
function Projectid() {
  const ImgRef = useRef(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const move = (dir = 1) => {
    const el = ImgRef.current;
    el.scrollBy({
      left: dir * el.clientWidth * 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  function openModal(img) {
    setisModalOpen(true);
    setModalImage(img);
  }

  function closeModal() {
    setisModalOpen(false);
    setModalImage("");
  }

  let { projectid } = useParams();
  const id = normalize(projectid);
  let project = Projects.find((p) => normalize(p.title) === id);
  if (!project) return <h1 className="dark:text-white">Not found</h1>;
  return (
    <div className="w-full min-h-screen dark:bg-[#0d0e0e]">
      <div className="w-full h-14 sticky top-0 backdrop-blur-xl"></div>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="md:flex items-center justify-between md:px-10 px-5"
      >
        <Link to="/projects">
          <p className="dark:text-white transition-all hover:text-gray-500 cursor-pointer">
            <span className="mr-5">
              <i class="fa-solid fa-arrow-left"></i>
            </span>{" "}
            Explore more projects
          </p>
        </Link>
        <div className="md:mt-0 mt-5 md:flex-row flex">
          <Link to={project.liveDemo} target="_blank">
            <Button
              title="Live Demo"
              bg="transparent"
              bgHover="hover:bg-cyan-500"
            />
          </Link>
          <span className="ml-3">
            <Link to={project.sourceCode} target="_blank">
              <Button
                title="GitHub"
                bg="bg-cyan-500"
                bgHover="hover:bg-transparent"
              />
            </Link>
          </span>
        </div>
      </motion.div>
      <div className="md:px-10 px-5 mt-8">
        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="dark:text-white font-bold text-4xl md:mb-0 mb-3"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="mt-2 dark:text-white text-justify"
        >
          {project.shortDesc}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          className="my-8 md:w-[70%] w-[95%] md:h-120 h-68 m-auto rounded-md"
        >
          <video
            controls
            muted
            autoPlay
            className="h-[100%] rounded-md"
            src={project.video}
          ></video>
        </motion.div>

        <motion.div className="mt-20 md:flex justify-between md:px-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: "true",
              amount: 0.5,
            }}
            transition={{
              duration: 0.5,
            }}
            className="md:w-[70%] mt-10"
          >
            <h1 className="dark:text-white font-bold text-3xl md:text-left text-center">
              Description
            </h1>
            {project.fullDesc.map((desc) => (
              <p className="mt-3 dark:text-white md:text-left text-justify">
                {desc}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: "true",
              amount: 0.5,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="mt-10 md:w-[30%] md:text-center"
          >
            <h1 className="dark:text-white font-bold text-3xl text-center">
              Tech Stack
            </h1>
            <div className="mt-10 text-center">
              {project.techSTack.map((tech) => (
                <span className="dark:text-white ml-2 px-2 py-1 bg-gray-300 dark:bg-gray-600 font-bold cursor-pointer rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-20 md:flex justify-between md:px-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: "true",
              amount: 0.5,
            }}
            transition={{
              duration: 0.5,
            }}
            className="md:w-[70%] mt-10 w-[90%] m-auto"
          >
            <h1 className="dark:text-white font-bold text-3xl md:text-left text-center md:mb-0 mb-10">
              Key Features
            </h1>
            <ul className="md:w-[90%]">
              {project.keyFeatures.map((feature) => (
                <li className="mt-2 dark:text-white list-disc">{feature}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: "true",
              amount: 0.5,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="mt-10 md:w-[30%] text-center"
          >
            <h1 className="dark:text-white font-bold text-3xl text-center">
              Timeline
            </h1>
            <div className="mt-10">
              <ul>
                {project.timeLine.map((timeline) => (
                  <div className="w-86 m-auto">
                    <div className="dark:text-white font-bold rounded-sm w-86 mb-2 flex items-center justify-between text-lg border-b-2 border-gray-500">
                      <p>Duration:</p>
                      <p>{timeline.duration}</p>
                    </div>
                    <div className="dark:text-white font-bold rounded-sm w-86 mb-2 flex items-center justify-between text-lg border-b-2 border-gray-500">
                      <p>Completed:</p>
                      <p>{timeline.isCompleted}</p>
                    </div>
                    <div className="dark:text-white font-bold rounded-sm w-86 mb-2 flex items-center justify-between text-lg border-b-2 border-gray-500">
                      <p>Status:</p>
                      <p>{timeline.status}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-20 md:px-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: "true",
              amount: 0.5,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <h1 className="font-bold text-3xl dark:text-white mt-10 md:text-left text-center">
              What I learned
            </h1>
            <div className="mt-5 md:w-auto w-[90%] m-auto">
              {project.learning.map((learned) => (
                <li className="mt-2 dark:text-white list-disc">{learned}</li>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-20 md:px-10 relative">
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: "true",
              amount: 0.5,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <h1 className="font-bold text-3xl dark:text-white mt-10">
              Some Snapshots
            </h1>
            <div className="md:w-[40%] w-[100%] mt-10 m-auto">
              <div className="relative">
                <p
                  onClick={() => move(-1)}
                  className="font-bold text-cyan-400 absolute left-0 md:top-32 top-21 text-3xl cursor-pointer"
                >
                  <i class="fa-solid fa-angle-left"></i>
                </p>
              </div>
              <div className="relative">
                <p
                  onClick={() => move(1)}
                  className="font-bold text-cyan-400 absolute right-0 md:top-32 top-21 text-3xl cursor-pointer"
                >
                  <i class="fa-solid fa-angle-right"></i>
                </p>
              </div>
              <div
                ref={ImgRef}
                className="flex flex-nowrap overflow-x-auto scroll-smooth py-2 no-scrollbar"
              >
                {project.snapShots.map((pic) => (
                  <motion.img
                    onClick={() => openModal(pic)}
                    className="border-2 border-cyan-400 h-48 md:h-68 w-[100%] flex-none rounded-lg md:object-cover shadow-sm cursor-pointer"
                    src={pic}
                    alt="img"
                  />
                ))}
              </div>
            </div>
            <AnimatePresence>
            {isModalOpen && (
              <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
            }}
            transition={{
                duration: 0.25
            }}
            exit={{
                opacity: 0
            }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[900] flex justify-center items-center">
                <p
                  onClick={closeModal}
                  className="dark:text-white text-4xl font-bold absolute top-5 right-8 z-[999] cursor-pointer"
                >
                  <i className="fa-solid fa-xmark"></i>
                </p>
                <div className="relative">
                  <img
                    className="rounded-lg max-w-[85vw] max-h-[85vh] object-contain shadow-lg"
                    src={modalImage}
                    alt="snapshot"
                  />
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div className="mt-10 md:px-10 py-10">
          <NavHashLink to="/#projects">
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: "true",
                amount: 0.9,
              }}
              className="dark:text-white transition-all hover:text-gray-500 cursor-pointer inline-block"
            >
              <span className="mr-5">
                <i class="fa-solid fa-arrow-left"></i>
              </span>{" "}
              Back
            </motion.p>
          </NavHashLink>
        </motion.div>
      </div>
    </div>
  );
}

export default Projectid;
