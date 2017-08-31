import React,{Component} from "react";
import NavLink from "./NavLink";

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>Holle React</h2>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/repos">Repos</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  };
}
