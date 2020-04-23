import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class AddAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountNumber: 0,
            accountType: '',
            accountName: '',
            accountBalance: 0,
            BankArray: []

        }
    }
    // Set up my reaction to my onClick
    handleChange = (event) => {
        if (event.target.name === "accountNumber") {
            this.setState({ accountNumber: event.target.value });
        } else if (event.target.name === "accountType") {
            this.setState({ accountType: event.target.value });
        } else if (event.target.name === "accountName") {
            this.setState({ accountName: event.target.value });
        } else if (event.target.name === "accountBalance") {
            this.setState({ accountBalance: event.target.value });
        }
    }
    handleSubmission=async(event)=>{
        // this is so that the form will not refresh
        event.preventDefault();
      
        let formsubmission={
            accountNumber:this.state.accountNumber,
            accountType:this.state.accountType,
            accountName:this.state.accountName,
            accountBalance:this.state.accountBalance
            
        }
        
        let response= await fetch('/api', {
            method:"POST",
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
            <div className='add'>
                <h1>ADDING ACCOUNT</h1>
                <form action="">
                    <div>
                        <label htmlFor="accountNumber">Number</label>
                        <input type="number" name='accountNumber' value={this.state.accountNumber} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="accountType">Type</label>
                        <input type="text" name='accountType' value={this.state.accountType} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="accountName">Name</label>
                        <input type="text" name='accountName' value={this.state.accountName} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="accountBalance">Balance</label>
                        <input type="number" name='accountBalance' value={this.state.accountBalance} onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleSubmission}>Submit</button>
                </form>


            </div>
        )
    }

}
export default AddAccount



