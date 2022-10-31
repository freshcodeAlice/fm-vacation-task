import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' component={LoginPage}/>
      <Route path='/signup' component={SignUpPage}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
