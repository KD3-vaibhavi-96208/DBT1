import { BrowserRouter, Routes, Route, Link } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Student from "./components/Student";

function App() {

    return (

        <BrowserRouter>

            <h1>React Router Example</h1>

            {/* Static Navigation */}

            <nav>

                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/contact">Contact</Link>

            </nav>

            <hr />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                {/* Dynamic Navigation */}

                <Route path="/student/:name" element={<Student />} />

            </Routes>

        </BrowserRouter>
    )
}

export default App
