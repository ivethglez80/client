
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import home from "./views/home/home.jsx"

function App() {
  return (
    
    <div className="App">
    <NavBar/> 
    <Route exact path="/" component={home} />

    </div>
  );
}

export default App;
