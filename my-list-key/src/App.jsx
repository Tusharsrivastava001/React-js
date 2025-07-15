import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const users=[
  {id: 100,name: "alice"},
  {id: 101,name: "alsice"},
  {id: 102,name: "aliece"},
];
function numberlist(){
  return (
    <div>
      {users.map((user)=>(
        <li>{user.id} -  {user.name}</li>
      )
      )}
    </div>
  );
}
// {array.map(number,idx)=>(
//   li{idx} -> {items}
// )}
export default numberlist
