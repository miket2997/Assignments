import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeContextProvider } from './components/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeContextProvider>
	    <App />
	</ThemeContextProvider>
);