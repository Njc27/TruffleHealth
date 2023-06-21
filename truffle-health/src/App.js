import './App.css';
import Bills from './Components/bills/bills';
import Header from './Components/header/header';
import Summary from './Components/summary/summary';
import Home from './Components/home/home';
import Login from './Components/login/login';
import SignUp from './Components/signUp/signUp';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
   <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBill" element={<Bills />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
