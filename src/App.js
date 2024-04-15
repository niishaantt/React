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

function App() {

  var name = "Persistent"

  var user = {userName:"Nishant", userId:"5678", city:"Mumbai Sub", address:"abcdef"}
  return (

    <div>

      <ProductListComp></ProductListComp>

      {/* <LifeCycleMethods></LifeCycleMethods> */}

      {/* <ClassState></ClassState> */}

      {/* <Classprops fname="Nishant" lname="Yadav" city="Pune"></Classprops> */}

      {/* <UseEffectExample></UseEffectExample> */}
    {/* <MessageComponent></MessageComponent>
    <MessageComponent></MessageComponent>
    <MessageComponent ></MessageComponent> */}
    </div>
    

    //<Profilecomp1 user={user}></Profilecomp1>

    //<ProfileComp userName="Nishant"  userId="1234" city="Mumbai" address= "abc"></ProfileComp>

    //<BootstrapStyling></BootstrapStyling>
    //<StyleComp></StyleComp>
    // <div>
    //   <h1>Welcome to {name}</h1>
    //     {/*<HelloWorldFunction></HelloWorldFunction>
    //     <HelloWorldClass></HelloWorldClass>*/}
    // </div>
  );
}

export default App;
