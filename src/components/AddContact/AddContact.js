import React from 'react';
import './AddContact.css';
const AddContact = () => {
    return (
      <div>
        <h2 className="text-3xl py-4">Add To Contact</h2>
        <form action="#">
          <div>
            <label htmlFor="name" className="text-xl font-bold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className="input my-3 input-bordered input-primary w-full"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-xl font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              required
              className="input my-3 input-bordered input-primary w-full"
            />
          </div>
          <div className='text-center my-3'>
            <button className="btn btn-primary">Add To Contact</button>
          </div>
        </form>
      </div>
    );
};

export default AddContact;