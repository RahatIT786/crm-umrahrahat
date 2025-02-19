
import React from 'react';
import CountLabel from '../components/ui/CountLabel';

import PackageList from './PackageList.jsx';
import TestForm from './TestForm.jsx';

import Swal from 'sweetalert2';



const Home = () => {

  const showAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };


  return (
    <div className="container">

          <div className="page-inner">
            <div
              className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
            >
              <div>
                <h3 className="fw-bold mb-3">Dashboard</h3>
               
              </div>
              <div className="ms-md-auto py-2 py-md-0">
                <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
                <a href="#" className="btn btn-primary btn-round">Add Customer</a>
              </div>
            </div>
            <div className="row">
              <CountLabel icon="fa-check-circle" category="SignUp" value="23" />
              <CountLabel icon="fa-check-circle" category="SignUp" value="23" />
              <CountLabel icon="fa-check-circle" category="SignUp" value="23" />
              <CountLabel icon="fa-check-circle" category="SignUp" value="23" />
            </div>
          </div>
        </div>
  );
}

export default Home;
