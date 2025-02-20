import { Input } from '@mui/material'
import React, { useState } from 'react'
import InputBox from '../../components/ui/InputBox';
import TwoFieldForm from '../../components/ui/form/TwoFieldForm';
import EditBtn from '../../components/ui/button/EditBtn';
import DelBtn from '../../components/ui/button/DelBtn';
import Swal from 'sweetalert2';

const Role = () => {

    const [error,setError]=useState('');

    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState('');


    

    const [roles,setRoles]=useState([
        {id:1, name:"b2b"},
        {id:2, name:"b2c"},
        {id:3, name:"manager"},
    ]);

    const [newRole,setNewRole]=useState('');



    const handleAddRole=(e)=>{
        e.preventDefault();
         
        if(!newRole.trim()){
             //if input value is NOT entered
            setError('Enter the Role');
            return;
        }
        // if(newRole.trim()){
        //     setRoles([...roles,{id:roles.length+1,name:newRole}]);
        //     setNewRole('');
        // }

    //set new roles
    setRoles([...roles,{id:roles.length+1,name:newRole}]);

    //clear the input value
    setNewRole('');

    //if input value is entered
    setError('');
    }
    



    //delete Role
    const handleDeleteRole=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result)=>{
            if(result.isConfirmed){
                setRoles(roles.filter((role)=>role.id !==id));
                Swal.fire("Deleted!", "The role has been deleted.", "success");
            }
        });

        
    }


    const handleEditRole=(id,name)=>{
        setEditId(id);
        setEditText(name);
    }
    const handleSaveEditRole=(e)=>{
        e.preventDefault();
        if(!editText.trim()){
            setError('Enter the Role');
            return;
        }
        setRoles(
            roles.map((role)=>
                role.id === editId ? {...role,name:editText}:role
            )
        );

        setEditId(null);
    };










  return (
  <section className='d-flex justify-content-center mt-5'>
    <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <div className="card-title">Staff Role Table</div>
       <div className='d-flex justify-content-between'>
            <div></div>
            <div>
                {/* Role Adding form */}
                <form onSubmit={handleAddRole}> 
                    <InputBox
                     placeholder='Add Role'
                      label='+ Add Role'
                      value={newRole}
                      onChange={(e)=>setNewRole(e.target.value)}
                      />
                       {error && <p className="text-danger mt-1">{error}</p>}
                      </form>
            </div>
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
            {roles.map((role,index)=>(
                    <tr key={role.id}>
                     <td>{index+1}</td>
                     <td style={{  textTransform:'uppercase', }}>
                       <form onSubmit={handleSaveEditRole}>
                       {editId === role.id ? (
                            <input 
                            type='text'
                            value={editText}
                            onChange={(e)=>setEditText(e.target.value)}
                            />
                        ) : (role.name) }
                       </form>
                     </td>
                     <div className="form-button-action">
                         <EditBtn onClick={()=>handleEditRole(role.id,role.name)} />
                         <DelBtn onClick={()=>handleDeleteRole(role.id)} />
                          
                         </div>
                     
                   </tr>

            ))}
           
           
          </tbody>
        </table>
      </div>
    </div>
   
  </div>

  </section>
  )
}

export default Role