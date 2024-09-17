// import logo from './logo.svg';
import './App.css';
import { Route,Routes, Link } from 'react-router-dom';
import Bank from './Components/Bank';
import Home from './Components/Home';
import Log from './Components/Log';
import Contact from './Components/Contact';
import About from './Components/About';
import ParentProp from './Components/Props/ParentProp';
import UseStateHook from './Components/Hook/UseStateHook';
import UseRefHook from './Components/Hook/UseRefHook';
import UseEffectHook from './Components/Hook/UseEffectHook';
import UseContextParent from './Components/Hook/context/UseContextParent';
import UseReducerHook from './Components/Hook/UseReducerHook';
import UseCallbackHook from './Components/Hook/UseCallbackHook';
import UseMemoHook from './Components/Hook/UseMemoHook';
import CRUD from './Components/API/CRUD';
import CustomHookDisp from './Components/Hook/Custom Hook/customHookDisp';
import CounterApp from './Components/Redux/CounterApp';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo adipisci possimus aperiam ad, explicabo natus tempora quos rerum? Alias ea quidem assumenda repudiandae hic aliquid nobis, quo ex deleniti eius!</p> */}
      {/* <Log /> */}
      {/* <Bank></Bank> */}
      <div>
        <Link to={'/home'}>Home</Link>  
        <Link to={'/contact'}>Contact</Link>  
        <Link to={'/bank'}>Bank</Link>  
        <Link to={'/about'}>About</Link>  
      </div>      
      <div>
        <Routes>
          <Route path="home" Component={Home} />
          <Route path="bank" element={<Bank/>} />
          <Route path="Contact" Component={Contact} />
          <Route path="About" Component={About} />
          <Route path="prop" Component={ParentProp} />
          <Route path="usestate" Component={UseStateHook} />
          <Route path="useref" Component={UseRefHook} />
          <Route path="usereducer" Component={UseReducerHook} />
          <Route path="usecallback" Component={UseCallbackHook} />
          <Route path="usememo" Component={UseMemoHook} />
          <Route path="usecustom" Component={CustomHookDisp} />
          <Route path="useeffect" Component={UseEffectHook} />
          <Route path="usecontext" Component={UseContextParent} />
          <Route path="crud" Component={CRUD} />
          <Route path="useredux" Component={CounterApp} />
        </Routes>
      </div>
        
        {/* Props */}
        {/* <ParentProp /> */}

        {/* Hooks */}
        {/* <UseStateHook /> */}
        {/* <UseRefHook /> */}
        {/* <UseEffectHook /> */}
        {/* <UseContextParent /> */}
        {/* <UseReducerHook /> */}
        {/* <UseCallbackHook /> */}
        {/* <UseMemoHook /> */}

        {/* Axios */}
        {/* <CRUD /> */}
        {/* <CustomHookDisp /> */}

        {/* Redux Counter App */}
        {/* <CounterApp /> */}
    </div>
  );
}


export default App;
