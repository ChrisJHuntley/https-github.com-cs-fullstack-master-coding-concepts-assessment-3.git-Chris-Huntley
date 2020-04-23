import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class AccountMoney extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountNumber: 0,
            accountBalance: 0,
            BankArray: []

        }
    }
    handleChange = (event) => {
        if (event.target.name === "accountNumber") {
            this.setState({ accountNumber: event.target.value });
        } else if (event.target.name === "accountBalance") {
            this.setState({ accountBalance: event.target.value });
        }
    }
    handleSubmission=async(event)=>{
        event.preventDefault();
      
        let formsubmission={
            accountNumber:this.state.accountNumber,
            
            accountBalance:this.state.accountBalance+100
            
        }
        let response= await fetch('/api', {
            method:"UPDATE",
            headers:{'Accept':'application/json',
                   'Content-Type':'application/json' },
                   body: JSON.stringify(formsubmission)
        });
        let json = await response.json()
        console.log(json)
    }
    loadData = async () => {
        const response = await fetch('/api');
        const json = await response.json();
        this.setstate({ BankArray: json })
    }

    render() {
        return (
            <div>
                <h1>Deposite or Withdraw</h1>
                <form action="">
                    <div>
                        <label htmlFor="accountNumber">Number</label>
                        <input type="number" name='accountNumber' value={this.state.accountNumber} onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="accountBalance">Balance</label>
                        <input type="number" name='accountBalance' value={this.state.accountBalance} onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleSubmission}>Submit</button>
                    <button onClick={this.handleSubmission}>Deposite $100</button>
                    <button>Withdraw $100</button>
                </form>


            </div>
        )
    }

}
export default AccountMoney



