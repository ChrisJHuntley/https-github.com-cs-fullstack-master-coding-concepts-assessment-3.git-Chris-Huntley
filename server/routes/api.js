let express =require('express')
let router = express.Router();
router.use(express.json());
// Set my collection and called my schema
let BankCollection= require('../models/BankSchema')


// this will create a new account
router.post('/', (req, res)=>{
    // res.send('Posted')
BankCollection.create(req.body,(errors, results)=>{
    errors? res.send(errors): res.send(results);
})
})
// TODO this will update any givin property
router.put('/:Number/:Balance',(req, res)=>{
    // res.send(`you updated ${req.params.Number}`)
    BankCollection.findOneAndUpdate({accountNumber: req.params.Number},{accountBalance: req.params.Balance},{new: true},(errors, results)=>{
        errors? res.send(errors): res.send(results);
    })
})

router.get('/',(req, res)=>{
    // res.send(`got all`)
    console.log('getting data')
    BankCollection.find(req.body,(errors, results)=>{
        errors? res.send(errors): res.send(results);
    })
})

 module.exports=router;
