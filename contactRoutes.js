const router = require('express').Router()

const { 
    gatAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
 } = require('./contactController')


router.get('/',gatAllContacts)
router.post('/',createContact)
router.get('/:id',getContactById)
router.put('/:id',updateContact)
router.delete('/:id',deleteContact)

module.exports = router