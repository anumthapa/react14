import React from "react";
const Nav =()=>{
  
    return(
     
      <header className="bg-white black-80 tc pv4 avenir">

  <h1 className="mt2 mb0 baskerville i fw1 f1">E-shopping</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Lets Start shopping</h2>
  <nav className="bt bb tc mw7 center mt4">
    <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="#">Contact</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/Cart">Cart</a>
  </nav>
</header>      
     
    );
  }
export default Nav;