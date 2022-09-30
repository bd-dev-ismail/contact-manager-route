
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import Header from './components/Header/Header';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
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
    toast("Wow so easy!");
  }
  const removeAll = () =>{
    setConatactList([]);
    Swal.fire("Hurray!", "You Delete All Contact!", "success");
  }
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(conatactList));
  }, [conatactList]);
  return (
    <div className="container mx-auto" style={{ width: "100%" }}>
      <Header />
      <AddContact
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        handalSubmit={handalSubmit}
      />
      <ContactList
        conatactList={conatactList}
        removeContact={removeContact}
        removeAll={removeAll}
        ToastContainer={ToastContainer}
      ></ContactList>
    </div>
  );
}

export default App;
