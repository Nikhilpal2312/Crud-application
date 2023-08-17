import React, { useEffect, useState } from "react";
import Navbar from "./conponents/Navbar";
import { BiSearch } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { db } from "./config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import ContactCard from "./conponents/ContactCard";
import AddandUpdate from "./conponents/AddandUpdate";
import useDisclouse from "./conponents/hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./conponents/NotFound";



const App = () => {


  const [contacts, setContact] = useState([]);
  const {isOpen,onOpen, onClose} =useDisclouse();


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef,(snapshot) =>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactLists);
          return contactLists;
        })



        
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const fillterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) =>{
    const contactLists = snapshot.docs.map((doc) =>{
      return{
        id: doc.id,
        ...doc.data(),
      };
    });

    const filteredContacts = contactLists.filter((contact)=>
    contact.name.toLowerCase().includes(value.toLowerCase())
    );

    setContact(filteredContacts);
    return filteredContacts;
  })
}

  return (
   <>
    <div className="mx-auto max-w-[370px] px-4 ">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex flex-grow relative items-center">
          <BiSearch className="text-2xl text-white absolute ml-1" />
          <input onChange={fillterContacts}
            type="text"
            className=" pl-9 h-10 rounded-md flex-grow bg-transparent border text-white"
          />
        </div>
        <AiFillPlusCircle onClick={onOpen} className="text-white text-4xl cursor-pointer" />
      </div>
      <div className="mt-4 flex flex-col gap-3">

    {contacts.length <= 0 ? <NotFound/> :
      contacts.map((contact) => (
       <ContactCard key={contact.id} contact ={contact}/>
      ))}

      </div>
    </div>

   <AddandUpdate onClose={onClose} isOpen={isOpen}/>
   <ToastContainer position="bottom-center"/>
   </>
  );
};

export default App;
