import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Registar from "../Registar/Registar";
import Blogs from "../Blogs/Blogs";
import AllToyes from "../AllToyes/AllToyes";
import MyToyes from "../MyToyes/MyToyes";
import AddToy from "../AddToy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/registar",
          element:<Registar></Registar>
        },
        {
          path:"/blogs",
          element:<Blogs></Blogs>
        },
        {
          path:'/allToyes',
          element:<AllToyes></AllToyes>
        },
        {
          path:'/myToyes',
          element:<MyToyes></MyToyes>
        },
        {
          path:'/addToy',
          element:<AddToy></AddToy>
        }
      ]
    },
  ]);

  export default router;