import "./App.css";
import AddData from "./componats/AddData";
import ShowData from "./componats/ShowData";
import { Routes, Route } from "react-router-dom";
import Edit from "./Edit";
import View from "./View";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowData />} />
        <Route path="/AddData" element={<AddData />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/View/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
