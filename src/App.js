import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../src/redux/actions/user';
import UserList from '../src/components/userList';
import NewUserForm from '../src/components/NewUserForm';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUsersRequest())
  }, [dispatch])
 
  const users = useSelector((state) => state.users.items)

  function handleSubmit({ firstName , lastName }){
    dispatch(createUserRequest({firstName , lastName}))
  }

  function handleDeleteUser(userId){
    dispatch(deleteUserRequest(userId))
  }

  return (
    <div className="App" style={{ margin: '0 auto', padding: 20, maxWidth: 500 }}>
      <NewUserForm onSubmit={handleSubmit} />
      <UserList users={users} onDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;
