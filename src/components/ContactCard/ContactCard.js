import React from 'react';

const ContactCard = ({ contact, removeContact }) => {
  const { name, email } = contact;
  return (
    <>
      <div className="p-4 rounded bg-base-300 flex justify-between items-center my-4">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">AA</span>
          </div>
        </div>
        <div className="text-xl">
          <h3>Name: {name}</h3>
          <p>Email: {email}</p>
        </div>
        <div
          className="btn btn-sm btn-primary"
          onClick={() => removeContact(contact.email)}
        >
          Remove
        </div>
      </div>
      
    </>
  );
};

export default ContactCard;