import './App.css';
import {Link, Outlet} from 'react-router-dom';
import Router from './router';

function App() {
    return (
        <div className="App">
            <div className="h100">
                <h2>Navigations</h2>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <div className="flex flex-column v-align-center">
                    <Router/>
                </div>
            </div>
        </div>
    );
}

export default App;
