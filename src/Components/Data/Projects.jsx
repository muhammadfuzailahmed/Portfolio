import React from 'react'
import ToDolistimg from '../../assets/Projects/JavaScript/ToDo/ToDolistimg.png'
import QuizApp from '../../assets/Projects/JavaScript/Quiz/QuizApp.jpg'
import ExpenseTracker from '../../assets/Projects/JavaScript/ExpenseTracker/ExpenseTracker.png'
import Img1 from '../../assets/Projects/JavaScript/WeatherApp/Img1.jpg'
import Img2 from '../../assets/Projects/JavaScript/WeatherApp/Img2.jpg'
import AdminPanel1 from '../../assets/Projects/JavaScript/SMS/AdminPanel1.png'
import AdminPanel2 from '../../assets/Projects/JavaScript/SMS/AdminPanel2.png'
import AdminPanel3 from '../../assets/Projects/JavaScript/SMS/AdminPanel3.png'
import AdminPanel4 from '../../assets/Projects/JavaScript/SMS/AdminPanel4.png'
import Forgotpassword from '../../assets/Projects/JavaScript/SMS/Forgotpassword.png'
import Loginpage from '../../assets/Projects/JavaScript/SMS/Loginpage.png'
import Studentpanel1 from '../../assets/Projects/JavaScript/SMS/Studentpanel1.png'
import Studentpanel2 from '../../assets/Projects/JavaScript/SMS/Studentpanel2.png'
import PasswordGenerator from '../../assets/Projects/React/PasswordGenerator/PasswordGenerator.png'
import Weatherappimg from '../../assets/Projects/React/WeatherApp/Weatherappimg.png'


