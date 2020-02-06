import React, { Component, PureComponent, useState} from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import  moment  from 'moment';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import MaterialTable from "../../components/material-table/materialTable"
import { connect } from 'react-redux';
import { createBotam} from "../../store/actions/botamActions"
//import { DatePicker } from 'material-ui-pickers/DatePicker';


function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}


class NewEntity extends Component {

  
    state = {
        activeIndex : 0,
        currentDate: new Date(),
        selectedDate: new Date()
        
    }

    

    handleChangeIndex(index) {
        this.setState({ activeIndex: index });
    }

    handleChange(event, value) {
        this.setState({ activeIndex: value });
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };
    
    handleBotamSumbit = (e) => {
        e.preventDefault();
        this.props.createBotam(this.state)
    }
    
    render() {

        
        const {selectedDate} = this.state
       

        return(
        <div>
            
            <Card small className="h-100">
            {/* Card Header */}
            <CardHeader className="border-bottom">
            <h6 className="m-0">보탐/아이템 기입</h6>
            </CardHeader>

            <CardBody className="d-flex flex-column">
            <AppBar position="static" color="default">
            <Tabs
                value={this.state.activeIndex}
                onChange={(e, value) => this.handleChange(e, value)}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                <Tab label="보탐 입력"/>
                <Tab label="판매 아이템 입력"/>   
            </Tabs>
            </AppBar>

            <SwipeableViews
                axis={'x'}
                index={this.state.activeIndex}
                onChangeIndex={(index) => this.handleChangeIndex(index)}>
                 <TabContainer>
                 <Card small className="h-100">
                    {/* Card Header */}
                    <CardHeader className="border-bottom">
                    <h6 className="m-0">신규 보탐 및 전리품 기입</h6>
                    </CardHeader>
                    <CardBody className="d-flex flex-column">
                        <Form>
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="보스 처치 일">날짜</label>
                            </Col>
                            <Col md="8">
                                <DatePicker
                                    
                                    selected={this.state.currentDate}
                                    value={this.state.selectedDate}
                                    onChange={date => this.setState({currentDate: date})}
                                    popperModifiers={{
                                        flip:{
                                            behavior: ['bottom']
                                        }
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row form>
                            <Col md="4" className="form-group">
                            <label htmlFor="feInputAddress">보스</label>
                            
                            </Col>
                            <Col md="8">
                            <Select 
                                className="basic-single"
                                classNamePrefix="보스 이름"
                                id="feInputAddress"
                                options={[
                                        {value : "리치", label:"리치"},
                                        {value : "우그", label:"우그"},
                                        {value : "좀비", label:"좀비"},
                                        {value : "시어", label:"시어"},
                                ]}
                                isSearchable={true}
                            >
                            </Select>
                            
                            </Col>
                        </Row>
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="feEmailAddress">루팅자</label>
                            </Col>
                            <Col md="8">
                                <Select 
                                    className="basic-single"
                                    classNamePrefix="획득 혈원"
                                    id="feInputAddress"
                                    options={[
                                            {value : "아툰정석", label:"아툰정석"},
                                            {value : "아툰상큼", label:"아툰상큼"},
                                            {value : "아툰해커", label:"아툰해커"},
                                            {value : "아툰단신", label:"아툰단신"},
                                    ]}
                                    isSearchable={true}
                                >
                            </Select>
                            </Col>
                        </Row>
                        
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="feEmailAddress">획득 아이템</label>
                            </Col>
                            <Col md="8">
                                <Select 
                                    className="basic-single"
                                    classNamePrefix="아이템 목록"
                                    id="feInputAddress"
                                    options={[
                                            {value : "축젤", label:"축젤"},
                                            {value : "축데이", label:"축데이"},
                                            {value : "희귀주문서", label:"희귀주문서"},
                                            {value : "영웅주문서", label:"영웅주문서"}
                                    ]}
                                    isSearchable={true}
                                    isMulti
                                >
                            </Select>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="feEmailAddress">참여 인원</label>
                            </Col>
                            <Col md="8">
                                <Select 
                                    className="basic-single"
                                    classNamePrefix="총 참여인 등록"
                                    id="feInputAddress"
                                    options={[
                                            {value : "아툰해커", label:"아툰해커"},
                                            {value : "아툰정석", label:"아툰정석"},
                                            {value : "아툰상큼", label:"아툰상큼"},
                                            {value : "아툰단신", label:"아툰단신"}
                                    ]}
                                    isSearchable={true}
                                    isMulti
                                >
                            </Select>
                            </Col>
                        </Row>

                        <Button type="submit" onClick={this.handleBotamSumbit}>입력 완료</Button>
                        </Form>
                    </CardBody>
                    </Card>
                </TabContainer>

                <TabContainer>
                 <Card small className="h-100">
                    {/* Card Header */}
                    <CardHeader className="border-bottom">
                    <h6 className="m-0">이벤트 출석 기입</h6>
                    </CardHeader>
                    <CardBody className="d-flex flex-column">
                        <Form>
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="theEventDate">날짜</label>
                            </Col>
                            <Col md="8">
                                <DatePicker
                                    id = "theEventDate"
                                    selected={this.state.currentDate}
                                    value={this.state.selectedDate}
                                    onChange={date => this.setState({currentDate: date})}
                                    popperModifiers={{
                                        flip:{
                                            behavior: ['bottom']
                                        }
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row form>
                            <Col md="4" className="form-group">
                            <label htmlFor="theEvent">이벤트 </label>
                            
                            </Col>
                            <Col md="8">
                            <Select 
                                className="basic-single"
                                classNamePrefix="이벤트 목록"
                                id="theEvent"
                                options={[
                                        {value : "화염의데스", label:"화염의데스"},
                                        {value : "데몬", label:"데몬"},
                                        {value : "잊혀진섬", label:"잊혀진섬"},
                                        {value : "격돌의탑", label:"격돌의탑"},
                                ]}
                                isSearchable={true}
                            >
                            </Select>
                            
                            </Col>
                        </Row>
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="theEventChecker">출석 확인자</label>
                            </Col>
                            <Col md="8">
                                <Select 
                                    className="basic-single"
                                    classNamePrefix="획득 혈원"
                                    id="theEventChecker"
                                    options={[
                                            {value : "아툰정석", label:"아툰정석"},
                                            {value : "아툰상큼", label:"아툰상큼"},
                                            {value : "아툰해커", label:"아툰해커"},
                                            {value : "아툰단신", label:"아툰단신"},
                                    ]}
                                    isSearchable={true}
                                >
                            </Select>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="theEventMember">참여 인원</label>
                            </Col>
                            <Col md="8">
                                <Select 
                                    className="basic-single"
                                    classNamePrefix="총 참여인 등록"
                                    id="theEventMember"
                                    options={[
                                            {value : "아툰해커", label:"아툰해커"},
                                            {value : "아툰정석", label:"아툰정석"},
                                            {value : "아툰상큼", label:"아툰상큼"},
                                            {value : "아툰단신", label:"아툰단신"}
                                    ]}
                                    isSearchable={true}
                                    isMulti
                                >
                            </Select>
                            </Col>
                        </Row>

                        <Button type="submit">출석 생성</Button>
                        </Form>
                    </CardBody>
                    </Card>
                </TabContainer>
            </SwipeableViews>
            </CardBody>
            </Card>
            </div>

        )}};
  
const mapDispatchToProps = (dispatch) => {
    return {
                createBotam: (botam) => dispatch(createBotam(botam))
            }
        } 
        
export default connect(null,mapDispatchToProps)(NewEntity);

