import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import MaterialTable from "../components/material-table/materialTable"
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import firebase from '../config/fbconfig'



class BotamList extends Component {

  constructor(props) {
    super(props)
      this.state = {
        concon: []
      }
  }
 
  componentDidMount(){
        const db = firebase.firestore();
        var turmarkers =[];

        db.collection("botams").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {        
                turmarkers.push(doc.data())
            });
            this.setState({
                concon:turmarkers.map((item)=> ({
                  date: "10/10/2019",
                  boss: item.botamBoss,
                  itemPicker: item.botamPicker,
                  items: item.botamItem,
                  viewMen: "구상중"
                }))
            });
        });    
  }

  render() {
      
        const callcall = this.state.concon
        const gethis = this.props.dodo
        const lalal = gethis && gethis.map(item => ({
          boss : item.botamBoss
          
        }))
        console.log(lalal)
       
        return(
      
            <div>
              <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                  <PageTitle sm="4" title="보탐 목록" subtitle="Boss List" className="text-sm-left" />
                </Row>

                <Row>
                  {/* Editor */}
                  <Col lg="9" md="12">
                    <MaterialTable 
                        title="botam"
                        columns={[
                            { title: "날짜", field: "date" },
                            { title: "보스", field: "boss" },
                            { title: "루팅자", field: "itemPicker"},
                            { title: "획득 아이템", field:"items"},
                            { title: "총 참여자" ,field: "viewMen"}
                            //{
                            //  title: "Doğum Yeri",
                            //  field: "birthCity",
                            //  lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
                          //
                        ]}
                          data={callcall}
                          options={{
                            headerStyle:{fontSize:"5"},
                            rowStyle: {
                                backgroundColor: '#EEE',
                                fontSize:'24'
                              }
                            }}
                    />
                  </Col>

                  {/* Sidebar Widgets */}
                  <Col lg="3" md="12">
                    <SidebarActions />
                    <SidebarCategories />
                  </Col>
                </Row>
              </Container>
              </div>
                )}

    }

const mapStateToProps = state => {
  console.log(state)
  return {
    dodo : state.firestore.ordered.botams
    
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'botams' } 
  ]),
)(BotamList)