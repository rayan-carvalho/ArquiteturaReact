import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';

export default function Private() {
  return (
     <>
      <Routes>         
        <Route path="/" element={<Home/>}></Route> 
      </Routes>
     </>
        
    
  );
}