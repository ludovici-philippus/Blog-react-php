import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";

function App() {
    const [busca, setBusca] = useState("");
  return (
    <Router>
        <Header setBusca={setBusca}/>
            <Routes>
                <Route exact path="/" element={<Home busca={busca}/>}></Route>
                <Route path="/:slug" element={<Home categoria="/:slug"/>}></Route>
                <Route path="/:slug/:slug" element={<Post slug=":slug"/>}></Route>
            </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
