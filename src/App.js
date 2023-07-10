import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import {Practice} from './components/Molecules/practice/practice';

function App() {
   const obj={
    name:"Rishikesh Kumar Singh"
  }
  return (
    <div >
     <Home/>
     
   <Practice/>
    </div>
  );
}

export default App;


