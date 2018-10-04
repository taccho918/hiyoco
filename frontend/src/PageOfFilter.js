import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import List from './List';
import { Filters } from './Store';

class PageOfFilter extends Component{
    constructor() {
        super();
        var condition_string_methods = [
            "",
            "含む",
            "一致する"
        ];
        var condition_date_methods = [
            "",
            "以前である",
            "以降である"
        ];
        var modifier_string_methods = [
             "",
            "隠す",
            "置換する"
        ];
        var modifier_date_methods = [
            "",
            "隠す",
        ];

        this.state = {
            name: "",
            f_names: [],
            condition_string_methods: condition_string_methods,
            condition_date_methods: condition_date_methods,
            modifier_string_methods:modifier_string_methods,
            modifier_date_methods: modifier_date_methods,
            condition_arg: "",
            modifier_arg: "",
        };
        this.handleCM = this.handleCM.bind(this);
        this.handleCA = this.handleCA.bind(this);
        this.handleMM = this.handleMM.bind(this);
        this.handleMA = this.handleMA.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCM(event){this.setState({condition_method: event.target.value});}
    handleCA(event){this.setState({condition_arg: event.target.value});}
    handleMM(event){this.setState({modifier_method: event.target.value});}
    handleMA(event){this.setState({modifier_arg: event.target.value});}

    handleNameChange(event){
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        const nextId = Filters[Filters.length-1].id + 1;
        const condition = this.state.condition_method + ":" + this.state.condition_arg
        const modifier = this.state.modifier_method + ":" + this.state.modifier_arg
        Filters.push({id: nextId, name: this.state.name, condition: condition, modifier:modifier})

        this.setState(this.state);
        event.preventDefault();
        this.setState(this.state);
        event.preventDefault();
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
              <Grid>
                <h1>Filter</h1>
                <br/>
                フィルタ名: <TextBox handleTextChange = {this.handleNameChange}/>
                <p/>

                <br/>
                <h4>適用条件</h4>
                <Row>
                  <Col xs={3} md={2}>
                    項目: 予定名
                    <br/>
                    引数: <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    処理: <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    開始日時
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_date_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    終了日時
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_date_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    場所
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    参加者
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    説明
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                </Row>
                <p/>

                <br/>
                <h4>編集方法</h4>
                <Row>
                  <Col xs={3} md={2}>
                    項目: 予定名
                    <br/>
                    引数: <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    処理: <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    開始日時
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_date_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    終了日時
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_date_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    場所
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    参加者
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    説明
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                </Row>
                <p/>

                <br/>
                <Button bsStyle="success" onClick = {this.handleSubmit}>フィルタを作成</Button>
                <p/>

                <br/>
                <h4>作成したフィルタ</h4>
                <br/>
                <List data = {this.state.f_names}/>

                <br/>
                <h4>
                  <Link to={"/"}>
                    <Button>戻る</Button>
                  </Link>&nbsp;
                </h4>
              </Grid>
            </div>
        );
    }
}

export default PageOfFilter;
