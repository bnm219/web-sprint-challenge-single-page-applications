import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import PizzaForm from './PizzaForm';
import * as yup from 'yup';
import axios from 'axios'
import formSchema from './formSchema'


//initial State
const initalFormValues = {
  //text input
  name: '',
  email: '',
  password: '',
  //checkbox
  termsOfService: false,
}
const initialFormErrors = {
  name:'',
  email:'',
  password: ''
}

const initialUsers = []
const initalDisabled = false

const App = () => {
   //states
   const [users, setUsers] = useState(initialUsers);
   const [formValues, setFormValues] = useState(initalFormValues);
   const [formErrors, setFormErrors] = useState(initialFormErrors);
   const [disabled, setDisabled] = useState(initalDisabled);
 
   //helper functions
   const getUsers = () =>{
     axios.get(`https://reqres.in/api/users`)
     .then(res => setUsers(res.data.data))
     .catch(err => console.log('GET Error: ', err))
   }
 
   const postNewUser = newUser =>{
     axios.post(`https://reqres.in/api/users`, newUser)
     .then(res =>{
       setUsers([res.data, ...users])
     })
     .catch(err =>{
       console.log('POST Error: ', err)
     })
   }
 
 
   //event handlers
   const inputChange = (name, value) =>{
     yup.reach(formSchema, name)
       .validate(value)
       .then(() =>{
         //happy path
         setFormErrors({...formErrors, [name]:''})
       })
       .catch(err =>{
         //sad path
         setFormErrors({...formErrors, [name]: err.errors[0]})
       })
     setFormValues({...formValues, [name]: value})
   }
 
   const formSubmit = () =>{
     const newUser = {
       //text input
       name: formValues.name.trim(),
       email: formValues.email.trim(),
       password: formValues.password.trim(),
       //checkbox
       termsOfService: formValues.termsOfService //bool
     }
     postNewUser(newUser);
   }
 
   //side effects
   useEffect(() =>{
     getUsers()
   }, []);
 
   useEffect(() => {
     formSchema.isValid(formValues)
     .then(valid => setDisabled(!valid))
   }, [formValues]);
  return (
    <div>
      <h1>Lambda Eats</h1>
      <div>
      <Link to='/'>Home</Link>
      </div>
      <div>
      <Link to = '/pizza-form'>Order Pizza</Link>
      </div>

      <Switch>
        <Route path = '/pizza-form'>
          <PizzaForm 
          values = {formValues}
          change = {inputChange}
          submit = {formSubmit}
          disabled = {disabled}
          errors = {formErrors}
          />
        </Route>
        <Route exact path = '/'/>
      </Switch>
    </div>
  )
};
export default App;
