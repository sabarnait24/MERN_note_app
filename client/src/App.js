
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register';
import Password from './components/Password';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/password",
    element: <Password></Password>
  },
  {
    path: "/profile",
    element: <Profile></Profile>
  },
  {
    path: "/*",
    element: <PageNotFound></PageNotFound>
  },
]);
function App() {
  return (
    <div className='flex justify-center items-center'>
       <RouterProvider router={router} />
    </div>
   
  );
}

export default App;
