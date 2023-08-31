import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import Body from "./components/Body";

const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<ListEmployeeComponent/>,
      },
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

function App() {
  return (
    <div className="App">
      
      <Header/>
      <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
      <Footer/>
    </div>
  );
}

export default App;
