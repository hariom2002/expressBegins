const express = require('express');
const router = express.Router();
const members = require('../../members');

// Get all members
router.get('/', (req, res)=> res.json(members)); 

// Get single member
router.get('/:id', (req,res) =>{
    const found = members.some((members => members.id === parseInt(req.params.id)));

    if(found){
        res.json(members.filter(members => members.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg: 'Member not found'});
    }    
    
        
})


module.exports = router;