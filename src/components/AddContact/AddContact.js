import React from 'react';
import { Link } from 'react-router-dom';
import './AddContact.css';
const AddContact = ({ name, email, setEmail, setName, handalSubmit }) => {
  return (
    <div className="ml-[70px] lg:m-0">
      <div className='text-error text-xl mt-3'>
        <Link to="/home" className='mr-5'>Home</Link>
        <Link to="/contact">Contact</Link>
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
          <Link to="/contact">
            <button className="btn btn-primary">Add To Contact</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;