import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink,  } from 'react-router-dom';
import './AddContact.css';
const AddContact = ({ name, email, setEmail, setName, handalSubmit }) => {
  
  return (
    <div className="ml-[70px] lg:m-0">
      <div className="text-error text-xl mt-3 flex items-center">
        <ArrowLongRightIcon className="h-12 w-12 mr-5 text-error" />
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : undefined
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink className="ml-5" to="/contact">Contact</NavLink>
      </div>
      <h2 className="text-3xl py-4">Add To Contact</h2>
      <form action="#" onSubmit={handalSubmit}>
        <div>
          <label htmlFor="name" className="text-xl font-bold">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input my-3 input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-xl font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input my-3 input-bordered input-primary w-full"
          />
        </div>
        <div className="text-center my-3">
          <button className="btn btn-primary">Add To Contact</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;