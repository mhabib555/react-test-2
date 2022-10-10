import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/home.component';
import About from './components/about.component';
import Signup from './components/signup.component';
import Fetchdata from './components/fetchdata.component';

function Router() {
    return (
        <Routes>
            <Route path="*"
                element={<Home/>}/>
            <Route path="/about"
                element={<About/>}/>
            <Route path="/signup"
                element={<Signup/>}/>
            <Route path="/fetchdata"
                element={<Fetchdata/>}/>
        </Routes>
    )
}

export default Router;
