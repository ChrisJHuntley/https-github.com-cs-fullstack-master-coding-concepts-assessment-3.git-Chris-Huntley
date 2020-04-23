import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// Import all components to apply them to Router method
import AddAccountForm from './AddAccountForm'
import Account from './Account'
import AccountMoney from './AccountMoney'
class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            


        }
    }
    render() {
        return(
            <div>
                {/* Link and Route Components */}
                <h1>Appcontainer</h1>
                <Router>
                    <Link to='/add'>Add Account</Link>
                    <hr/>
                    <Link to='/account'>Existing Accounts</Link>
                    <hr/>
                    <Link to='/money'>Add Money</Link>

                    <Route path='/add'>
                        <AddAccountForm/>
                    </Route>
                    <Route path='/account'>
                        <Account/>

                    </Route>
                    <Route path='/money'>
                        <AccountMoney/>

                    </Route>
                </Router>

            </div>
        )
    }

}
export default AppContainer



