
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import Header from './components/Header/Header';

function App() {
  const conatactList = [
    {
      id: 1,
      "name": "Md Ismai Hossen",
      "email": "ismailratul7@gmail.com"
    },
    {
      id: 2,
      "name": "Nowshin Akther",
      "email": "nowrinratul@gmail.com"
    },
  ]
  return (
    <div className="container mx-auto">
      <Header />
      <AddContact />
      {conatactList.map((contact) => (
        <ContactList
         contact={contact}
         key={contact.id}
        />
      ))}
    </div>
  );
}

export default App;
