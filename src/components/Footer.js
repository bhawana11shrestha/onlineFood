import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-light py-3 my-4 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
            </ul>
          </div>

          <div className="col-md-8 col-lg-3 offset-lg-1">
            <h5>Subscribe to our <span className='fs-1 fst-italic'>OnlineFood</span> </h5>
            
            <form>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="button-addon2" />
                <button className="btn btn-success" type="button" id="button-addon2">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-betweenalign-items-center border-top pt-4">
          <p className="text-muted">&copy; 2024 OnlineFood, Inc. All rights reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="/" className="text-muted"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></Link></li>
            <li className="list-inline-item"><Link to="/" className="text-muted"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></Link></li>
            <li className="list-inline-item"><Link to="/" className="text-muted"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}