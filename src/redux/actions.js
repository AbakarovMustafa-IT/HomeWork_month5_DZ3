import { types } from "./types";

export function chageTitleAction() {
  return {
    type: types.CHANGE_TITLE
  }
}

export function asyncFunctionAction() {
  return function (dispatch) {
    setTimeout(() => {
      alert("Hello")
    }, 2000)
  }
}

function getUsersAction(users) {
  return {
    type: types.USERS,
    payload: users
  }
}

export function fetchUsersAction() {
  return async function (dispatch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    dispatch(getUsersAction(data))
  }
}



function getUserDataAction(user) {
  return {
    type: types.GET_USER,
    payload: user
  }
}

export function fetchUsersOneInfo(id) {
  return async function (dispatch) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    dispatch(getUserDataAction(data))
  }
}