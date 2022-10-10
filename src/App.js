import './App.css';
import {Link, Outlet} from 'react-router-dom';
import Router from './router';
import { useState } from 'react';

function App() {

    const [themeMode, setThemeMode] = useState('Dark');
    const changeTheme = (e)=>{
        if(e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            setThemeMode('Light');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setThemeMode('Dark');
        }        
    }
    return (
        <div className="App">
            <div className="h100">
                <h2>Navigations</h2>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/fetchdata">Fetch Data</Link>
                </nav>
                <div>
                    Dark/light Theme
                    <label className="slider-btn">
                        <input type="checkbox" onChange={changeTheme}/>
                    </label>
                </div>
                    
                <div className="flex flex-column v-align-center">
                    <Router/>
                </div>
            </div>
        </div>
    );
}

export default App;
