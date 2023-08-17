import React, { useState } from 'react'
import ModelForm from './ModelForm'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';


import * as Yup  from 'yup';

const contactschemaValidations = Yup.object().shape({
  name:Yup.string().required("Name is required"),
  email:Yup.string("Invalid Email").required("Email is required"),
  age:Yup.number().required("Age is required"),
})



const AddandUpdate = ({isOpen, onClose, isUpdate, contact}) => {
const AddContact = async (contact)=>{
    try {
        
        const contactRef = collection(db, "contacts")
        await addDoc(contactRef, contact);
        toast.success("Contact Added Successfully")
        onClose()

    } catch (error) {
        console.log(error)
    }
}

const UpdateContact = async (contact, id)=>{
    try {
        
        const contactRef = doc(db, "contacts", id)
        await updateDoc(contactRef, contact);
        onClose()
        toast.success("Contact Updated Successfully")

    } catch (error) {
        console.log(error)
    }
}




  return (
    <div>
       <ModelForm isOpen={isOpen} onClose={onClose}>
        <Formik validationSchema={contactschemaValidations}
        initialValues={isUpdate ?{
            name:contact.name,
            email:contact.email,
            age:contact.age,
        }
        :
        {
            name:"",
            email:"",
            age:"",
        }
    }
        onSubmit={(values)=>{
            // console.log(values)
            isUpdate ? UpdateContact(values, contact.id) : 
            AddContact(values);
        }}
        >
            <Form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Name</label>
                <Field type="text" name="name" className="border h-10" />
                <div className='text-red-800 text-sm'>
                 <ErrorMessage name="name"/>
                </div>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email</label>
                <Field name="email" className="border h-10" />
                <div className='text-red-800 text-sm'>
                 <ErrorMessage name="email"/>
                </div>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor='age'>Age</label>
                <Field type="number" name="age" className="border h-10" />
                <div className='text-red-800 text-sm'>
                <ErrorMessage name="age"/>
                </div>
                </div>

                <button className='rounded-lg px-3 py-2 bg-[#1B6B93] self-end mt-3 text-white'>
                    {
                        isUpdate ? "Update" : "Add"
                    } Contact</button>

            </Form>
        </Formik>
        </ModelForm>
    </div>
  )
}

export default AddandUpdate;
