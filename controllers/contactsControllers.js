const Contact = require("../models/contact");

const getAll = async(req, res) => {
    const contacts = await Contact.find({});
    res.json({contacts});
}

const getContactById = async(req, res) => {
    const {id} = req.params.id
    const contact = await Contact.findById(id);

    if(!contact) {
        return res.status(400). json({
            status: `failure, no contacts with id '${id}' found`
        })
    }

    res.json({contact, status: "success"});
}

const addContact = async(req, res) => {
    const {name, email, phone} = req.body;

    const contact = new Contact({name, email, phone});
    await contact.save()

    // await req.db.Contacts.insert(
    //     {name, email}
    // )
    res.json({status: "success"});
}

const changeContact = async(req, res) => {
    const {id} = req.params;
    const {name, email, phone} = req.body;

    await Contact.findByIdAndUpdate(id, 
        {$set: {name, email, phone}}
    );

    res.json({status: "success"});
}

const deleteContact = async(req, res) => {
    const {id} = req.params;
    await Contact.findByIdAndRemove(id)
    res.json({status: "success"});
}

module.exports = {
    getAll,
    getContactById,
    addContact,
    changeContact,
    deleteContact
}