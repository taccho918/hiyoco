import React from 'react';
import './App.css';
import { Filters } from './Store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Table, Grid, Col, Row } from 'react-bootstrap';


const Filter = (props) => {
    const id = parseInt(props.match.params.id, 10);
    const filter = Filters.filter(function(item, index){
      if (item.id === id) return true;
    })[0];
    return (
        <div>
          <Grid>
          <div>
            <h4>名前: {filter.name}</h4>
            <h4>適用条件: {filter.condition}</h4>
            <h4>編集方法: {filter.modifier}</h4>
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

export default Filter;
