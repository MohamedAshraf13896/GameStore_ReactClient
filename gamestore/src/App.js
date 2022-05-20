import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Comonents/Header";
import { Slider } from "./Comonents/Slider";
import Categories from "./Comonents/Categories";
import { Cards } from "./Comonents/Cards";
import Icons from "./Comonents/Icons";

function App() {
  return (
    <div className="App">
      <div className="Parentbg">
        <Header></Header>
        <div className="row">
          <div className="col-3">
            <Categories></Categories>
            <Icons></Icons>
          </div>
          <div className="col-9">
            <Slider></Slider>
            <Cards></Cards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
