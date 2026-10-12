import React from "react";
import { motion } from "motion/react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import ProjectManagementLoginPage from "../../assets/Projects/FullStack/ProjectManagement/ProjectManagementLoginPage.png";
import PortfolioBuilderLogin from "../../assets/Projects/FullStack/Portfolio Builder/PortfolioBuilderLogin.png";
import EventFlowLogin from "../../assets/Projects/FullStack/EventFlow/EventFlowLogin.png";

function Project() {
  const latestProjects = [
    {
      language: "Full Stack",
      video: "video",
      img: ProjectManagementLoginPage,
      title: "Project Management Platform",

      shortDesc:
        "A full-stack team project management platform with secure authentication, role-based access control, task workflows, team collaboration, file attachments, and project-level dashboard reporting.",

      fullDesc: [
        "This project is a full-stack project management platform designed for teams to organize projects, members, tasks, subtasks, notes, and file attachments through a structured role-based system. The platform includes Owner, Admin, and Member roles, with each role having clearly defined permissions for managing projects, tasks, and team members. Users can create and manage projects, assign tasks, track task statuses, manage subtasks, add project notes, and upload images or PDF files.",

        "The application uses secure JWT-based authentication with cookies, protected frontend and backend routes, authorization middleware, and role-based access control. File uploads are handled using Multer and stored through Cloudinary. MongoDB aggregation pipelines are used to generate project-level dashboard statistics and structured reporting. The project was developed with separate frontend and backend architectures and deployed as a production-ready full-stack application.",
      ],

      timeLine: [
        {
          duration: "YOUR_DURATION",
          isCompleted: true,
          status: "Live",
        },
      ],

      techSTack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Multer",
        "Cloudinary",
      ],

      keyFeatures: [
        "Role-Based Access Control – Owner, Admin, and Member roles with different permissions for projects, tasks, and team management.",
        "Project & Task Management – Create and manage projects, tasks, subtasks, task statuses, project notes, and team members.",
        "Secure Authentication – JWT authentication using cookies, persistent sessions, protected routes, and server-side authorization middleware.",
        "File Management – Upload images and PDF attachments using Multer with Cloudinary storage.",
        "Dashboard Reporting – MongoDB aggregation pipelines for project statistics and structured dashboard information.",
      ],

      learning: [
        "Designing and implementing role-based authorization for a multi-user application.",
        "Building secure JWT and cookie-based authentication with protected frontend and backend routes.",
        "Handling file uploads with Multer and integrating Cloudinary for cloud storage.",
        "Using MongoDB aggregation pipelines for dashboard statistics and reporting.",
        "Structuring and deploying a complete full-stack application with separate frontend and backend architectures.",
      ],
    },
    {
      language: "Full Stack",
      video: "video",
      img: PortfolioBuilderLogin,
      title: "Portfolio Builder",

      shortDesc:
        "A full-stack MERN application that allows users to create and manage personal portfolios with secure authentication, email verification, password recovery, and CRUD-based content management.",

      fullDesc: [
        "Portfolio Builder is a full-stack MERN application that enables users to register, authenticate, and create their own personal portfolio content through a responsive web interface. Users can securely manage portfolio information through CRUD operations while protected routes ensure that private functionality is only accessible to authenticated users.",

        "The application includes JWT-based authentication, email verification, forgot-password and password-reset functionality, with Brevo integrated for transactional emails. The frontend and backend are deployed separately using Vercel and Render, providing practical experience with production environment configuration, API integration, authentication flows, and full-stack deployment.",
      ],

      timeLine: [
        {
          duration: "YOUR_DURATION",
          isCompleted: true,
          status: "Live",
        },
      ],

      techSTack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Brevo",
        "Vercel",
        "Render",
      ],

      keyFeatures: [
        "Authentication – Secure user registration and login using JWT authentication and protected routes.",
        "Email Verification – Account verification through transactional emails using Brevo.",
        "Password Recovery – Forgot-password and secure password-reset workflow.",
        "Portfolio Management – Users can create, update, and manage portfolio content through CRUD operations.",
        "Deployment – Frontend deployed on Vercel and backend deployed on Render with production environment configuration.",
      ],

      learning: [
        "Building a complete authentication system using JWT and protected routes.",
        "Implementing email verification and password recovery workflows.",
        "Integrating Brevo for transactional emails.",
        "Connecting a React frontend with REST APIs built using Node.js and Express.js.",
        "Deploying frontend and backend applications separately and managing production environment variables.",
      ],
    },

    {
      language: "Full Stack",
      video: "video",
      img: EventFlowLogin,
      title: "EventFlow — Real-Time Event Booking Platform",

      shortDesc:
        "A full-stack MERN event booking platform featuring real-time seat selection, Redis-based seat reservations, secure payments, Google authentication, and role-based dashboards for customers, organizers, and administrators.",

      fullDesc: [
        "EventFlow is a full-stack MERN application that enables users to discover events, select seats through an interactive seating interface, and complete bookings through a secure payment workflow. The platform uses Redis to temporarily hold selected seats and Socket.IO to synchronize seat availability in real time, preventing conflicting reservations when multiple users attempt to book the same seats.",

        "The application provides separate customer, organizer, and administrator workflows with JWT-based authentication, Google sign-in, and role-based authorization. Organizers can create and manage events, configure seating arrangements, and publish events using approved venues, while administrators manage organizer approvals, venue approvals, categories, and event moderation. Safepay is integrated for hosted payment checkout and webhook-based booking confirmation, with Brevo handling transactional emails. The frontend is deployed on Vercel, the backend on Render, MongoDB Atlas provides database hosting, and Upstash Redis manages temporary seat reservations.",
      ],

      timeLine: [
        {
          duration: "YOUR_DURATION",
          isCompleted: true,
          status: "Live",
        },
      ],

      techSTack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Socket.IO",
        "JWT",
        "Google OAuth",
        "Safepay",
        "Brevo",
        "Vercel",
        "Render",
        "Upstash",
      ],

      keyFeatures: [
        "Authentication – Secure registration, login, Google sign-in, and JWT authentication using HTTP-only cookies.",
        "Event Discovery – Browse published events, view event details, and explore available seating arrangements.",
        "Real-Time Seat Booking – Interactive seat selection with live availability updates using Socket.IO.",
        "Temporary Seat Reservations – Redis-based seat holds with automatic expiration and protection against conflicting reservations.",
        "Payment Integration – Safepay hosted checkout with webhook-based payment verification and booking confirmation.",
        "Customer Dashboard – View bookings, manage account settings, and apply to become an organizer.",
        "Organizer Dashboard – Create, update, publish, and cancel events, manage seating arrangements, and block or unblock seats.",
        "Admin Dashboard – Manage organizer requests, venue approvals, event moderation, and event categories.",
        "Email Notifications – Transactional emails and booking confirmations using Brevo.",
        "Deployment – React frontend deployed on Vercel, Express backend on Render, MongoDB Atlas database, and Upstash Redis.",
      ],

      learning: [
        "Building a complete MERN application with customer, organizer, and administrator workflows.",
        "Implementing real-time seat availability synchronization using Socket.IO.",
        "Managing concurrent seat reservations using Redis, atomic Lua scripts, and automatic key expiration.",
        "Integrating Safepay hosted checkout with secure webhook verification and booking status management.",
        "Implementing JWT authentication, Google sign-in, HTTP-only cookies, and role-based access control.",
        "Designing MongoDB schemas and REST APIs for events, venues, seating arrangements, and bookings.",
        "Integrating Brevo for transactional email notifications and booking confirmations.",
        "Deploying a full-stack application using Vercel, Render, MongoDB Atlas, and Upstash Redis.",
      ],
    },
  ];
  return (
    <div className="w-full min-h-screen dark:bg-[#0d0e0e] overflow-hidden">
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
          amount: 0.9,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="font-bold text-center dark:text-white text-5xl pt-10">
          Projects
        </h1>
        <div className="w-40 h-2 bg-cyan-400 m-auto rounded-lg my-2"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 my-6">
        {latestProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
        group
        border border-cyan-400/70
        dark:bg-[#101414]
        bg-white
        rounded-xl
        overflow-hidden
        flex flex-col
        h-full
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_12px_35px_rgba(34,211,238,0.15)]
        cursor-pointer
      "
          >
            <div className="w-full h-[210px] overflow-hidden bg-gray-100 dark:bg-[#0b0f14]">
              <img
                className="
            w-full
            h-full
            object-cover
            object-top
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
                src={project.img}
                alt={`${project.title} preview`}
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h2 className="font-bold text-2xl dark:text-white text-gray-900 leading-tight">
                {project.title}
              </h2>

              <p className="dark:text-gray-300 text-gray-600 mt-3 leading-relaxed text-sm">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.techSTack.map((tech) => (
                  <span
                    key={tech}
                    className="
                text-xs
                font-medium
                px-3
                py-1.5
                rounded-md
                whitespace-nowrap
                dark:text-gray-200
                dark:bg-slate-700/70
                text-gray-700
                bg-gray-200
              "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  to={`/projects/${project.title}`}
                  className="
              inline-flex
              items-center
              gap-2
              text-cyan-400
              font-medium
              text-sm
              transition-all
              duration-200
              hover:gap-3
              hover:text-cyan-300
            "
                >
                  Read more
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
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
          duration: 0.5,
        }}
        className="text-center mt-4"
      >
        <Link to="/projects">
          <Button
            title="Show more"
            bg="tranparent"
            bgHover="hover:text-cyan-400"
          />
        </Link>
      </motion.div>
    </div>
  );
}

export default Project;
