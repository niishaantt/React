import logo from './logo.svg';
import './App.css';
import HelloWorldClass, { HelloWorldFunction } from './ComponentTypes/comptypes';
import StyleComp from './StylingComponents/stylecomp';
import bootstrapStyling from './StylingComponents/bootstrapStyling';

import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapStyling from './StylingComponents/bootstrapStyling';
import ProfileComp from './Props/ProfileComp';
import Profilecomp1 from './Day2/props/Profilecomp1';
import MessageComponent from './Day2/State/MessageComponent';
import UseEffectExample from './Day2/State/useEffectExample';
import Classprops from './Day2/ClassComponents/Classprops';
import ClassState from './Day2/ClassComponents/ClassState';
import LifeCycleMethods from './Day2/ClassComponents/LifeCycleMethods';
import ProductListComp from './Day2/map/ProductListComp';
import PHeader from './Day3/ComponentCommunication/PHeader';
import ProductListComp1 from './Day3/ComponentCommunication/Products/ProductListComp';
import { useState } from 'react';
import HeaderComp from './Day3/ComponentCommunication/LiftingStateUp/HeaderComp';
import LoginComp from './Day3/ComponentCommunication/LiftingStateUp/LoginComp';
import ControlledComp from './Day3/ComponentCommunication/Controlled_Uncontrolled/ControlledComp';


function App() {

  let [username, setUserName] = useState("")

  var name = "Persistent"

  var user = {userName:"Nishant", userId:"5678", city:"Mumbai Sub", address:"abcdef"}
  return (

    <>
    <ControlledComp></ControlledComp>
    </>
  );
}

export default App;
