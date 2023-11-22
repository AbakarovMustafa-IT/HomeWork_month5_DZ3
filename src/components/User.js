import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersOneInfo } from "../redux/actions";

function User({ userInfo }) {
  const dispatch = useDispatch()

  const getOneUser = (event) => {
    dispatch(fetchUsersOneInfo(event.target.value))
  }

  const { userData } = useSelector(state => state.userReducer)


  return (
    <ul>
      <li>name: {userInfo.name}</li>
      <li>email: {userInfo.email}</li>

      <button value={userInfo.id} onClick={getOneUser}>get more</button>
      {
        userInfo.id === userData.id
          ? <li>
            <p>city: {userData.address.city}</p>
            <p>street: {userData.address.street}</p>
            <p>phone: {userData.phone}</p>
            <p>username: {userData.username}</p>
          </li>
          : ""
      }

    </ul>
  )
}

export default User