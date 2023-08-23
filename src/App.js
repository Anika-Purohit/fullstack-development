
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import Body from "./components/Body";

const appRouter = () =>{
  createBrowserRouter([{
    path:"/",
    element:<ListEmployeeComponent/>,
    children:[
      {
        path:"/update",
        element:<UpdateEmployee/>,
      },
      {
       path:"/add",
       element:<AddEmployee/>, 
      },
      {
      path:"/view",
      element:<ViewEmployee/>,
      }
    ]
  }])
}
function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}>
      <Header/>
       <Outlet/>
       <Footer/>
      </RouterProvider>

    </div>
  );
}

export default App;
