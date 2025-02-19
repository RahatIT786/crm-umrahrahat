import React from 'react'
import DelBtn from '../button/DelBtn';
import EditBtn from '../button/EditBtn';
import InputBox from '../InputBox';
const TwoFieldForm = () => {
  return (
    <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <div className="card-title">Staff Role Table</div>
       <div className='d-flex justify-content-between'>
            <div></div>
            <div><form action=""> <InputBox placeholder='Add Role' label='+ Add Role'/></form></div>
       </div>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <div class="form-button-action">
                  <EditBtn/>
                  <DelBtn/>
                   
                  </div>
              
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <div className="form-button-action">
                   
                  </div>
             
            </tr>
            <tr>
              <td>3</td>
              <td >Larry the Bird</td>
              <div className="form-button-action">
                  
                  </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   
  </div>
  )
}

export default TwoFieldForm