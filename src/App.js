import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
            </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
