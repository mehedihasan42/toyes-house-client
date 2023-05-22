import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Registar from "../Registar/Registar";
import Blogs from "../Blogs/Blogs";
import AllToyes from "../AllToyes/AllToyes";
import MyToyes from "../MyToyes/MyToyes";
import AddToy from "../AddToy/AddToy";
import PrivetRoutes from "./PrivetRoutes";
import CatDetails from "../../Details/CatDetails";
import HorseDetails from "../../Details/HorseDetails";
import TadyBearDetails from "../../Details/TadyBearDetails";
import Error from "../Error";
import ToyesDetails from "../AllToyes/ToyesDetails";

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
          path:'/allToyes/:id',
          element:<PrivetRoutes><ToyesDetails></ToyesDetails></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/allToyes/${params.id}`)
        },
        {
          path:'/myToyes',
          element:<PrivetRoutes><MyToyes></MyToyes></PrivetRoutes>
        },
        {
          path:'/addToy',
          element:<PrivetRoutes><AddToy></AddToy></PrivetRoutes>
        },
       {
        path:"/catDetails/:id",
        element:<PrivetRoutes><CatDetails></CatDetails></PrivetRoutes>,
        loader:({params})=> fetch(`http://localhost:5000/cats/${params.id}`)
       },
       {
        path:"/horseDetails/:id",
        element:<PrivetRoutes><HorseDetails></HorseDetails></PrivetRoutes>,
        loader:({params})=> fetch(`http://localhost:5000/horses/${params.id}`)
       },
       {
        path:"/tadyDetails/:id",
        element:<PrivetRoutes><TadyBearDetails></TadyBearDetails></PrivetRoutes>,
        loader:({params})=> fetch(`http://localhost:5000/tadyBear/${params.id}`)
       }
      ],

    },
    {
      path:"*",
      element:<Error></Error>
     }
  ]);

  export default router;