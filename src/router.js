import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/home.component';
import About from './components/about.component';

function Router() {
    return (
        <Routes>
            <Route path="*"
                element={<Home/>}/>
            <Route path="/about"
                element={<About/>}/>
        </Routes>
    )
}

export default Router;
