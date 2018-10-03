import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import { Actions } from './Store'

class PageOfAction extends Component{
	constructor() {
		super();
        var opponents = [
            "",
            "Google Calendar",
            "Mail",
            "Slack"
        ];
		this.state = {
      name: "",
			address: "",
      opponents: opponents,
      opponent: opponents[0]

		};
    this.handleNameChange = this.handleNameChange.bind(this);
		this.handleActionChange = this.handleActionChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleNameChange(event){
    this.setState({
      name: event.target.value
    });
  }

	handleActionChange(event){
		this.setState({
			opponent: event.target.value
		});
	}

	handleAddressChange(event){
		this.setState({
			address: event.target.value
		});
  }

	handleSubmit(event){
    var nextId = Actions[Actions.length-1].id + 1;
    Actions.push({id: nextId, name: this.state.name, opponent: this.state.opponent, param: this.state.address})

    this.setState(this.state);
    event.preventDefault();
    this.props.history.push("/");
  }

	render(){
		return(
			<div>
        <Grid>
          <h1>Action</h1>
            <br/>
            名前: <TextBox handleTextChange = {this.handleNameChange}/>
			      <p/>
			      共有先: <PullDown data = {this.state.opponents} handleChange = {this.handleActionChange}/>
			      <p/>
			      引数: <TextBox handleTextChange = {this.handleAddressChange}/>(例: メールアドレス，カレンダID)
			      <p/>
            <br/>
            <Button bsStyle="success" onClick = {this.handleSubmit}>アクションを作成</Button>
            <p/>

            <br/>
            <h4>
              <Link to={"/"}>
                <Button>戻る</Button>
              </Link>
            </h4>
        </Grid>
			</div>
		);
	}
}

export default PageOfAction;
