import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [users,setUsers] = useState([])
    
    useEffect(() => {
        fetch("https://obscure-savannah-69297.herokuapp.com/users")
          .then((res) => res.json())
          .then((data) => setUsers(data.users));
    }, [])
  

    console.log(users);
    return (
      <div>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th> status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.email}</td>
                  <td>{user.name}</td>

                  <td>
                    <button  className="btn">DELETE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;