export const Projects = [
    {
        language: "JavaScript",
        video: "video",
        img: ToDolistimg,
        title: "To-Do List",
        shortDesc: "A simple and functional to-do list app that allows users to add, complete, and delete tasks, with data persistence using localStorage.",
        fullDesc: [
            "This to-do list app enables users to easily manage their tasks by adding new ones either through a button or by pressing the Enter key. Each task can be marked as completed or deleted permanently. The app ensures that all tasks remain saved even after refreshing the page by utilizing localStorage for data persistence. This guarantees that users can resume their tasks without losing any data.",
            "Developed using HTML, CSS, and JavaScript, this project gave me valuable experience in DOM manipulation and handling user events like clicks and key presses. I also learned how to store and retrieve data from localStorage, which was crucial for maintaining task data between sessions. Additionally, this project introduced me to the process of deploying static apps on platforms like Vercel, providing a full cycle of building, testing, and deploying a web app."
        ],
        timeLine: [
            {
                duration: "1 day",
                isCompleted: "True",
                status: "Live"
            }
        ],
        techSTack: ["HTML5", "CSS3", "JavaScript"],
        keyFeatures: [
            "Add tasks with a button or by pressing Enter.",
            "Mark tasks as completed.",
            "Delete tasks permanently.",
            "Tasks remain saved even after refreshing the page thanks to localStorage."
        ],
        learning: [
            "DOM manipulation with JavaScript.",
            "Handling events like clicks and key presses.",
            "Saving & retrieving data from localStorage.",
            "Deploying static apps on Vercel."
        ],
        snapShots: [ToDolistimg]
    },
    {
        language: "JavaScript",
        video: "video",
        img: QuizApp,
        title: "Quiz App",
        shortDesc: "A simple quiz app with multiple-choice questions that provides instant feedback and displays the final score.",
        fullDesc: [
            "This quiz app allows users to answer three multiple-choice questions, providing instant feedback after each selection. Each correct answer earns the user one point, and at the end of the quiz, the app displays the total score. It was designed to be intuitive and easy to use, providing a fun way to test your knowledge and learn from instant feedback.",
            "Building this project helped me strengthen my understanding of JavaScript fundamentals, particularly DOM manipulation and event handling. By working with events and updating the DOM based on user interaction, I gained hands-on experience in creating interactive web applications. This project was an important milestone in my learning journey, as it allowed me to apply my skills in a real-world scenario, enhancing my problem-solving and coding abilities."
        ],
        timeLine: [
            {
                duration: "2 days",
                isCompleted: "True",
                status: "Live"
            }
        ],
        techSTack: ["HTML5", "CSS3", "JavaScript"],
        keyFeatures: [
            "The app presents three multiple-choice questions for the user to answer.",
            "Provides immediate feedback after each question, letting users know whether their answer was correct or incorrect.",
            "Each correct answer gives 1 point, and the app calculates and shows the final score at the end of the quiz.",
            "The app has a clean and easy-to-navigate interface, making it simple for users to take the quiz and view results."
        ],
        learning: [
            "Learned how to modify HTML elements dynamically based on user input.",
            "Gained experience handling user interactions like clicks and form submissions.",
            "Practiced managing the state of the quiz (score, answers) throughout the app.",
            "Applied conditions to check answers and update the score."
        ],
        snapShots: [QuizApp]
    },
    {
        language: "JavaScript",
        video: "video",
        img: ExpenseTracker,
        title: "Expense Tracker",
        shortDesc: "A simple and responsive expense tracker app that allows users to add, delete, and manage expenses with automatic total calculation and local storage persistence.",
        fullDesc: [
            "This expense tracker app provides an intuitive way to manage daily expenses with a clean and user-friendly interface. Users can easily add and delete expenses, and the app automatically calculates the total expenses in real-time. The data is stored in Local Storage, ensuring persistence even after page refreshes, allowing users to continue where they left off. The app is designed with a mobile-first approach, making it fully responsive and easy to use on any device.",
            "Built using HTML, CSS, and JavaScript, this project was an excellent opportunity to practice essential web development concepts, including DOM manipulation and working with Local Storage. The app also highlights the importance of responsive design, ensuring a seamless experience across both desktop and mobile devices. By implementing these features, I was able to deepen my understanding of creating dynamic, user-friendly web applications."
        ],
        timeLine: [
            {
                duration: "1 day",
                isCompleted: "True",
                status: "Live"
            }
        ],
        techSTack: ["HTML5", "CSS3", "JavaScript"],
        keyFeatures: [
            "Add & delete expenses with ease.",
            "Automatically calculates the total.",
            "Saves all data in Local Storage (persistent even after refresh).",
            "Mobile-friendly responsive design"
        ],
        learning: [
            "DOM manipulation with JavaScript.",
            "Managing state and data in JavaScript.",
            "Using Local Storage effectively.",
            "Responsive web design basics."
        ],
        snapShots: [ExpenseTracker]
    },
    {
        language: "JavaScript",
        video: "video",
        img: Img1,
        title: "Weather App (API based)",
        shortDesc: "A weather app that fetches real-time weather data for any city, allows Celsius ↔ Fahrenheit toggle, and displays key weather metrics with a clean UI.",
        fullDesc: [
            "This weather app enables users to search for any city and fetch real-time weather data using an external API. It displays key metrics like temperature, humidity, and “feels like” values. Users can easily toggle between Celsius and Fahrenheit with a single click, enhancing the app’s usability. A clean weather icon is also used to improve the visual experience and make the interface more engaging.",
            "Building this app helped me practice consuming REST APIs in JavaScript and working with asynchronous data. I gained valuable experience in DOM manipulation and event handling, allowing me to dynamically update the UI based on user input. I also focused on designing a simple but responsive UI to ensure a smooth experience across all devices. Finally, I learned how to deploy front-end projects seamlessly using platforms like Vercel, bringing the project to life with ease."
        ],
        timeLine: [
            {
                duration: "1 day",
                isCompleted: "True",
                status: "Live"
            }
        ],
        techSTack: ["HTML5", "CSS3", "JavaScript"],
        keyFeatures: [
            "Add & delete expenses with ease.",
            "Automatically calculates the total.",
            "Saves all data in Local Storage (persistent even after refresh).",
            "Mobile-friendly responsive design"
        ],
        learning: [
            "DOM manipulation with JavaScript.",
            "Managing state and data in JavaScript.",
            "Using Local Storage effectively.",
            "Responsive web design basics."
        ],
        snapShots: [Img1, Img2]
    },
    {
        language: "JavaScript",
        video: "video",
        img: Loginpage,
        title: "Student Management System",
        shortDesc: "A web application with an admin panel for managing students and courses, and a student panel for course enrollment, fee management, and account management.",
        fullDesc: [
            "This project is a comprehensive web application designed to manage students and courses through a role-based access system. The admin panel allows administrators to add, update, remove, and view students and courses, as well as search and export all data. Admins can also manage user credentials and perform CRUD operations on courses. The student panel enables users to enroll in courses, view their enrolled courses, and check their fees based on the credit hours of the selected courses. Students can also reset their passwords and logout securely.",
            "A key feature of this project is the authentication system, which separates access levels for the admin and students. Admin credentials (username: admin, password: admin123) allow unrestricted access to the admin panel, while students’ credentials are generated and managed by the admin. This ensures role-based security across different functionalities of the system. In addition, this project demonstrates a strong grasp of state management in JavaScript, as well as handling user flows such as authentication and password resets."
        ],
        timeLine: [
            {
                duration: "3 weeks",
                isCompleted: "True",
                status: "Live"
            }
        ],
        techSTack: ["HTML5", "CSS3", "JavaScript"],
        keyFeatures: [
            "Admin Panel – Add, update, remove students & courses, view/export all data, search courses.",
            "Student Panel – Enroll in courses, view enrolled courses, check fees (calculated on basis of credit hours), search courses, reset password, and logout.",
            "Authentication – Separate login for admin (username: admin / password: admin123) and students (credentials generated by admin)."
        ],
        learning: [
            "Building a role-based system (admin and student).",
            "Managing state and data in JavaScript.",
            "Handling authentication & password reset flows.",
            "Structuring a multi-panel project with different permissions."
        ],
        snapShots: [Loginpage, Forgotpassword, AdminPanel1, AdminPanel2, AdminPanel3, AdminPanel4, Studentpanel1, Studentpanel2]
    },

    {
        language: "ReactJs",
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