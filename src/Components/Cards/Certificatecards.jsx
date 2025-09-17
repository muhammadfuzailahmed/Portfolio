import React from 'react'

function Certificatecards() {
    const certificateCards = [
        {
            img: <i class="fa-brands fa-meta"></i>,
            title: "Introduction to Front-End Development",
            provider: "Meta",
            platform: "Coursera",
            learnedObjectives: ["Fundamentals", "HTML"],
            verifyAt: "https://coursera.org/verify/16959QRYAV1I"
        },
        {
            img: <i class="fa-brands fa-meta"></i>,
            title: "Programming with JavaScript",
            provider: "Meta",
            platform: "Coursera",
            learnedObjectives: ["Functions", "OOP", "DOM"],
            verifyAt: "https://coursera.org/verify/U6OUYK0A7MF0"
        },
        {
            img: <i class="fa-brands fa-meta"></i>,
            title: "HTML and CSS in depth",
            provider: "Meta",
            platform: "Coursera",
            learnedObjectives: ["HTML", "CSS", "Responsiveness"],
            verifyAt: "https://coursera.org/verify/ZVCZJ542QVMR"
        },
        {
            img: <i class="fa-brands fa-meta"></i>,
            title: "Version Control",
            provider: "Meta",
            platform: "Coursera",
            learnedObjectives: ["Git", "GitHub", "CLI"],
            verifyAt: "https://coursera.org/verify/1UGDKOCIISQP"
        },
        {
            img: <i class="fa-brands fa-meta"></i>,
            title: "React Basics",
            provider: "Meta",
            platform: "Coursera",
            learnedObjectives: ["Hooks", "States", "jsx"],
            verifyAt: "https://coursera.org/verify/H05FVR7DEQ5W"
        },
        {
            img: <i class="fa-brands fa-meta"></i>,
            title: "Advanced React",
            provider: "Meta",
            platform: "Coursera",
            learnedObjectives: ["Components", "Props", "Events"],
            verifyAt: "https://coursera.org/verify/SGVYU5NZK7S5"
        },
    ]
  return (
    <div className='w-full bg-[#0d0e0e]'>
            <h1 className='text-center font-bold text-4xl dark:text-white py-10'>Projects</h1>
        <div className='w-[80vw] m-auto h-96 border-2 border-cyan-400 grid grid-col-5'>
            {certificateCards.map(card => (
                <div>
                    <h2 className='dark:text-white mb-2'><span className='text-blue-600'>{card.img}</span> {card.provider} - {card.platform}</h2>
                    <h1 className='dark:text-white font-bold text-xl w-56 mb-2'>{card.title}</h1>
                    <p className='my-2 w-50 bg-green-500'>{card.learnedObjectives.map(obj => (
                        <span className='dark:text-white px-1.5 py-1 mx-1 my-1 bg-gray-500'>{obj}</span>
                    ))}</p>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Certificatecards