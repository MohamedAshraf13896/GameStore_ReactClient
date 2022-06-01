import "./App.css";
import { Header } from "./Comonents/Header";
import { Route, Routes } from "react-router-dom";
import Categories from "./Comonents/Categories";
import { ProductByID } from "./Comonents/ProductByID";
import Icons from "./Comonents/Icons";
import { Forms } from "./Comonents/Forms";
import { EditForm } from "./Comonents/EditForm";
import { AddCateogory } from "./Comonents/AddCateogory";
import { AddPlatform } from "./Comonents/AddPlatForm";
import Group from "./Comonents/Group";
import { Register } from "./Comonents/Register";
import { Login } from "./Comonents/Login";

function App() {
  return (
    <div className="App">
      <div className="Parentbg">
        <Header></Header>
        <div className="row">
          <div className="col-3 mt-3">
            <Categories></Categories>
            <Icons></Icons>
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Group />}></Route>
              <Route path="/details/:id" element={<ProductByID />}></Route>
              <Route path="/Forms" element={<Forms />}></Route>
              <Route path="/AddCateogory" element={<AddCateogory />}></Route>
              <Route path="/AddPlatform" element={<AddPlatform />}></Route>
              <Route path="/AddCateogory" element={<AddCateogory />}></Route>
              <Route path="/Register" element={<Register />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/EditForm/:id" element={<EditForm />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
