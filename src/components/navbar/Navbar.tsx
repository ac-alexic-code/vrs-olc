import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar__logo">logo</div>
      <div className="navbar__menu" aria-label="Food Menu">
        menu
      </div>
      <div className="navbar__contact" aria-label="Contact">
        kontakt
      </div>
      <div className="navbar__languages">
        <div aria-label="Change language of website to Polish">pl</div>
        <div aria-label="Change language of website to English">en</div>
      </div>

      <div className="navbar__icons"></div>
    </nav>
  );
};

export default Navbar;
