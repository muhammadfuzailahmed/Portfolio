import React from 'react'
import {motion} from 'motion/react'
// import { Projects } from '../Data/Projects'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import PasswordGenerator from '../../assets/Projects/React/PasswordGenerator/PasswordGenerator.png'
import PasswordGeneratorimg2 from '../../assets/Projects/React/PasswordGenerator/PasswordGeneratorimg2.png'
import PasswordGeneratorvideo from '../../assets/Projects/React/PasswordGenerator/PasswordGeneratorvideo.mp4'
import Weatherappimg from '../../assets/Projects/React/WeatherApp/Weatherappimg.png'
import Weatherappimg2 from '../../assets/Projects/React/WeatherApp/Weatherappimg2.png'
import WeatherAppApivideo from '../../assets/Projects/React/WeatherApp/WeatherAppApivideo.mp4'
import DocFindimg1 from '../../assets/Projects/React/DocFind/DocFindimg1.png'
import DocFindimg2 from '../../assets/Projects/React/DocFind/DocFindimg2.png'
import DocFindvideo from '../../assets/Projects/React/DocFind/DocFindvideo.mp4'
import Techifyimg1 from '../../assets/Projects/React/TechifyStore/Techifyimg1.png'
import Techifyimg2 from '../../assets/Projects/React/TechifyStore/Techifyimg2.png'
import Techifyimg3 from '../../assets/Projects/React/TechifyStore/Techifyimg3.png'
import Techifyimg4 from '../../assets/Projects/React/TechifyStore/Techifyimg4.png'
import Techifyvideo from '../../assets/Projects/React/TechifyStore/Techifyvideo.mp4'

