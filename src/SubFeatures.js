import pythonImage from './python.jpg'
import phpImage from './php.png'
import sqlImage from './sql.jpg'


function SubFeatures() {
    return( 

        <div class="container px-4 py-5" id="custom-cards">
          <h2 class="pb-2 border-bottom">Courses</h2>

          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${pythonImage})`}}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">

                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h3><br />
                  




                  <ul class="d-flex list-unstyled mt-auto">
                  <li className="nav-item"><a href="#" className="nav-link">Python</a></li>
                    <li class="d-flex align-items-center me-3">


                    </li>
                    <li class="d-flex align-items-center">


                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${phpImage})`}}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h3><br />
                  <ul class="d-flex list-unstyled mt-auto">
                  <li className="nav-item"><a href="#" className="nav-link">php</a></li>
                    <li class="d-flex align-items-center me-3">


                    </li>
                    <li class="d-flex align-items-center">


                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${sqlImage})`}}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h3><br />
                  <ul class="d-flex list-unstyled mt-auto">
                  <li className="nav-item"><a href="#" className="nav-link">SQL</a></li>
                    <li class="d-flex align-items-center me-3">


                    </li>
                    <li class="d-flex align-items-center">


                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>







    );

}

export default SubFeatures;