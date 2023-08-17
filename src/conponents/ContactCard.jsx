import React from "react";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddandUpdate from "./AddandUpdate";
import useDisclouse from "./hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({contact}) =>{

  const {isOpen,onOpen, onClose} =useDisclouse();

const deleteContact = async (id) =>{
 try {
    await deleteDoc(doc(db, "contacts", id))
    toast.success("Contact deleted successfully")
 } catch (error) {
  console.log(error)
 }
}



    return (
       <>
        <div>
        <div key={contact.id} className="flex justify-between items-center bg-[#1B6B93] rounded-md p-2">
        <div className="flex gap-2 ">
        <FaUser className="text-3xl text-[#E1ECC8]  mt-4"/>
        <div className="text-white">
          <h2 className="text-md">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
          <p className="text-sm">{contact.age}</p>
        </div>
        </div>
        <div className="flex gap-2">
        <FaUserEdit onClick={onOpen} className="text-white text-2xl cursor-pointer"/>
        <MdDelete onClick={()=>deleteContact(contact.id) } className="text-white text-2xl cursor-pointer"/>
        </div>
        
      </div>
        </div>
        <AddandUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
       </>
    )
}

export default ContactCard;