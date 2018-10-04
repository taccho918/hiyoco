import React from 'react';
import './App.css';
import { Actions, Filters, Groups } from './Store'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Table, Grid, Col, Row } from 'react-bootstrap';

const Dashboard = (props) => {
    return (
      <div>
        <Grid>
          <h1>Dashboard</h1>
          <Row>
            <Col xs={10} md={6}>
              <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Filters</th>
                </tr>
              </thead>
              <tbody>
                { Groups.map(group => {
                    return (
                      <tr>
                        <td>{group.action}</td>
                        <td>{group.filters.join(', ')}</td>
                      </tr>
                    );
                })}
                </tbody>
                </Table>
                <Link to="/group"><Button>create a group of Action and Filter</Button></Link>
            </Col>

            <Col xs={4} md={2}>
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { Actions.map(action => {
                  return (
                    <tr>
                      <Link to={"/action/"+ action.id}><td>{action.name}</td></Link>
                    </tr>
                  );
              })}
            </tbody>
            </Table>
            <Link to="/action"><Button>create action</Button></Link>
            </Col>

            <Col xs={4} md={2}>
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Filters</th>
              </tr>
            </thead>
            <tbody>
            { Filters.map(filter => {
                return (
                  <tr>
                    <Link to={"/filter/"+ filter.id}><td>{filter.name}</td></Link>
                  </tr>
                );
            })}
              </tbody>
              </Table>
              <Link to="/filter"><Button>create filter</Button></Link>
              </Col>
          </Row>
        </Grid>


      </div>
    );
}

export default Dashboard;
