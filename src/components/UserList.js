import React from 'react';
import useResource from './useResource';
const UserList = () => {
    const users = useResource('users');
    return(
        <ol>
            {
                users.map((users) => (
                    <li key={users.id} >{users.name}</li>
                ))
            }
        </ol>
    );
}
export default UserList;