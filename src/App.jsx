import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LecturePage from './pages/lecturePages/LecturePage';
import LiturgiePage from './pages/liturgiePage/LiturgiePage';
import HomePage from './pages/home/HomePage';
import Layout from './components/layouts/layout/Layout';

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
