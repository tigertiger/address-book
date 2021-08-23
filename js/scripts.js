function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Contact(firstName, lastName, phoneNumber, emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};


let addressBook = new AddressBook();
let contact = new Contact("Ada", "Lovelace", "503-555-1111", "ada@geocities.com");
let contact2 = new Contact("Grace", "Hopper", "503-555-0199", "grace@aol.com");
addressBook.addContact(contact);
addressBook.addContact(contact2);


