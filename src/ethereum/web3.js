import Web3 from 'web3'

const config = {
  rpcURL: 'http://localhost:8545',
  wsURL: 'ws://localhost:8546',
}

export const web3 = new Web3(new Web3.providers.HttpProvider(config.rpcURL))
export const web3socket = new Web3(new Web3.providers.WebsocketProvider(config.wsURL))
