import { useEffect, useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from "./Components/HomeScreen";
import AboutScreen from "./Components/AboutScreen";
import ProfileScreen from "./Components/ProfileScreen";
import RegistrationScreen from "./Components/RegistrationScreen";
import LayoutRoute from './Components/LayoutRoute';
import PrivateLayoutRoute from './Components/PrivateLayoutRoute';
import LoginScreen from './Components/LoginScreen';
import ContactScreen from './Components/ContactScreen';
import Docs from './Components/Docs';
import ContentLayoutRoute from './Components/ContentLayoutRoute';
import DocsMain from './Components/DocsMain';


import {UserContext} from './UserContext';

function App() {

  const { jsonwebtoken, updateUser } = useContext(UserContext);

  useEffect(
    function() {
      // fetch function
      fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`,{
        "method": 'POST',
        "headers": {
            //"Content-Type": "multipart/form-data"
            'Authorization' : `Bearer ${localStorage.getItem('jsonwebtoken')}`,
        }
      })
      // Convert the JSON string to an object
      .then(
          (response) => response.json()
      )

      // If Promise was successful
      .then(
          (response) => {              
              // Turn off preloader and reveal success message
              updateUser(
                {
                  "firstName": response.message.firstName,
                  "lastName": response.message.lastName,
                  "email": response.message.email,
                  "password": response.message.password,
                  "avatar": response.message.avatar,
                  "phone": response.message.phone,
                  "jsonwebtoken": jsonwebtoken || response.message.jsonwebtoken
                }
              )
          }
      )

      // If Promise was not fulfilled
      .catch(
          (e) => {
              console.log({e: e})
              // Turn off preloader and reveal error message
          }
      )
    }, []
  )

  return (
      <BrowserRouter>
          <Switch>
            <LayoutRoute path="/" component={HomeScreen} exact={true} />
            <LayoutRoute path="/about" component={AboutScreen} exact={true} />
            <PrivateLayoutRoute path="/profile" component={ProfileScreen} exact={true} />
            <LayoutRoute path="/registration" component={RegistrationScreen} exact={true} />
            <LayoutRoute path="/login" component={LoginScreen} exact={true} />
            <LayoutRoute path="/contact" component={ContactScreen} exact={true} />
            <ContentLayoutRoute path="/doc" component={Docs} exact={true} />
            <ContentLayoutRoute path="/docs" component={DocsMain} exact={true} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;