import { useState } from 'react';
import './App.css';
import { pickDecoded, pickError } from 'useink/utils';
import { useWallet, useAllWallets, useContract, useCall, useDryRun, useTx, useTxPaymentInfo } from 'useink';
import { decodeCallResult, call, decodeError } from 'useink/core';
import abi from './abi.json'


const CONTRACT_ADDRESS = '5FJ473DqeoMC4XYb2BkXST2zFWtJHxduZPVyPfaSnscPj8by'

function App() {
  const { account, connect, disconnect } = useWallet()
  const wallets = useAllWallets();

  const contract = useContract(CONTRACT_ADDRESS, abi)

  const dataOf = useCall(contract, "dataOf")
  const id = 0

  console.log(dataOf)

  
  
  if (!account) {
    return (
      <ul>
        {wallets.map((w) => (
          <li key={w.title}>
            {w.installed ? (
              <button onClick={() => connect(w.extensionName)}>
                <img src={w.logo.src} alt={w.logo.alt} />
                Connect to {w.title}
              </button>
            ) : (
              <a href={w.installUrl}>
                <img src={w.logo.src} alt={w.logo.alt} />
                Install {w.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <p>You are connected as {account?.name && account?.address}</p>

      <button onClick={disconnect}>
        Disonnect Wallet
      </button>

      <button onClick={() => dataOf.send([id])} disabled={dataOf.isSubmitting}>
        Get Result
      </button> 
      <p>{pickDecoded(dataOf.result) || '--'}</p>
    </>
  )
}

export default App;
