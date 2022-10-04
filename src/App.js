
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import Main from './layout/Main';
import Error from './components/Error/Error';
function App() {
    const getContact = () => {
      const data = localStorage.getItem("contact");
      if (data) {
        return JSON.parse(data);
      } else {
        return [];
      }
    };
  //array of object
  const [conatactList, setConatactList] = useState(getContact());
  //state of from
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  //add book
  const handalSubmit = (e)=>{
    e.preventDefault();
    let contact = {
      name,
      email
    }
   setConatactList([...conatactList, contact]);
     setName('');
     setEmail('');
  }
  //delete
  const removeContact = (email) =>{
    const updateContact = conatactList.filter(element =>{
      return element.email !== email;
      
    });
    setConatactList(updateContact);
    toast("You Remove a Item!");
  }
  const removeAll = () =>{
    setConatactList([]);
    Swal.fire("Hurray!", "You Delete All Contact!", "success");
  }
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(conatactList));
  }, [conatactList]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: (
            <AddContact
              name={name}
              email={email}
              setName={setName}
              setEmail={setEmail}
              handalSubmit={handalSubmit}
            />
          ),
        },
        {
          path: "/home",
          element: (
            <AddContact
              name={name}
              email={email}
              setName={setName}
              setEmail={setEmail}
              handalSubmit={handalSubmit}
            />
          ),
        },
        {
          path: "/contact",
          element: (
            <ContactList
              conatactList={conatactList}
              removeContact={removeContact}
              removeAll={removeAll}
              ToastContainer={ToastContainer}
            ></ContactList>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);
  return (
    <div className="container mx-auto" style={{ width: "100%" }}>
      
      {/* <AddContact
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        handalSubmit={handalSubmit}
      /> */}
      {/* <ContactList
        conatactList={conatactList}
        removeContact={removeContact}
        removeAll={removeAll}
        ToastContainer={ToastContainer}
      ></ContactList> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
