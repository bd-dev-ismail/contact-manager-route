import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import './ContactList.css';
const ContactList = ({ conatactList, removeContact, removeAll }) => {
  return (
    <>
      <div className="w-[28rem] mx-auto my-5 ">
        {conatactList.length < 1 && (
          <p className="bg-base-300 p-4 rounded text-2xl text-center ">
            No Contact Add yet
          </p>
        )}
        {conatactList.map((contact) => (
          <ContactCard
            contact={contact}
            removeContact={removeContact}
          ></ContactCard>
        ))}
        <div className="text-center">
          <button className="btn btn-error my-6" onClick={() => removeAll()}>
            {" "}
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactList;