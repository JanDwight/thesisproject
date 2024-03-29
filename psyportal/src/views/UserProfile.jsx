import React from 'react'
import contact from '../assets/contact.png'
import { userStateContext } from '../contect/contextprovider'

function UserProfile() {
  
  const { currentUser } = userStateContext();
  console.log(currentUser.name);
  
  return (
    <div className="flex ml-3">
        <div className='m-3'>
          <img src={contact} alt="" className='h-[200px]'/>
        </div>
        
        <div className='mt-5'>
          <div>Last Name, First Name, L.</div>
          <div>Address</div>
          <div>Date of Birth</div>
          <div>Course and Year</div>
        </div>

        <div className='justify-cemter mt-[300px]'>
          <div>Courses</div>
        </div>
      </div>
      
  )
}

export default UserProfile