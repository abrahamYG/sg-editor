//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import TriggerList from "./components/TriggerList";
import TopBar from "./components/TopBar";

function App() {
	return (
		<>
			{/*
		<div>
		<a href="https://vite.dev" target="_blank">
		<img src={viteLogo} className="logo" alt="Vite logo" />
		</a>
		<a href="https://react.dev" target="_blank">
		<img src={reactLogo} className="logo react" alt="React logo" />
		</a>
		</div>
		*/}
			<TopBar />
			<TriggerList />
		</>
	);
}

export default App;
