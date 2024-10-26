import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './pages/Error';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import 'bulma/css/bulma.min.css';


const projectList = [
  {
    title: 'Book Club App',
    description: 'A web application to manage members, books, and clubs using React, Node.js, Express, and Sequelize.',
    githubLink: 'https://github.com/Team-we-dont-know-yet/Bookclub'
  },
  {
    title: 'Blog',
    description: 'A CMS style blogsite',
    githubLink: 'https://github.com/katherinearenas/week-fourteen-challenge-karenas'
  },
  {
    title: 'Note-Taking App',
    description: 'A GitHub gist explaining a regex for a US Phone Number Validation',
    githubLink: 'https://gist.github.com/katherinearenas/97175732d9b3caa7b32bc8f857add19e'
  },
];

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio projectList ={projectList} />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);