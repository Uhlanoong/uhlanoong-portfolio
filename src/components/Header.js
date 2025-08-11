import React from 'react';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

function Header() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        background: '#fff',
        padding: '15px 20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
        {navItems.map((item) => {
          const id = item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}
            >
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;


