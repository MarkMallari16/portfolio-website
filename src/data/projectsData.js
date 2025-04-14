import OnlineVotingPicture from '../assets/onlinevoting-ss.png'
import DesktopTodoPicture from '../assets/todo-ss1.png'
import PortfolioPicture from '../assets/portfoliopicture.png'
import StatQuickPicture from '../assets/statquick-ss.png'
import QuizGamePicture from '../assets/quiz-game-ss.png'
import GuessGamePicture from '../assets/guess-game-ss.png'
import MoviePicture from '../assets/movie-ss.png'
import TrackBudgetPicture from '../assets/track-budget-picture.png'
import EmployeeManagementPicture from '../assets/employee-management-ss.png'

const projects = [
    {
        picture: EmployeeManagementPicture,
        title: "Employee Mangement System with Attendance and Payroll",
        description: "A Desktop Application that allows users to manage employee records, including adding, updating, and deleting employee information. It also includes attendance tracking and payroll management features.",
        stacks: ["Java", "JavaSwing", "MySQL"],
        githubRepository: "https://github.com/MarkMallari16/flatlaf-java"
    },

    {
        picture: TrackBudgetPicture,
        title: "Budget Tracker",
        description: "A Budget Tracker website to help users manage and keep track of their expenses effectively.",
        stacks: ["Vue", "TailwindCSS", "DaisyUI", "Firebase"],
        liveUrl: "https://my-project-iota-seven.vercel.app/",
        githubRepository: "https://github.com/MarkMallari16/vue-firebase-project"
    },
    {
        picture: MoviePicture,
        title: "Movie Mania",
        description: "Movie Mania is a movie website that uses the api of TMDB.",
        stacks: ["ReactJS", "TailwindCSS", "DaisyUI"],
        liveUrl: "https://moviemania-psi.vercel.app/",
        githubRepository: "https://github.com/MarkMallari16/movie-website"
    },
    {
        picture: OnlineVotingPicture,
        title: "Online Voting System at STI College Bacoor",
        description: "This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school.",
        stacks: ["Laravel", "ReactJS", "TailwindCSS", "Material Design", "Inertia", "MySQL"],

        githubRepository: "https://github.com/MarkMallari16/Online-Voting-System-Version-2"
    },
    {
        picture: DesktopTodoPicture,
        title: "To-do List Application",
        description: "I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and Daisy UI, it features an intuitive interface for adding, editing, and organizing tasks.",
        stacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
        liveUrl: "https://simple-todo-list-mark.netlify.app/",
        githubRepository: "https://github.com/MarkMallari16/Simple-Todo-List-React"
    },
    {
        picture: StatQuickPicture,
        title: "Calculate mean, median, mode, range, and more with StatQuick! ",
        description: "This website helps you calculate mean, median, mode, range, and more statistics quickly and easily.",
        stacks: ["HTML", "CSS", "JavaScript", "ChartJS"],
        liveUrl: "https://statquik.netlify.app/",
        githubRepository: "https://github.com/MarkMallari16/mean-median-mode-calculator"
    },
    {
        picture: PortfolioPicture,
        title: "Personal Website Portfolio",
        description: "I developed a website portfolio for me which I showcase my projects. I use ReactJS, TailwindCSS and Daisy UI for this website.",
        stacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
        liveUrl: "https://markdev16.netlify.app/",
        githubRepository: "https://github.com/MarkMallari16/Portfolio"
    },
    {
        picture: QuizGamePicture,
        title: "Quiz Website",
        description: "I developed a quiz website that has 4 categories: English, Science, Mathematics, and Programming.",
        stacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
        liveUrl: "https://quiz-game-react-eywht4mbd-mark-mallaris-projects.vercel.app/",
        githubRepository: "https://github.com/MarkMallari16/quiz-game-react"
    },
    {
        picture: GuessGamePicture,
        title: "Guessing Game",
        description: "A fun and interactive game where players guess a randomly generated number within a specified range. The game includes multiple difficulty levels, visual and audio feedback, and is built using ReactJS and Daisy UI.",
        stacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
        liveUrl: "https://guessinggamereact.netlify.app/",
        githubRepository: "https://github.com/MarkMallari16/Guess-the-number-react"
    },

]
export default projects;