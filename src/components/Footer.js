import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: 20,
        color: '#fff',           
        fontSize: 12,
        backgroundColor: '#222', 
      }}
    >
      © {new Date().getFullYear()} Uhlanoong. All rights reserved.
    </footer>
  );
}

export default Footer;



