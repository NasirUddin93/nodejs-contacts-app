const contacts = require('./Contacts')



exports.gatAllContacts = (req,res) =>{
    res.json(contacts.gatAllContacts())
}

exports.createContact = (req,res)=>{
    let {name,phone,email} = req.body
        let contact = contacts.createContact({
            name,
            phone,
            email
        })
        res.json(contact)

}

exports.getContactById = (req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    let contact = contacts.getContactsById(id)
    res.json(contact)
}

exports.updateContact = (req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    let contact = contacts.updateContactById(id,{
        name,
        email,
        phone
    })
    res.json(contact)
}

exports.deleteContact = (req,res)=>{
    let {id} =req.params
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)
    res.json(contact)
}