import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLongRightIcon,  } from "@heroicons/react/24/solid";
import ContactCard from '../ContactCard/ContactCard';
import './ContactList.css';
const ContactList = ({
  conatactList,
  removeContact,
  removeAll,
  ToastContainer,
}) => {
  return (
    <>
      <div className="text-error text-xl mt-3 flex items-center">
        <ArrowLongRightIcon className="h-12 w-12 mr-5 text-error" />
        <NavLink to="/home" className="mr-5">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "underline underline-offset-8" : undefined)}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="lg:w-[28rem] w-full mx-auto my-5 ">
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
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </>
  );
};

export default ContactList;