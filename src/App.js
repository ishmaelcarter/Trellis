import React from 'react';
import {Drawer, Button, Input, Label, Textarea, ButtonOutline, Close, Checkbox} from 'rebass';

export class App extends React.Component {
	  render(){
  	return (
      <div>
      	<Header />
      	<NewUser />
      	<ForgotPassword />
      	<ReturnUser />
      	<Contact onClick={this.handleToggle}/>
      </div>
    );
  }
}



var Contact = React.createClass({
		getInitialState: function(){
	return (
		{open: false, checked: false
		}
		);
},
	handleToggle: function(){
	this.setState({open: !this.state.open});
		},

	onClick: function(){
		this.setState({checked: !this.state.checked});

	},	

	render: function(){
	return (
	<div>
		<Button className="contactbutton" onClick={this.handleToggle}>Contact</Button>	
		<Drawer open={this.state.open} position='bottom'>
		<Close onClick={this.handleToggle}/>
			<form>
				<Label>Email</Label>
				<Input type="text"></Input>
				<Label>Text</Label>
				<Textarea>

				</Textarea>
				<Checkbox label="I am not a robot" name="checkbox_1" onClick={this.onClick} />
				<Button backgroundColor = "white" rounded color="black">Submit</Button>
			</form>
		</Drawer>
	</div>
	);
}
}
);

var Header = React.createClass({
	render: function(){
		return(
			<div className="header">
				<h1 id="logo"><img src="logo.png"/></h1>
				<h2 id="trellis">Trellis: CyVerse User Management</h2>
				<p id="headerText">A centralized place for you to manage your CyVerse user profile and services</p>
				<ButtonOutline backgroundColor="primary" className="login">Login</ButtonOutline>
			</div>
			)
	}
})

var NewUser = React.createClass({
	render: function(){
		return (
			<div className="NewUser">
				<div className="UserOptions">New User?</div>
				<div className="UserOptionsText">A centralized place for you to manage your CyVerse user profile and services.</div>
				<Button className="submit" >Register</Button> 
			</div>
			);
	}
})

var ForgotPassword = React.createClass({
	render: function(){
		return (
			<div className="ForgotPassword">
				<div className="UserOptions">Forget your Password?</div>
				<div className="UserOptionsText">Click here if you have previously created a CyVerse user ID.</div>
				
				<Button className="submit">Reset Password</Button>
				
			</div>
			);
	}
})

var ReturnUser = React.createClass({
	render: function(){
		return (
			<div className="ReturnUser">
				<div className="UserOptions">Log in with:</div>
				<div className="UserOptionsText">Click here to reset your password.</div>
				<Button className="submit">CyVerse Login</Button>
			</div>
			);
	}
})

