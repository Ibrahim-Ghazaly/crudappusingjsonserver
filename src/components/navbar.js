import React from 'react';
// import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    {/* <Link className="navbar-brand" to="/">Logo</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href='#'>Home</a>

        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">About</Link> */}
        </li>
      
      
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default NavBar;