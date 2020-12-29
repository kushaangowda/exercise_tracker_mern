import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercisesList.component";
import EditExercise from "./components/editExercise.component";
import CreateExercise from "./components/createExercise.component";
import CreateUser from "./components/createUser.component";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container-fluid">
				<br />
				<Route path="/" exact component={ExercisesList} />
				<Route path="/edit/:id" exact component={EditExercise} />
				<Route path="/create" exact component={CreateExercise} />
				<Route path="/user" exact component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
