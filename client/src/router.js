import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import {
  createBrowserRouter
} from "react-router-dom";
import Cookies from 'js-cookie';

const token=Cookies.get("token");
export default createBrowserRouter([
    {
      
      element: <App />,
      children:[
        {
          path: "/",
          element: token?<Home />:<Login/>,
        },
        {
        path: "/register",
        element: <Register />,
      },
        {
        path: "/login",
        element: <Login />,
      },
    ]
    },
    
  ]);
  