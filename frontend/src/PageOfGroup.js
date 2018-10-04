import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Grid, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Groups, Actions, Filters } from './Store'

class PageOfGroup extends Component{
	constructor() {
		super();

		this.state = {
			action: "",
      filters: []
		};

		this.handleActionChange = this.handleActionChange.bind(this);
    this.handleFiltersChange = this.handleFiltersChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleActionChange(event){
		this.setState({
			action: event.target.value
		});
	}

	handleFiltersChange(event){
    var filters = this.state.filters;
    if (event.target.checked) {
      filters.push(event.target.value);
    } else {
      var index = filters.indexOf(event.target.value);
      filters.splice(index,1);
    }
    console.log(filters);
		this.setState({
			filters: filters
		});
  }

	handleSubmit(event){
    var nextId = Groups[Groups.length-1].id + 1;
    Groups.push({id: nextId, action: this.state.action, filters: this.state.filters})

    this.setState(this.state);
    event.preventDefault();
    this.props.history.push("/");
  }

	render(){
		return(
			<div>
        <Grid>
          <h1>Action and Filter</h1>
            <br/>
            Action:
            <p/>
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="action_option" defaultValue={1}>
              { Actions.map(action => {
                return (
                  <ToggleButton value={action.name} onChange = {this.handleActionChange}>{action.name}</ToggleButton>
                );
              })}
              </ToggleButtonGroup>
            </ButtonToolbar>

			      <p/>
			      Filter:
			      <p/>
            <ToggleButtonGroup type="checkbox">
              { Filters.map(filter => {
                return (
                  <ToggleButton value={filter.name} onChange={this.handleFiltersChange}>{filter.name}</ToggleButton>
                );
              })}
            </ToggleButtonGroup>

            <p/><br/><br/>
            <h4>アクションとフィルタの組</h4>
            Action: {this.state.action}
            <p/>
            Filters: {this.state.filters.map(filter => {
              return (
                <span>{filter}　</span>
              );
            })}
            <p/>
            <br/>
            <Button bsStyle="success" onClick = {this.handleSubmit}>作成</Button>
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

export default PageOfGroup;
