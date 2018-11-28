import Web3 from 'web3';

//const blockchainLocal = true;
var web3 = null;

if(window.web3){
	web3 = new Web3(window.web3.currentProvider);
}else{
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

export default web3;