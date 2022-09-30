import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import './ContactList.css';
const ContactList = ({ conatactList, removeContact }) => {
  return (
    <>
      <div className="w-[28rem] mx-auto">
        {conatactList.length < 1 && <p>No Contact Add yet</p>}
        {conatactList.map((contact) => (
          <ContactCard
            contact={contact}
            removeContact={removeContact}
          ></ContactCard>
        ))}
      </div>
    </>
  );
};

export default ContactList;