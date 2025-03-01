import React, { useState, CSSProperties } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My App</h1>
      <nav style={{ ...styles.nav, ...(isOpen ? styles.navOpen : {}) }}>
        <a href="#" style={styles.navLink}>Home</a>
        <a href="#" style={styles.navLink}>About</a>
        <a href="#" style={styles.navLink}>Contact</a>
      </nav>
      <button style={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
  );
};

// Type-safe CSS styles
const styles: { [key: string]: CSSProperties } = {
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0px",
    backgroundColor: "#272727",
    color: "white",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
    padding: "0 0 0 36px"
  },
  nav: {
    display: "flex",
    gap: "15px",
    padding: "0 36px 0 0",
  },
  navOpen: {
    flexDirection: "column",
    position: "absolute",
    top: "50px",
    right: "10px",
    backgroundColor: "#272727",
    padding: "10px",
    borderRadius: "5px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
  menuButton: {
    display: "none",
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
};

// Responsive styling (optional, should be handled with CSS ideally)
if (window.innerWidth < 768) {
  styles.nav.display = "none";
  styles.menuButton.display = "block";
}

export default Header;
