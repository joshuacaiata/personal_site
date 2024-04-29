import revolt from '../images/revolt.png';
import passport from '../images/parkpassport.png';
import portfolio from '../images/portfolio.png';
import straights from '../images/straights.png';
import compiler from '../images/compiler.png';
import hangman from '../images/hangman.png';
import basecamp from '../images/basecamp.png';
import compilerfile from '../zips/compiler.zip';
import straightsfile from '../zips/straights.zip'
import mazur from '../images/mazur.png';
import ridetimes from '../images/ridetimes.png';
import okcupid from '../images/okcupid.png';
import caltrack from '../images/caltrack.png';
import codehistory from '../images/codehistory.png'

const projects = [
    {
        name: 'CalTrack',
        image: caltrack,
        alt: 'CalTrack',
        skills: 'SWIFT, SWIFTUI, SQL',
        details: "A calorie tracker for iOS! Counts your burned calories using HealthKit to sync with Apple Health, and uses the FoodData Central API to find nutritional information for various foods.",
        link: 'https://github.com/joshuacaiata/CalTrack',
        deploy: 'https://apps.apple.com/us/app/caltrack/id6499473906'
    },
    {
        name: 'OkCupid Predictor',
        image: okcupid,
        alt: 'OkCupid Predictor',
        skills: 'PYTHON, PYTORCH, SCIKIT-LEARN, XGBOOST, MATPLOTLIB',
        details: 'Trained various models to predict relationship statuses using an OkCupid dataset. Trained a decision tree, support vector machine (SVM), neural network, and XGBoost.',
        link: 'https://github.com/joshuacaiata/OK-Cupid-ML'
    },
    {
        name: 'Mazur',
        image: mazur,
        alt: 'Mazur',
        skills: 'JAVASCRIPT, REACT, HTML, CSS',
        details: "Built a random maze generator that can also solve the maze using Dijkstra's, A*, breadth-first, and depth-first search algorithms. This uses the Hunt and Kill algorithm to generate the mazes.",
        link: 'https://github.com/joshuacaiata/mazur',
        deploy: 'https://mazur.demo.joshuacaiata.com',
    }, 
    {
        name: 'NYC Ride Time Predictor',
        image: ridetimes,
        alt: 'NYC Ride Time Predictor',
        skills: 'PYTHON, XGBOOST, SCIKIT-LEARN, MATPLOTLIB, PANDAS',
        details: "I did this project to learn about Data Science. I used Matplotlib to plot characteristics of the data, and used XGBoost to predict the ride times.",
        link: 'https://github.com/joshuacaiata/NYC-Ride-Times',
    },
    {
        name: 'Revolt Fashion',
        image: revolt,
        alt: 'Revolt',
        skills: 'JAVASCRIPT, REACT, HTML, CSS, COMMERCE.JS, STRIPE',
        details: 'Built a small, high-end (demo) e-commerce website to learn how to use React and API’s. Note: As of July 2023, commerce.js is not rendering images on Safari.',
        link: 'https://github.com/joshuacaiata/revolt',
        deploy: 'https://revolt.demo.joshuacaiata.com',
    },
    {
        name: 'Code History',
        image: codehistory,
        alt: 'Code History',
        skills: 'SWIFT, SWIFTUI',
        details: 'Something I built while I was learning Swift! It has a couple questions about computer science history, and it will calculate your score when you complete the quiz.',
        link: 'https://github.com/joshuacaiata/Swift-Quiz-App'
    },
    {
        name: 'Personal Portfolio',
        image: portfolio,
        alt: 'Personal Portfolio',
        skills: 'JAVASCRIPT, REACT, HTML, CSS',
        details: "This is my portfolio, the one you are viewing right now. I did all of my own custom CSS, including the CSS for the animations. The site is responsive, so it works for any screen sizes.",
        link: 'https://github.com/joshuacaiata/personal_site',
        deploy: 'https://joshuacaiata.com',
    },
    {
        name: 'Park Passport',
        image: passport,
        alt: 'Park Passport',
        skills: 'JAVASCRIPT, REACT, HTML, CSS',
        details: 'A ride tracker app for all of your favourite Disney theme parks! Count how many times you have been on each ride in each park. This works for all parks in the continental United States.',
        link: 'https://github.com/joshuacaiata/park-passport',
        deploy: 'https://passport.demo.joshuacaiata.com',
    },
    {
        name: 'Basecamp Finance',
        image: basecamp,
        alt: 'Basecamp Wealth',
        skills: 'PRODUCT MANAGER',
        details: 'This was a project I helped on where I was a Product Manager. I conducted market research, developed the product roadmap, wrote product requirements, and the designed wireframes.',
        link: 'https://basecamp.demo.joshuacaiata.com',
        deploy: 'https://google.com',
    },
    {
        name: 'Straights - Command line game',
        image: straights,
        alt: 'Straights',
        skills: 'C++',
        details: 'This is a fun little command line card game built using object-oriented programming principles such as encapsulation, abstraction, polymorphism, and inheritance.',
        link: straightsfile,
        download: 'straights.zip',
    },
    {
        name: 'Code Compiler',
        image: compiler,
        alt: 'Code Compiler',
        skills: 'RACKET (LIKE LISP)',
        details: "This is a compiler for a subset of the C language that performs scanning, parsing, context-sensitive analysis, code generation, linking, and assembling.",
        link: compilerfile,
        download: 'compiler.zip',
    },
    {
        name: 'Hangman',
        image: hangman,
        alt: 'Hangman',
        skills: 'PYTHON',
        details: "This is a small hangman game I built when I was learning how to code. It picks a word, takes user input, and will continue until you win or lose the game!",
        link: 'https://github.com/joshuacaiata/hangman',
    },
]

export default projects;