import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Music from './components/Music';
import CreativeDirector from './components/CreativeDirector';
import Athletics from './components/Athletics';
import Specs from './components/Specs';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer'; // Import the Footer component
import Cursor from './components/Cursor'; // Import the Cursor component

function App() {
    return (
        <div>
            {/* Cursor overlay */}
            <Cursor />

            {/* Navbar at the top */}
            <Navbar />

            {/* Each section */}
            <div id="home"><Home /></div>
            <div id="work"><Work /></div>
            <div id="music"><Music /></div>
            <div id="creative-director"><CreativeDirector /></div>
            <div id="athletics"><Athletics /></div>
            <div id="specs"><Specs /></div>
            <div id="about-me"><AboutMe /></div>

            {/* Footer at the very bottom */}
            <Footer />
        </div>
    );
}

export default App;