function Reactjsprojects() {

    const reactProjects = [
        {
                language: "ReactJs",
                liveDemo: "https://passwordgenerator-rust-gamma.vercel.app/",
                sourceCode: "https://github.com/muhammadfuzailahmed/Password-Generator",
                video: PasswordGeneratorvideo,
                img: PasswordGenerator,
                title: "Password Generator",
                shortDesc: "A React-based Password Generator App that creates secure passwords with customizable length and character options.",
                fullDesc: [
                    "This Password Generator App, built with React, allows users to generate strong and secure passwords with ease. Users can adjust the password length using a slider, include numbers and special characters, and copy the generated password with a single click. The app provides a simple and intuitive interface, making password creation quick and convenient.",
                    "Building this project was an excellent way to get hands-on experience with React fundamentals. I learned how to manage component state, handle user events, and structure a small interactive app. This project helped me gain confidence in building functional, responsive UI elements while applying React best practices."
                ],
                timeLine: [
                    {
                        duration: "3 weeks",
                        isCompleted: "True",
                        status: "Live"
                    }
                ],
                techSTack: ["React.JS", "Tailwind CSS"],
                keyFeatures: [
                    "Adjust password length with a slider.",
                    "Include numbers and special characters.",
                    "Copy the generated password with a single click."
                ],
                learning: [
                    "Learned how to manage and update component state dynamically.",
                    "Practiced handling user interactions like slider changes and button clicks.",
                    "Gained experience in organizing a small React app using reusable components.",
                    "Learned how to render changes in the UI instantly based on user input."
                ],
                snapShots: [PasswordGenerator, PasswordGeneratorimg2]
        },
        {
                language: "ReactJs",
                liveDemo: "https://react-weather-app-api-based.vercel.app/",
                sourceCode: "https://github.com/muhammadfuzailahmed/React-Weather-App-API-based-",
                video: WeatherAppApivideo,
                img: Weatherappimg,
                title: "Weather App (API based)",
                shortDesc: "A React-based Weather App that provides real-time weather information for any city with a clean and responsive interface.",
                fullDesc: [
                    "This Weather App, built with React, allows users to search for any city and get real-time weather data from an API. It displays important metrics such as temperature, humidity, weather description, and feels like values. The app features a clean and simple interface, making it easy for users to find the information they need quickly and intuitively.",
                    "Building this project helped me strengthen my skills in React and API integration. I gained practical experience in managing state, fetching and displaying dynamic data, and designing a responsive user interface. This project also improved my understanding of how to structure React components effectively while creating an interactive and functional web application."
                ],
                timeLine: [
                    {
                        duration: "3 weeks",
                        isCompleted: "True",
                        status: "Live"
                    }
                ],
                techSTack: ["React.JS", "Tailwind CSS"],
                keyFeatures: [
                    "Search for Cities: Get up-to-date weather information by simply entering a city name.",
                    "Displays important weather details such as temperature, humidity, description and feels like values.",
                    "Designed for an easy and intuitive user experience."
                ],
                learning: [
                    "Learned to handle dynamic data and update the UI accordingly.",
                    "Gained experience fetching and displaying data from a REST API.",
                    "Practiced rendering components based on API responses and user input.",
                    "Improved skills in designing interfaces that work well across desktop and mobile devices."
                ],
                snapShots: [Weatherappimg, Weatherappimg2]
        },
        {
                language: "ReactJs",
                liveDemo: "https://doc-find-self.vercel.app/",
                sourceCode: "https://github.com/muhammadfuzailahmed/DocFind",
                video: DocFindvideo,
                img: Weatherappimg,
                title: "DocFind",
                shortDesc: "DocFind is a doctor booking app that lets users browse profiles and book appointments. The Book Appointment button is a placeholder, showcasing routing, dynamic content, and user interactions.",
                fullDesc: [
                    "DocFind is a doctor booking app designed to practice routing and UI design. The app allows users to browse through doctor profiles and explore their details. Although the Book Appointment feature is currently a placeholder, the app demonstrates routing and dynamic content rendering. This helps users navigate between different pages seamlessly, providing a dynamic and interactive experience.",
                    "Built using React and React Router, DocFind allows for smooth page transitions and efficient management of dynamic content. The UI is styled with Tailwind CSS, ensuring responsiveness and a clean, modern design. This project serves as a learning experience for building more complex front-end applications while refining skills like error handling, routing, and rendering content based on user actions."
                ],
                timeLine: [
                    {
                        duration: "4 days",
                        isCompleted: "True",
                        status: "Live"
                    }
                ],
                techSTack: ["React.JS", "React Router", "Tailwind CSS"],
                keyFeatures: [
                    "Browse doctor profiles.",
                    "Book appointments (currently a placeholder).",
                    "Dynamic content rendering based on user interactions.",
                    "Clean routing and navigation across pages."
                ],
                learning: [
                    "Building clean routing/navigation with React Router.",
                    "Rendering dynamic content based on user actions.",
                    "Basic error handling in front-end development.",
                    "Creating dynamic pages with React and Tailwind CSS."
                ],
                snapShots: [DocFindimg2, DocFindimg1]
        },
        {
                language: "ReactJs",
                liveDemo: "https://tech-ecommerce-store-opal.vercel.app/",
                sourceCode: "https://github.com/muhammadfuzailahmed/Tech-ecommerce-store",
                video: Techifyvideo,
                img: Techifyimg1,
                title: "Techify (Tech E-commerce store)",
                shortDesc: "Tech E-commerce Store is a React-based front-end platform offering a variety of gaming and professional tech accessories. It features a product catalog, detailed product pages, and toast notifications for adding items to the cart.",
                fullDesc: [
                    "Tech E-commerce Store is a front-end application built with React, designed to provide users with an interactive shopping experience for tech accessories. The platform showcases a wide selection of gaming peripherals, such as keyboards, mice, and headphones, along with professional tech products like laptops bags and ergonomic desks. Each product page offers detailed descriptions, images, and prices to enhance the shopping experience. Users can easily add products to their cart, with toast notifications confirming each successful addition. However, the cart functionality is still in progress, with data persistence yet to be implemented.",
                    "The project utilizes React Router for seamless navigation between different pages and Toastify for displaying toast notifications. For state management, React Context or useState is used to handle the cart's content. The front-end is styled with CSS or SASS, ensuring a modern, responsive design. This project offers a comprehensive learning experience in building e-commerce platforms, refining skills in UI/UX design, state management, and handling dynamic content."
                ],
                timeLine: [
                    {
                        duration: "2 weeks",
                        isCompleted: "True",
                        status: "Live"
                    }
                ],
                techSTack: ["React.JS", "React Router", "Tailwind CSS", "Toastify"],
                keyFeatures: [
                    "Product catalog with gaming and professional tech accessories.",
                    "Detailed product pages with images, descriptions, and prices.",
                    "Add to Cart feature with toast notifications.",
                    "Cart functionality under development (currently lacks data presence)."
                ],
                learning: [
                    "Building interactive e-commerce platforms with React.",
                    "Managing state with React Context or useState.",
                    "Implementing React Router for navigation.",
                    "Styling with CSS/SASS for a responsive UI.",
                    "Working with toast notifications to enhance user experience."
                ],
                snapShots: [Techifyimg1, Techifyimg2, Techifyimg3, Techifyimg4]
            },
    ]

  return (
    <div className='w-full min-h-screen py-5'>
        {reactProjects.map(p => (
            <motion.div 
            key={p.shortDesc}
            initial={{
                opacity: 0,
                y: 30
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                amount: 0.7
            }}
            whileHover={{
            scale: 1.02,
            cursor: "pointer",
            boxShadow: "5px 5px 10px 2px cyan"
            }}
            transition={{
            duration: 0.5
            }}
            className='w-[90vw] m-auto md:flex items-center justify-between px-5 py-8 mt-8 rounded-md border-2 border-cyan-400'>
                <div>
                    <h1 className='dark:text-white font-bold text-2xl md:text-left text-center'>{p.title}</h1>
                    <p className='dark:text-white w-[90%] md:mt-1 mt-2 md:mb-0 mb-2 md:text-left text-justify'>{p.shortDesc}</p>
                    <p className='mt-3 relative right-1'>{p.techSTack.map(tech => (
                        <span className='dark:text-white ml-1 px-1.5 py-1 dark:bg-gray-600 bg-gray-300 rounded-sm'>{tech}</span>
                    ))}</p>
                </div>
                <Link to={`/projects/${encodeURIComponent(p.title)}`}>
                <div className='md:mt-0 mt-5 md:text-left text-center'>
                    <Button title="View Project" bg="transparent" bgHover="hover:text-cyan-400"/>
                </div>
                </Link>
            </motion.div>
        ))}
    </div>
  )
}

export default Reactjsprojects