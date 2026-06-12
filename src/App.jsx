import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LecturePage from './pages/lecturePages/LecturePage';
import LiturgiePage from './pages/liturgiePage/LiturgiePage';
import HomePage from './pages/home/HomePage';
import Layout from './components/layouts/layout/Layout';
import DefaultPage from './pages/defaultPage/DefaultPage';

function App() {
  const fkmpRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <DefaultPage /> },
        {
          path: '/fanomanana-litorjia/vakiteny',
          element: <LecturePage />,
        },
        {
          path: '/fanomanana-litorjia/hira',
          element: <LiturgiePage />,
        },
        // Route par defaut
        {
          path: '*',
          element: <DefaultPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={fkmpRouter} />;
}

export default App;
