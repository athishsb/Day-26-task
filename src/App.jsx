import './App.css'
import {Routes, Route} from 'react-router-dom';
import All from './components/All';
import Menu from './components/Menu';
import Fsd from './components/Full Stack Development';
import Ds from './components/Data Science';
import Cs from './components/Cyber Security';
import Career from './components/Career';

function App() {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" Component={All} />
      <Route path="/fullStackDevelopment" Component={Fsd} />
      <Route path="/dataScience" Component={Ds} />
      <Route path="/cyberSecurity" Component={Cs} />
      <Route path="/career" Component={Career} />
    </Routes>
    </>
  )
}

export default App
