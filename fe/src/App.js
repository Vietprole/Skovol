import { ethers } from 'ethers';
import { useState } from 'react';
import './App.css';
import { pickDecoded, pickError } from 'useink/utils';
import { useWallet, useAllWallets, useContract, useCall, useDryRun, useTx, useTxPaymentInfo } from 'useink';
import { decodeCallResult, call, decodeError } from 'useink/core';
import abi from './abi.json'


const CONTRACT_ADDRESS = '5DFbCKQn4mweAynua9zFFj93jiYPhGf29miq2NJVoKoQk4Tb'

function App() {
  const { account, connect, disconnect } = useWallet()
  const wallets = useAllWallets();

  const contract = useContract(CONTRACT_ADDRESS, abi)

  const get = useCall(contract, 'transferFrom');
  
  const args = ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", account?.address, 25]
  const buy = useTx(contract, 'transferFrom')

  const test = useTxPaymentInfo(contract, 'transferFrom')

  const getDataOf = async () => {
    try {
    const res = buy.signAndSend(args, {
      gasLimit: {
        refTime: 4436539380,
        proofSize: 52523,
      },
      storageDepositLimit: 10000,
      value: null

    })
    console.log(res)
    //console.log(pickDecoded(get), get)
    } catch (err) {
      console.log(err)
    }
  }

  
  
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

      <button onClick={() => test.send(args)} disabled={test.isSubmitting}>
      {test.result?.partialFee ? (
          `Gas price: ${test.result?.partialFee.toString()}`
        ) : '--'}
    </button>
      

      

      <button disabled={get.isSubmitting} onClick={getDataOf}>
        Get Result
      </button>
    </>
  )
}

export default App;
