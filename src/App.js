import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import OrderReview from "./components/OrederReview/OrderReview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/order-review" element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
