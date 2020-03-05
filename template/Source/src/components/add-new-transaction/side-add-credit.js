/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { Component } from "react";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  Button
} from "shards-react";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';


function TabContainer({ children }) {
  return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
      </Typography>
  );
}


class SideAddCredit extends Component {


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

  
  render() {

      


      return(

      <div>
          
          <Card small className="h-100">
          {/* Card Header */}
          <CardHeader className="border-bottom">
          <h6 className="m-0">입출금 진행하기</h6>
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
              <Tab label="입금하기"/>
              <Tab label="인출하기"/>   
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
                  <h6 className="m-0">입금 내역</h6>
                  </CardHeader>
                  <CardBody className="d-flex flex-column">
                      <Form>
                      <Row form>
                          <Col md="4" className="form-group">
                          <label htmlFor="feInputAddress">혈맹원</label>
                          
                          </Col>
                          <Col md="8">
                          <Select 
                              className="basic-single"
                              classNamePrefix="유저이름"
                              id="feInputAddress"
                              options={[
                                      {value : "아툰해커", label:"아툰해커"},
                                      {value : "아툰정석", label:"아툰정석"},
                                      {value : "아툰단신", label:"아툰단신"},
                                      {value : "아툰탱크", label:"아툰탱크"},
                              ]}
                              isSearchable={true}
                          >
                          </Select>
                          
                          </Col>
                      </Row>
                      <Row form>
                          <Col md="4" className="form-group">
                              <label htmlFor="incomingTitle">내역</label>
                          </Col>
                          <Col md="8">
                              <TextField
                                  className="basic-single"
                                  classNamePrefix="입금 내역"
                                  id="incomingTitle"
                              />  
                          </Col>
                      </Row>
                      
                      <Row form>
                          <Col md="4" className="form-group">
                              <label htmlFor="creditAmount">금액</label>
                          </Col>
                          <Col md="8">
                              <TextField 
                                  className="basic-single"
                                  classNamePrefix="다이야"
                                  id="creditAmount"
                              />
                          </Col>
                      </Row>
                      <Button type="submit">송금하기</Button>
                      </Form>
                  </CardBody>
                  </Card>
              </TabContainer>

              <TabContainer>
              <Card small className="h-100">
                  {/* Card Header */}
                  <CardHeader className="border-bottom">
                  <h6 className="m-0">인출 내역</h6>
                  </CardHeader>
                  <CardBody className="d-flex flex-column">
                      <Form>
                      <Row form>
                          <Col md="4" className="form-group">
                          <label htmlFor="userId">혈맹원</label>
                          
                          </Col>
                          <Col md="8">
                          <Select 
                              className="basic-single"
                              classNamePrefix="유저이름"
                              id="userId"
                              options={[
                                      {value : "아툰해커", label:"아툰해커"},
                                      {value : "아툰정석", label:"아툰정석"},
                                      {value : "아툰단신", label:"아툰단신"},
                                      {value : "아툰탱크", label:"아툰탱크"},
                              ]}
                              isSearchable={true}
                            
                          >
                          </Select>
                          
                          </Col>
                      </Row>
                      <Row form>
                          <Col md="4" className="form-group">
                              <label htmlFor="uploadedItem">아이템</label>
                          </Col>
                          <Col md="8">
                              <TextField
                                  className="basic-single"
                                  classNamePrefix="등록아이템"
                                  id="uploadedItem"
                              />  
                          </Col>
                      </Row>
                      
                      <Row form>
                          <Col md="4" className="form-group">
                              <label htmlFor="debitAmount">금액</label>
                          </Col>
                          <Col md="8">
                              <TextField 
                                  className="basic-single"
                                  classNamePrefix="다이야"
                                  id="debitAmount"
                              />
                          </Col>
                      </Row>
                      <Button type="submit">인출 하기</Button>
                      </Form>
                  </CardBody>
                  </Card>
              </TabContainer>
          </SwipeableViews>
          </CardBody>
          </Card>
          </div>

      )}};

export default SideAddCredit;

