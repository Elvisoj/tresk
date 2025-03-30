import React from 'react'

function UseLocalStorage(key) {
    function setData(value){
        localStorage.setItem(key, JSON.stringify(value))
        console.log(value)
    }
    function getData(){
        return localStorage.getItem(key)
    }
    function removeData(){
        JSON.parse(localStorage.removeItem(key))
    }

    return { setData, getData, removeData}
}

export default UseLocalStorage
