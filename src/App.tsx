import * as React from "react";
import { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import * as nearAPI from "near-api-js";


const { connect } = nearAPI;

interface AccountType {
  available: string;
  staked: string;
  stateStaked: string;
  total: string;
}
class Account {
  available = "0";
  staked = "0";
  stateStaked = "";
  total = "";

  getValues() {
    return {
      available : this.available,
      staked : this.staked,
      stateStaked : this.stateStaked,
      total : this.total
    }
  }
}

const App = () => {
  const account = {
    available: "0",
    staked: "0",
    stateStaked: "",
    total: "",
  }
  const [myAccount, setAccount] = useState(account)

  const todoTaskRef: any = useRef(''); 

  const clickAdd = async ()=> {
    const task = todoTaskRef.current.value;



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

   /* const response = await near.connection.provider.query({
      request_type: "view_account",
      finality: "final",
      account_id: "test404771.testnet",
    });*/
    const account = await near.account( task ? task : "example-account.testnet");
    const result = await account.getAccountBalance();
    
    setAccount(result);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.png" className="App-logo" alt="logo" />
        <p>
          POC NarWallet + React.
        </p>
        <input ref={todoTaskRef} type="text" />
        <button onClick={ clickAdd } >Buscar cuenta</button>
         <div>
           <ul>
             <li> available: {myAccount ? myAccount.available : 'No busco aun'} </li>
             <li> staked: {myAccount ? myAccount.staked : 'No busco aun'} </li>
             <li> stateStaked: {myAccount ? myAccount.stateStaked : 'No busco aun'} </li>
             <li> total: {myAccount ? myAccount.total : 'No busco aun'} </li>

           </ul>
         </div>
      </header>
    </div>
  );
};

export default App;
