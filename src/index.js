import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import App from './App'
import { Suspense } from "react";
ReactDOM.render(<Suspense fallback={<h1>Loading graphics...</h1>}><App/> </Suspense>, document.getElementById('root'))
