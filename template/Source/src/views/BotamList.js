import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import MaterialTable from "../components/material-table/materialTable"
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



class BotamList extends Component {
  state = {
    concon : []
  }

 
    render() {
      const myObject = this.props.dodo

      
      
      //this.setState({godState : gotData})
      //console.log(dodo.id)
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
            title="Demo Title"
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
              data={[
                { date: "11/10/2019", boss: "우그", itemPicker: "아툰해커", items: "희귀 봉축", viewMen: "구상중"},
                { date: "10/10/2019", boss: "리치", itemPicker: "아툰상큼", items: "영비 봉축", viewMen: "구상중"},
                { date: "10/10/2019", boss: "카파", itemPicker: "아툰정석", items: "희귀", viewMen: "구상중"},
                { date: "09/10/2019", boss: "이프", itemPicker: "아툰상큼", items: "이프 목걸이", viewMen: "구상중"},
                { date: "07/10/2019", boss: "시어", itemPicker: "아툰해커", items: "영비", viewMen: "구상중"},
              ]}
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
