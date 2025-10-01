import React from 'react'
import {motion} from 'motion/react'
// import { Projects } from '../Data/Projects'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import PasswordGenerator from '../../assets/Projects/React/PasswordGenerator/PasswordGenerator.png'
import Weatherappimg from '../../assets/Projects/React/WeatherApp/Weatherappimg.png'

function Reactjsprojects() {

    const reactProjects = [
        {
                language: "ReactJs",
                liveDemo: "https://passwordgenerator-rust-gamma.vercel.app/",
                sourceCode: "https://github.com/muhammadfuzailahmed/Password-Generator",
                video: "video",
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
                snapShots: [PasswordGenerator]
        },
        {
                language: "ReactJs",
                liveDemo: "https://react-weather-app-api-based.vercel.app/",
                sourceCode: "https://github.com/muhammadfuzailahmed/React-Weather-App-API-based-",
                video: "video",
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
                snapShots: [Weatherappimg]
        },
    ]

  return (
    <div className='w-full min-h-screen'>
        {reactProjects.map(p => (
            <motion.div 
            key={p.shortDesc}
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