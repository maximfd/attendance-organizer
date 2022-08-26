import React from 'react';
import './Navbar.css';
import * as firebase from 'firebase';
import studentImg from './user.svg';

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        students: []
      };
      
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('students');
        console.log(itemsRef);
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
                id: item,
                email: items[item].email,
                userName: items[item].name
            });
            console.log(item);
            console.log(newState);
          }
          this.setState({
            students: newState
          });
          console.log(items);
        });
      }

    render (){
    return(
        <nav className='navbar'>
            <div className='logo'>
              <h1>
                <span className="logo-text-yellow">я</span>
                <span className="logo-text">здесь</span>
              </h1>
            </div>
            <div className="menu-items">
            {/* <div className='profile'>Профиль</div> */}
            
            <div className="dropdown">
              <div className="dropbtn">
                <img src="https://img.icons8.com/windows/32/000000/user-male-circle.png" alt=''/>
              </div>
              <div className="dropdown-content">
                <div className="profile-info"></div>
                <button className="btnLogout" onClick={this.props.logout}>Выйти</button>
              </div>
            </div>
            
           
            {/* <div className="header"></div> */}
                <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
                <div id="sidebarMenu">
                  <h2 className="side-header">Группа МЭБ-191</h2>
                    <ul className="sidebarMenuInner">
                        {this.state.students.map((item) => {
                            return (
                            <li key={item.id}>
                              {/* <img className='studentImg' src={studentImg} alt='' /> */}
                              <p>{item.userName}</p>
                            </li>
                            )
                        })}
    
                    </ul>
                </div>
                </div>
        </nav>
    );
    }
}


export default Navbar;