import React from 'react'
import ToDolistimg from '../../assets/Projects/JavaScript/ToDo/ToDolistimg.png'
import ToDolistimg2 from '../../assets/Projects/JavaScript/ToDo/ToDolistimg2.png'
import Todovideo from '../../assets/Projects/JavaScript/ToDo/Todovideo.mp4'
import QuizApp from '../../assets/Projects/JavaScript/Quiz/QuizApp.jpg'
import Quizappimg2 from '../../assets/Projects/JavaScript/Quiz/Quizappimg2.png'
import Quizappvideo from '../../assets/Projects/JavaScript/Quiz/Quizappvideo.mp4'
import ExpenseTracker from '../../assets/Projects/JavaScript/ExpenseTracker/ExpenseTracker.png'
import ExpenseTrackerimg2 from '../../assets/Projects/JavaScript/ExpenseTracker/ExpenseTrackerimg2.png'
import ExpenseTrackervideo from '../../assets/Projects/JavaScript/ExpenseTracker/ExpenseTrackervideo.mp4'
import Img1 from '../../assets/Projects/JavaScript/WeatherApp/Img1.jpg'
import Img2 from '../../assets/Projects/JavaScript/WeatherApp/Img2.jpg'
import Weatherappvideo from '../../assets/Projects/JavaScript/WeatherApp/Weatherappvideo.mp4'
import AdminPanel1 from '../../assets/Projects/JavaScript/SMS/AdminPanel1.png'
import AdminPanel2 from '../../assets/Projects/JavaScript/SMS/AdminPanel2.png'
import AdminPanel3 from '../../assets/Projects/JavaScript/SMS/AdminPanel3.png'
import AdminPanel4 from '../../assets/Projects/JavaScript/SMS/AdminPanel4.png'
import Forgotpassword from '../../assets/Projects/JavaScript/SMS/Forgotpassword.png'
import Loginpage from '../../assets/Projects/JavaScript/SMS/Loginpage.png'
import Studentpanel1 from '../../assets/Projects/JavaScript/SMS/Studentpanel1.png'
import Studentpanel2 from '../../assets/Projects/JavaScript/SMS/Studentpanel2.png'
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
import ShopSphereimg1 from '../../assets/Projects/React/ShopSphere/ShopSphereimg1.png'
import ShopSphereimg2 from '../../assets/Projects/React/ShopSphere/ShopSphereimg2.png'
import ShopSphereimg3 from '../../assets/Projects/React/ShopSphere/ShopSphereimg3.png'
import ShopSpherevideo from '../../assets/Projects/React/ShopSphere/ShopSpherevideo.mp4'
import BMSImg1 from '../../assets/Projects/ManagementSystems/BankingManagementSystem/BMSImg1.png'
import BMSImg2 from '../../assets/Projects/ManagementSystems/BankingManagementSystem/BMSImg2.png'
import BMSImg3 from '../../assets/Projects/ManagementSystems/BankingManagementSystem/BMSImg3.png'
import BMSImg4 from '../../assets/Projects/ManagementSystems/BankingManagementSystem/BMSImg4.png'
import BMSImg5 from '../../assets/Projects/ManagementSystems/BankingManagementSystem/BMSImg5.png'
import BMSImg6 from '../../assets/Projects/ManagementSystems/BankingManagementSystem/BMSImg6.png'
import BankingManagementSystemvideo from '../../assets/Projects/ManagementSystems/BankingManagementSystem/BankingManagementSystemvideo.mp4'

