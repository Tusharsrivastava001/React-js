import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const users = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Charlie' }
];

function numberlist(){
  return (
    <div>
      {/* list.map((varibel)=>(
        {number}
      )) */}
      {users.map((user)=>(
        <li>{user.id} - {user.name}</li>
      ))}
    </div>
  );
}
// {array.map(number,idx)=>(
//   li{idx} -> {items}
// )}
export default numberlist
