import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import CategoryPills from "./components/CategoryPills";
import CourseGrid from "./components/CourseGrid";
import CategoryIcons from "./components/CategoryIcons";
import GrowthSection from "./components/GrowthSection";
import CreatorCTA from "./components/CreatorCTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

function LandingPage() {
    return (
        <div className="min-h-screen bg-persian-blue">
            <Navbar />
            <Hero />
            <LogoStrip />
            <CategoryPills />
            <CourseGrid />
            <CategoryIcons />
            <GrowthSection />
            <CreatorCTA />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}