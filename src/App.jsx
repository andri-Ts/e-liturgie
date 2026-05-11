import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './layouts/header/Header';
import Layout from './layouts/layout/Layout';
import LecturePage from './pages/lecturePages/LecturePage';
import LiturgiePage from './pages/liturgiePage/LiturgiePage';
import HomePage from './pages/home/HomePage';

function App() {
  const fkmpRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: '/lecture',
          element: <LecturePage />,
        },
        {
          path: '/liturgie',
          element: <LiturgiePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={fkmpRouter} />;
}

export default App;
