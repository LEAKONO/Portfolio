import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import 'animate.css';  
import './App.css';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            direction: 'vertical',
            smoothTouch: true,
            touchMultiplier: 2,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar className="animate__animated animate__fadeIn" /> {/* Add animation class */}
                <main className="animate__animated animate__fadeIn"> {/* Add animation class */}
                    <Home />
                </main>
                <Footer className="animate__animated animate__fadeIn" /> {/* Add animation class */}
            </div>
        </Router>
    );
}

export default App;
