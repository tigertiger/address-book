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

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

function Contact(firstName, lastName, phoneNumber, emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Contact.prototype.updateName = function(input) {
  this.firstName = input;
  return this.firstName;
}

Contact.prototype.updateAll = function(firstName, lastName, phoneNumber, emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  }

let addressBook = new AddressBook();
let contact = new Contact("Ada", "Lovelace", "503-555-1111", "ada@geocities.com");
let contact2 = new Contact("Grace", "Hopper", "503-555-0199", "grace@aol.com");
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook.deleteContact(1);
addressBook.contacts;

contact2.updateName("Lisa");

