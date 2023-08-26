import { ethers } from 'ethers';
import { useState } from 'react';
import './App.css';

function App() {
  const abi = require('./abi.json')
  const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"
  const [walletAddress, setWalletAddress] = useState("")

  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [contract, setContract] = useState(null)

  const requestAccount = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log(accounts)
      setWalletAddress(accounts)
    } catch (err) {
      console.log("cuu")
      alert("Need to install MetaMask!")
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      updateEthers()
    } else {
      alert("Need to install MetaMask!")
    }
  }

  const updateEthers = async () => {
    const tempProvider = new ethers.BrowserProvider('ws://127.0.0.1:9944')
    setProvider(tempProvider)
    const tempSigner = await tempProvider.getSigner()
    setSigner(tempSigner)
    console.log(tempProvider, tempSigner)
    const contract = new ethers.Contract(contractAddress, abi, tempSigner)
    setContract(contract)
  }

  const getVal = async () => {
    const val = await contract.dataOf('019')
    console.log(val)

  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>Connect Wallet</button>
        <p>{walletAddress}</p>
        <button onClick={getVal}>Get Value</button>
      </header>
    </div>
  );
}

export default App;
