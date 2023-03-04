import React from 'react'
import Confetti from 'react-confetti'
import ReactDOM from 'react-dom'

export default function index() {
  return ReactDOM.createPortal(
    <Confetti
        width = {window.innerWidth -100}
        height = {window.innerHeight}
        recycle  = {false}
    /> , document.body
  )
}
