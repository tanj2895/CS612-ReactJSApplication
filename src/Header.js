import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <header>
     
     Festivals of India
     
     <div className="img">
     <img src={process.env.PUBLIC_URL + '/Festivals.jpg' } alt="Indian Festivals"  />
     
     </div>
     </header>
    );
  }
}

export default Header;