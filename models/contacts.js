// const fs = require("fs/promises");
// const path = require("path");
// const contactsPath = path.resolve("models/contacts.json");
// const nanoid = require("nanoid");

// const listContacts = async () => {
//   try {
//     const data = await fs.readFile(contactsPath);
//     return JSON.parse(data);
//   } catch (error) {
//     return console.error(error.message);
//   }
// };

// const getContactById = async (contactId) => {
//   try {
//     const data = await fs.readFile(contactsPath);
//     const contact = JSON.parse(data).find(
//       (contact) => contact.id.toString() === contactId.toString()
//     );
//     if (contact) {
//       return contact;
//     }
//     return null;
//   } catch (error) {
//     return console.error(error.message);
//   }
// };

// const removeContact = async (contactId) => {
//   try {
//     const data = await fs.readFile(contactsPath);
//     const contact = await JSON.parse(data).find(
//       (contact) => contact.id.toString() === contactId.toString()
//     );
//     if (contact) {
//       const filtered = JSON.parse(data).filter(
//         (contact) => contact.id.toString() !== contactId.toString()
//       );
//       await fs.writeFile(contactsPath, JSON.stringify(filtered, null, 2));
//       return contact;
//     }
//     return null;
//   } catch (error) {
//     return console.error(error.message);
//   }
// };

// const addContact = async (body) => {
//   const { name, email, phone } = body;
//   try {
//     const data = await fs.readFile(contactsPath);
//     const parsed = JSON.parse(data);
    
//     if (parsed.find((contact) => contact.email === email)) {
//       return `Contact with email ${email} is already in the contact list`;
//     }
 
//     const contact = { id: nanoid(), name, email, phone };
//     parsed.push(contact);
//     fs.writeFile(contactsPath, JSON.stringify(parsed));
//     return { contact };
//   } catch (error) {
//     return console.error(error.message);
//   }
// };

// const updateContact = async (contactId, body) => {
//   try {
//     const data = await fs.readFile(contactsPath);
//     const contact = await JSON.parse(data).find(
//       (contact) => contact.id.toString() === contactId.toString()
//     );
    
//     if (contact) {
//       const { name, email, phone } = body;

//       const filtered = JSON.parse(data).filter(
//         (contact) => contact.id.toString() !== contactId.toString()
//       );
//       const updatedContact = {
//         id: contactId.toString(),
//         name,
//         email,
//         phone,
//       };

//       filtered.push(updatedContact);
  
//       await fs.writeFile(contactsPath, JSON.stringify(filtered, null, 2));
//       return updatedContact;
//     }
//     return null;
//   } catch (error) {
//     return console.error(error.message);
//   }
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };

