import React from 'react';
import './ContactList.css';
const ContactList = ({contact}) => {
    const {name, email} = contact;
    return (
      <div className="w-96 mx-auto">
        <div className="border-4">
          <h3>{name}</h3>
          <p>{email}</p>
          <div className="btn btn-sm">Delete</div>
        </div>
        <i class="fa-solid fa-trash-can-xmark"></i>
      </div>
    );
};

export default ContactList;