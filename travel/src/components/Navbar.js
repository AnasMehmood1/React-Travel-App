import {Component} from 'react';
import Menu from './menuItem'
import "./Navbarstyle.css"
import {Link} from "react-router-dom"
class Navbar extends Component {

  state = { Clicked: false }; // Initialize the state
  handleClick = ()=>{
    this.setState({ Clicked: !this.state.Clicked})
  }


 

  render() {
    return (
      <>
      <nav className="navbarItems">
      <h1 className="logo">Travel App</h1>
      <div className="menu-icon " onClick={this.handleClick} >
      <i className={this.state.Clicked ? "fas fa-times" : "fas fa-bars"}></i>
      
      </div>
      <ul className= {this.state.Clicked ? "nav_menu active" :"nav_menu"}>
          {Menu.map((item,index)=>{
              return(
                  <li key={index}>
                  <Link className={item.cName} to={item.url}> <i className= {item.icon}></i>{item.title}</Link>
                </li>
              )
          })}
         <button>Sign Up</button>
      </ul>
      </nav>
      </>
    );
  }
}
export default Navbar
