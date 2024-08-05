//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) => {
    res.status(200).send("Get all contacts")
}

//@desc Create a new contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) => {
    res.status(201).send("Create Contact")
}

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res) => {
    res.status(200).send(`Update id ${req.params.id}` )
}

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) => {
    res.status(200).send(`Delete id ${req.params.id}`)
}

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) => {
    res.status(200).send(`get id ${req.params.id}`)
}
module.exports = { 
    getContacts,createContact, updateContact, deleteContact, getContact}