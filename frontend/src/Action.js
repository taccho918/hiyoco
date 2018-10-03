import React from 'react';
import './App.css';
import { Actions } from './Store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Table, Grid, Col, Row } from 'react-bootstrap';


const Action = (props) => {
    const id = parseInt(props.match.params.id, 10);
    const action = Actions.filter(function(item, index){
      if (item.id === id) return true;
    })[0];
    return (
        <div>
        <Grid>
          <div>
            <h4>名前: {action.name}</h4>
            <h4>共有先: {action.opponent}</h4>
            <h4>引数: {action.param}</h4>
          </div>
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

export default Action;
