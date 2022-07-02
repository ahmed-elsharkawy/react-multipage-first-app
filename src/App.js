import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import About from "./components/About";
import Profile from "./components/Profile";
import Content from "./components/Content";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Tablet from "./components/Tablet";
import Phone from "./components/Phone";
import Laptop from "./components/Laptop";
import Users from "./components/Users";
import UsersDetails from "./components/UsersDetails";

function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Content />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<UsersDetails></UsersDetails>}></Route>
        <Route path="/about" element={<About />}>
          <Route path="tablet" element={<Tablet></Tablet>}></Route>
          <Route path="phone" element={<Phone></Phone>}></Route>
          <Route path="laptop" element={<Laptop></Laptop>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
