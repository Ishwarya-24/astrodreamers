
import { Link as LinkComponent } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header(props) {
    return(

        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
           
           <img src="https://raw.githubusercontent.com/MohamedSamir-Gad/AstroDreamers/main/logo.png" 
           className="bi me-2"
           width="70" 
           alt="easy learnig with a blue dolphin logo "
           height="70"
           ></img>
            <span className="fs-4">EASY LEARNING</span>
          </a>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><LinkComponent to="/" className="nav-link px-2 link-dark">Home</LinkComponent></li>
            <li><LinkComponent to="/Features" className="nav-link px-2 link-dark">Features</LinkComponent></li>
            <li><LinkComponent href="#" className="nav-link px-2 link-dark">About</LinkComponent></li>
            <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Contact us</a></li>
          </ul>
    
          <div className="col-md-3 text-end">
            <Button  component={LinkComponent}   to='/registration' type="button" className="btn btn-success me-2">Register</Button>
            <Button  component={LinkComponent}   to='/login' type="button" className="btn btn-success me-2">Login</Button>
          </div>
        </header>
    )
}

export default Header; 