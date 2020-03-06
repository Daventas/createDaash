import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import MaterialTable from "../components/material-table/materialTable"
import { connect } from 'react-redux'
import { compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import firebase from '../config/fbconfig'
import botamReducer from "../store/reducers/botamReducer";



class UserManagement extends React.Component {

  state = {
    userList : [],
    userLista :[],
    message : ""
  }

  callbackMsg = (child) => {
    this.setState({message:child})
  }
  /*
  componentDidMount(){
    const db = firebase.firestore();
    var turmarkers =[];

    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {        
            turmarkers.push(doc.data())
        });
        this.setState({
          userList:turmarkers.map((item)=> ({
            guildName: item.guildName,
            playerId: item.playerId,
            playerClass: item.playerClass,
            playerName: item.playerName,
            playerAge: item.playerAge,
            playerContact: item.playerContact
            }))
        });
    });    
  }
  */

  render() {
    const getData = this.props.users
    let newData = getData && getData.map(item => ({
        guildName: item.guildName,
            playerId: item.playerId,
            playerClass: item.playerClass,
            playerName: item.playerName,
            playerAge: item.playerAge,
            playerContact: item.playerContact
    }))
  
    console.log(newData)
        return(
      
 <div>
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="혈맹 인원 관리" subtitle="Accounts Balance" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <MaterialTable 
            title="user"
             columns={[
                { title: "소속", field: "guildName" },
                { title: "아이디", field: "playerId" },
                { title: "직업", field: "playerClass"},
                { title: "이름", field: "playerName"},
                { title: "나이", field: "playerAge"},
                { title: "연락처", field: "playerContact"}
                //{
                //  title: "Doğum Yeri",
                //  field: "birthCity",
                //  lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
               //
             ]}
              data={newData}
              options={{
                headerStyle:{fontSize:"5"},
                rowStyle: {
                    backgroundColor: '#EEE',
                    fontSize:'24'
                  }
                }}
              parentCallback = {this.callbackMsg}
        />
      </Col>
    </Row>
  </Container>
  </div>
    )}

}

const mapStateToProps = (state) => {
    console.log(state)
  return {
    users : state.firestore.ordered.users
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users'}
  ])
)(UserManagement);