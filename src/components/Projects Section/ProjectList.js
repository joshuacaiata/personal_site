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

const projects = [
    {
        name: 'Revolt Fashion',
        image: revolt,
        alt: 'Revolt',
        skills: 'JAVASCRIPT, REACT, HTML, CSS, COMMERCE.JS, STRIPE',
        details: 'Built a small, high-end (demo) e-commerce website to learn how to use React and API’s. This site uses the commerce.js API to load the products, and uses Stripe to process payment.',
        link: 'https://github.com/joshuacaiata/revolt',
        deploy: 'https://revolt.demo.joshuacaiata.com',
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
        name: 'Park Passport',
        image: passport,
        alt: 'Park Passport',
        skills: 'JAVASCRIPT, REACT, HTML, CSS',
        details: 'A ride tracker app for all of your favourite Disney theme parks! Count how many times you have been on each ride in each park. This works for all parks in the continental United States.',
        link: 'https://github.com/joshuacaiata/park-passport',
        deploy: 'https://passport.demo.joshuacaiata.com',
    },
    {
        name: 'Personal Portfolio',
        image: portfolio,
        alt: 'Personal Portfolio',
        skills: 'JAVASCRIPT, REACT, HTML, CSS',
        details: "This is my portfolio, the one you are viewing right now. I did all of my own custom CSS, including the CSS for the animations. The site is responsive, so it works for any screen sizes.",
        link: 'https://github.com/joshuacaiata/personal_site',
        deploy: 'https://google.com',
    },
    {
        name: 'Basecamp Wealth',
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
        skills: 'Racket (like LISP)',
        details: "This is a compiler for a subset of the C language that performs scanning, parsing, context-sensitive analysis, code generation, linking, and assembling.",
        link: compilerfile,
        download: 'compiler.zip',
    },
    {
        name: 'Hangman',
        image: hangman,
        alt: 'Hangman',
        skills: 'Python',
        details: "This is a small hangman game I built when I was learning how to code. It picks a word, takes user input, and will continue until you win or lose the game!",
        link: 'https://github.com/joshuacaiata/hangman',
    }
]

export default projects;