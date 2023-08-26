import { ethers } from 'ethers';
import { useState } from 'react';
import { BrowserProvider } from "ethers";
import './App.css';

function App() {
  let signer = null
  const [walletAddress, setWalletAddress] = useState("")

  const requestAccount = async () => {
    console.log("request account")

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setWalletAddress(accounts)
    } catch (err) {
      console.log(err)
    }

    if (window.ethereum) {
      console.log("detected ethereum")
    } else {
      console.log("MetaMask not installed")
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.BrowserProvider(window.ethereum)
      signer = await provider.getSigner();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>Connect Wallet</button>
        <p>{walletAddress}</p>
      </header>
    </div>
  );
}

export default App;
