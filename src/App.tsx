import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import Plans from './pages/plans';
import Modalities from './pages/Modalities';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/plans',
        element: <Plans />,
      },
      {
        path: '/modalities',
        element: <Modalities />,
      },
    ]
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />
  },
])

export default router;
