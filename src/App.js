import Home from './routes/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './routes/listPage/ListPage';
import { Layout } from './routes/layout/Layout';
import { SinglePage } from './routes/singlePage/SinglePage';
import { Profile } from './routes/profile/Profile';

function App() {
  const crouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <Profile />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={crouter} />
  );
}

export default App;
