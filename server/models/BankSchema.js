// create ref to base Schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create Model Schema
let BankSchema = new Schema (
    {
        accountNumber : Number,
        accountType : String,
        accountName : String,
        accountBalance : Number,
        
    }, {timestamps:true}
)

 
module.exports = mongoose.model('Bank Accounts',BankSchema);