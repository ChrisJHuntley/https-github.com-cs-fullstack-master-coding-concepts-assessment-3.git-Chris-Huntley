import React, { Component } from 'react'
import { BrowserRouter as Link, } from 'react-router-dom';

class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BankArray: []

        }
    }
    componentDidMount = () => {
        this.loadData();
    }
    loadData = async () => {
        const response = await fetch('/api');
        const json = await response.json();
        this.setState({ BankArray: json })
    }
    render() {
        return (
            <div className='list'>
                <h1>Listing of all Accounts</h1>
                {this.state.BankArray.map((bank) => {
                    return (
                        <div key={bank._id}>
                            <Link to={`/account/${bank.accountNumber}`}>Account number:{bank.accountNumber}</Link>
                            <p>Type:{bank.accountType}</p>
                            <p>Name:{bank.accountName}</p>
                            <p>Balace: {bank.accountBalance}</p>

                        </div>
                    )
                })
            }

            </div>

        )
    }
}
    
    


export default Account



