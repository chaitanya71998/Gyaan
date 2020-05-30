import React from 'react';
import {Redirect , Link} from 'react-router-dom';
import { paths } from "../../constants/paths";

const {signInForm} = paths

 class  Home extends React.Component{
 
  render(){
    
    return (
      <div>
      <nav>
          <ul>
            <li>
              <Link to ={signInForm} >SignIn Page</Link>
            </li>
            <li>
              <Link to ="/homeScreen" >Dashboard</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
}
export default Home;