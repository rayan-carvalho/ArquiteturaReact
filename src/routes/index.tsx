import { BrowserRouter } from 'react-router-dom';
import Private from '../routes/Private';
import Public from '../routes/Public';

export default function Router () {
  const user = false;
  return (
    <BrowserRouter>
      {user ? <Private /> : <Public/>}
    </BrowserRouter>
  );
};