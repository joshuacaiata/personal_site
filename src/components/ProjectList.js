import revolt from './images/revolt.png';
import passport from './images/parkpassport.png';
import portfolio from './images/portfolio.png';
import straights from './images/straights.png';
import compiler from './images/compiler.png';
import hangman from './images/hangman.png';

const projects = [
    {
        name: 'Revolt Fashion',
        image: revolt,
        alt: 'Revolt',
        skills: 'JAVASCRIPT, REACT, HTML, CSS, COMMERCE.JS, STRIPE',
        details: 'Built a small, high-end (fake) e-commerce website to learn how to use React and API’s. This site uses the commerce.js API to load the products, and uses Stripe to process payment.',
    },
    {
        name: 'Park Passport',
        image: passport,
        alt: 'Park Passport',
        skills: 'JAVASCRIPT, REACT, HTML, CSS',
        details: 'A ride tracker app for all of your favourite Disney theme parks! Count how many times you have been on each ride in each park. This works for all parks in the continental United States.',
    },
    {
        name: 'Personal Portfolio',
        image: portfolio,
        alt: 'Personal Portfolio',
        skills: 'JAVASCRIPT, REACT, HTML, CSS',
        details: "This is my portfolio, the one you're seeing right now! I built it to showcase all of my projects, and all of the things I can do.",
    },
    {
        name: 'Straights - Command line game',
        image: straights,
        alt: 'Straights',
        skills: 'C++',
        details: 'This is a fun little command line card game built using object-oriented programming principles such as encapsulation, abstraction, polymorphism, and abstraction. ',
    },
    {
        name: 'Code Compiler',
        image: compiler,
        alt: 'Code Compiler',
        skills: 'Racket (like LISP)',
        details: "This is a compiler for a subset of the C language that performs scanning, parsing, context-sensitive analysis, code generation, linking, and assembling.",
    },
    {
        name: 'Hangman - Command line game',
        image: hangman,
        alt: 'Hangman',
        skills: 'Python',
        details: "This is a small hangman game I built when I was learning how to code. It picks a word, takes user input, and will continue until you win or lose!",
    }
]

export default projects;