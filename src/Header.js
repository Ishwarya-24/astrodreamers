function Header(props) {
    return(

        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">

           <img src="https://raw.githubusercontent.com/MohamedSamir-Gad/AstroDreamers/main/logo.png" 
           className="bi me-2"
           width="70" 
           alt="easy learnig with a blue dolphin logo "
           height="70"
           ></img>
            <span class="fs-4">EASY LEARNING</span>
          </a>
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Contact us</a></li>
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-success me-2">Register</button>
            <button type="button" class="btn btn-success me-2">Login</button>
          </div>
        </header>
    )
}

export default Header; 