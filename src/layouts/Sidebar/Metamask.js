import React, { Component } from 'react';

import { ethers } from "ethers";

class Metamask extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    const block = await provider.getBlockNumber();

    provider.on("block", (block) => {
      this.setState({ block })
    })

    this.setState({ selectedAddress: accounts[0], balance: balanceInEther, block })
  }

  renderMetamask() {
    if (!this.state.selectedAddress) {
      return (
        <button className='btn' style={{marginLeft:"100px", marginTop:"40px"}} onClick={() => this.connectToMetamask()}>Show My Wallet</button>
      )
    } else {
      return (
        <div style={{marginLeft:"100px", marginTop:"30px"}}>
          <p>My Address : {this.state.selectedAddress}</p>
          <p>Your SCI Balance is: {this.state.balance}</p>
          <p>Current SCI Block is: {this.state.block}</p>
          
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        {this.renderMetamask()}
      </div>
    )
  }
}

export default Metamask;