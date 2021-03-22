import React, { useState } from "react";

import axios from "axios";

//import Cookies from 'universal-cookie';

import  Cookies from 'js-cookie';

import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
	form: {
		marginLeft: "40%",
		marginTop: 100,
		marginRight: "40%"
	},
	errorMessage: {
		marginLeft: "41.5%",
		marginRight: "37%",
		marginTop: "3%",
		color: "red"
	},
    centreContainer: {
		backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
	},
}));

const LoginPage = (props) => {
	const classes = useStyles();

	const cookies = new Cookies();

	const [attempted, setAttempted] = useState(false);
	const [errorMessage, setMessage] = useState("Invalid Username or Password");

	const pressButton = () => {
		let username = document.getElementById("username").value;
		let password = document.getElementById("password").value;

		let url = "/api/admin_login";

		let params = {
			username: username,
			password: password
		}

		const csrftoken = Cookies.get('csrftoken');

		let headers = {
			'X-CSRFToken': csrftoken
		}
        //cookies.get("django_csrf")

		axios.post(url, { params: params }, { headers: headers }).then(res => {
			// Success
			Cookies.set("django_csrf", res.data.csrfToken);
			window.open("/", "_self");
		}).catch(err => {
			// Error
			setAttempted(true);

			if (err.response != null && (err.response.status === 403 || err.response.status === 400)) {
				setMessage("Invalid Username or Password");
			} else if (err.response.status === 423) {
				setMessage("Too many login attempts");
			}
		});
	}

	return (
		<>
			<form className={classes.form} noValidate autoComplete="off">
                <Box className={classes.centreContainer}>
                    <h3>Admin Log In</h3>
                    <p>Don't have an admin account? Make one <a href="./signup">here</a></p>
                </Box>
				<br />
				<TextField
					required
					id="username"
					variant="outlined"
					label="Username"
					fullWidth />
				<br /><br />
				<TextField
					required
					id="password"
					variant="outlined"
					label="Password"
					type="password"
					fullWidth />
				<br /><br /><br />
				<Button onClick={() => pressButton()} variant='contained' color="primary" fullWidth>Log In</Button>
			</form>
			<div className={classes.errorMessage} style={{ display: attempted ? "block" : "none" }}>{errorMessage}</div>
		</>
	);
};

export default LoginPage;