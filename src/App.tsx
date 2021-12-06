import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as nearAPI from "near-api-js";
import './App.scss';
import { Routes, Route, NavLink, useNavigate, Link } from "react-router-dom";
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import HeaderBg from "./components/layouts/HeaderBg";

const { connect } = nearAPI;
const App = () => {
  const account = {
    available: "0",
    staked: "0",
    stateStaked: "",
    total: "",
  }
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  const [myAccount, setAccount] = useState(account)

  const todoTaskRef: any = useRef(''); 

  const clickAdd = ()=> {
    
    /* const task = todoTaskRef.current.value;
    const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
    const config = {
      networkId: "testnet",
      keyStore,
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };
    const near = await connect(config);
    const account = await near.account( task ? task : "example-account.testnet");
    const result = await account.getAccountBalance();
    
    setAccount(result);*/

  }
  
  return (
    <div className="App">
      <HeaderBg/>
      <section className="App-header">
        <ul>
          <li>
            <Link to='/login'>
              Login
            </Link> 
          </li>
          <li>

            <Link to='/'>
              main
            </Link> 
          </li>
        </ul>
        <button onClick={clickAdd}> try</button>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>        
      </section>
    </div>
  );
};

export default App;
