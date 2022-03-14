
import { Route,Routes } from 'react-router-dom';
import Candidato from '../pages/Candidato';

function Public() {
  return (
    <Routes>         
      <Route path="/" element={<Candidato/>}></Route> 
    </Routes>
  );
}

export default Public;