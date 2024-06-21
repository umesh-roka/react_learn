import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import NotFound from './ui/NotFound';
import AddStdForm from './features/student/AddStdForm';
import StdDetail from './features/student/StdDetail';
import UpdateStd from './features/student/UpdateStd';
// import UpdateForm from './features/users/UpdateForm';
import Home from './features/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path:'home',element:<Home/>},
      {path:'details', element:<StdDetail/>},
      { path: 'addForm', element: <AddStdForm/> },
      // { path: 'updatestd/:id', element: <UpdateStd /> },
      {path:'/updatestd/:id',element:<UpdateStd/>},
      // { path: 'about', element: <UpdateForm/> },
      { path: '*', element: <NotFound /> },
    ]
  },
]);
const App = () => {

  return <RouterProvider router={router} />
}

export default App