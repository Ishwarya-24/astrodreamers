import { Link as LinkComponent } from 'react-router-dom';

function Hero () {
    return(
        <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Best platform to learn coding and business analytics courses</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-4 mb-4">Grow your career with best in class courses..</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <LinkComponent to="/docs" type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Get Started</LinkComponent>
    
            </div>
          </div>
        </div>
      </div>
    )

}

export default Hero;