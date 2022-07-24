import '../Navbar/Navbar_style.css';
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <header>
        <Link to='/' className='logo'>WELCOME &nbsp; TO &nbsp; REACT QUIZ</Link>
      </header>
    </>
  );
}

export default Navbar;
