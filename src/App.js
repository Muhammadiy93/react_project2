import Approuter from "./router/Approuter";
import { BrowserRouter } from "react-router-dom";
import Home from "./view/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Approuter />
      </BrowserRouter>
    </>
  );
}

export default App;