export const Projects = [
    {
        language: "JavaScript",
        liveDemo: "https://todo-list-using-java-script-phi.vercel.app/",
        sourceCode: "https://github.com/muhammadfuzailahmed/Todo-List-using-JavaScript", 
        video: Todovideo,
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
        snapShots: [ToDolistimg, ToDolistimg2]
    },
    {
        language: "JavaScript",
        liveDemo: "https://quiz-app-ivory-eta-16.vercel.app/",
        sourceCode: "https://github.com/muhammadfuzailahmed/Quiz-App",
        video: Quizappvideo,
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
        snapShots: [QuizApp, Quizappimg2]
    },
    {
        language: "JavaScript",
        liveDemo: "https://expense-tracker-sooty-six-89.vercel.app/",
        sourceCode: "https://github.com/muhammadfuzailahmed/Expense-Tracker",
        video: ExpenseTrackervideo,
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
        snapShots: [ExpenseTracker, ExpenseTrackerimg2]
    },
    {
        language: "JavaScript",
        liveDemo: "https://weather-app-using-api-mocha.vercel.app/",
        sourceCode: "https://github.com/muhammadfuzailahmed/Weather-App-using-API",
        video: Weatherappvideo,
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
        liveDemo: "https://student-managemnt-system-mu.vercel.app/",
        sourceCode: "https://github.com/muhammadfuzailahmed/Student-Managemnt-System",
        video: "https://res.cloudinary.com/dqz0yxezk/video/upload/v1778000005/SMSvideo_tbskwu.mp4",
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
        techSTack: ["React.JS", "React Router", "Tailwind CSS"],
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
    // {
    //     language: "ReactJs",
    //     liveDemo: "https://react-weather-app-api-based.vercel.app/",
    //     sourceCode: "https://github.com/muhammadfuzailahmed/React-Weather-App-API-based-",
    //     video: WeatherAppApivideo,
    //     img: Weatherappimg,
    //     title: "Weather App (API based)",
    //     shortDesc: "A React-based Weather App that provides real-time weather information for any city with a clean and responsive interface.",
    //     fullDesc: [
    //         "This Weather App, built with React, allows users to search for any city and get real-time weather data from an API. It displays important metrics such as temperature, humidity, weather description, and feels like values. The app features a clean and simple interface, making it easy for users to find the information they need quickly and intuitively.",
    //         "Building this project helped me strengthen my skills in React and API integration. I gained practical experience in managing state, fetching and displaying dynamic data, and designing a responsive user interface. This project also improved my understanding of how to structure React components effectively while creating an interactive and functional web application."
    //     ],
    //     timeLine: [
    //         {
    //             duration: "3 weeks",
    //             isCompleted: "True",
    //             status: "Live"
    //         }
    //     ],
    //     techSTack: ["React.JS", "React Router", "Tailwind CSS"],
    //     keyFeatures: [
    //         "Search for Cities: Get up-to-date weather information by simply entering a city name.",
    //         "Displays important weather details such as temperature, humidity, description and feels like values.",
    //         "Designed for an easy and intuitive user experience."
    //     ],
    //     learning: [
    //         "Learned to handle dynamic data and update the UI accordingly.",
    //         "Gained experience fetching and displaying data from a REST API.",
    //         "Practiced rendering components based on API responses and user input.",
    //         "Improved skills in designing interfaces that work well across desktop and mobile devices."
    //     ],
    //     snapShots: [Weatherappimg, Weatherappimg2]
    // },
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
    {
        language: "ReactJs",
        liveDemo: "https://shop-sphere-ecommerce-store.vercel.app/",
        sourceCode: "https://github.com/muhammadfuzailahmed/ShopSphere-Ecommerce-store-",
        video: ShopSpherevideo,
        img: ShopSphereimg1,
        title: "ShopSphere E-commerce",
        shortDesc: "ShopSphere is a e-commerce platform offering fashion items with login/signup, add to cart, account management, and order history, all in a responsive interface.",
        fullDesc: [
            "ShopSphere is a modern e-commerce platform designed to provide a seamless shopping experience. The app showcases a curated selection of fashion items for men and women, including boots, T-shirts, shoes, and watches. Each product comes with filtering options, allowing users to easily find items based on their preferences. Users can create accounts, log in, and manage their personal details, ensuring a personalized shopping experience.",
            "The platform also features a complete shopping workflow: users can add items to their cart, view order history, and reset forgotten passwords if necessary. Built entirely with React JS and using localStorage for data persistence, ShopSphere demonstrates how front-end technologies can be leveraged to create an interactive, dynamic, and user-friendly online store. This project emphasizes responsive design, smooth navigation, and practical functionality for everyday e-commerce needs."
        ],
        timeLine: [
            {
                duration: "2 weeks",
                isCompleted: "True",
                status: "Live"
            }
        ],
        techSTack: ["React.JS", "React Router", "Tailwind CSS"],
        keyFeatures: [
            "User authentication: Login and Signup.",
            "Account management and personal details.",
            "Add to Cart functionality.",
            "Filter products by category and type.",
            "Forgot password and reset password workflow.",
            "Order history tracking.",
            "Responsive UI for smooth navigation."
        ],
        learning: [
            "Building full-featured front-end e-commerce applications.",
            "Managing user state and data persistence with localStorage.",
            "Implementing authentication workflows and password management.",
            "Designing responsive UI and filtering functionality.",
            "Handling dynamic content and interactive components in React."
        ],
        snapShots: [ShopSphereimg1, ShopSphereimg2, ShopSphereimg3]
    },
    
    {
        language: "C#",
        liveDemo: "",
        sourceCode: "https://github.com/muhammadfuzailahmed/Banking-Management-System",
        video: BankingManagementSystemvideo,
        img: BMSImg1,
        title: "Banking Management System",
        shortDesc: "A Banking Management System built with C# Windows Forms and SQL Server, featuring user authentication, account management, and basic banking operations like deposit, withdrawal, and balance inquiry.",
        fullDesc: [
            "This Banking Management System was developed as a first-year semester project in Object-Oriented Programming. Built using C# Windows Forms for the user interface and SQL Server for database management, the system simulates real-world banking operations. Users can create accounts, log in, and perform essential banking activities such as depositing money, withdrawing funds, and checking account balances.",
            "The project also includes integration with SQL Server for persistent data storage and management, giving users a reliable and secure way to store account information. Additionally, version control using Git and GitHub was applied throughout development to maintain project integrity and track changes. This project provided hands-on experience in connecting software concepts with real-world applications, enhancing skills in programming, database management, and project versioning."
        ],
        timeLine: [
            {
                duration: "1 month",
                isCompleted: "True",
                status: "Live"
            }
        ],
        techSTack: ["C# (Windows Forms)", "SQL Server"],
        keyFeatures: [
            "User authentication and account management.",
            "Deposit, withdrawal, and balance inquiry functionality.",
            "Database integration with SQL Server.",
            "Version control using Git & GitHub."
        ],
        learning: [
            "Developing desktop applications with C# Windows Forms.",
            "Implementing user authentication and banking operations.",
            "Integrating and managing data with SQL Server.",
            "Using Git & GitHub for version control.",
            "Applying Object-Oriented Programming concepts in a practical project."
        ],
        snapShots: [BMSImg1, BMSImg2, BMSImg3, BMSImg4, BMSImg5, BMSImg6]
    },
]