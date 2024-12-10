import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Profile from './components/Profile/Profile';

import './App.css';

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ email: '', id: '', role: '' });  // Include role

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLoginOpen = () => setIsLoginOpen(true);
    const handleLoginClose = () => setIsLoginOpen(false);

    const handleRegisterOpen = () => setIsRegisterOpen(true);
    const handleRegisterClose = () => setIsRegisterOpen(false);

    const handleLogin = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoginOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser({ email: '', id: '', role: '' });
        localStorage.removeItem('user');
        localStorage.removeItem('avatar');
    };

    const handleSaveProfile = (updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        localStorage.setItem('avatar', updatedUser.avatar || '');
    };

    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header
                    onLoginOpen={handleLoginOpen}
                    onRegisterOpen={handleRegisterOpen}
                    isLoggedIn={isLoggedIn}
                    user={user}
                    onLogout={handleLogout}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/profile" element={isLoggedIn ? <Profile user={user} onSave={handleSaveProfile} /> : <Navigate to="/" />} />
                </Routes>
                <Footer />
                {isLoginOpen && (
                    <div className="modal">
                        <Login onClose={handleLoginClose} onLogin={handleLogin} />
                    </div>
                )}
                {isRegisterOpen && (
                    <div className="modal">
                        <Register onClose={handleRegisterClose} onRegister={handleLogin} />
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
