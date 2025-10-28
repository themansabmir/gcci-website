import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Platform from "./components/Platform";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Features from "./components/Features";
import Location from "./components/Location";

export default function App() {
    return (
        <>
            {/*<Navbar />*/}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Solutions />
                            <Features />
                            <Stats />
                            <Platform />
                            <Location />
                            <Footer />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}
