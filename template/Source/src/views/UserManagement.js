import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import MaterialTable from "../components/material-table/materialTable"
import { connect } from 'react-redux'
import { compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'



class UserManagement extends React.Component {

    render() {

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
            title="Demo Title"
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
              data={[
                { guildName: "새벽", playerId: "아툰정석", playerClass: "법사", playerName: "김남석", playerAge: "34", playerContact: "010 3843 9932"},
                { guildName: "새벽", playerId: "아툰상큼", playerClass: "암기", playerName: "", playerAge: "34", playerContact: "010 3843 9932"},
                { guildName: "새벽", playerId: "아툰해커", playerClass: "법사", playerName: "매튜송", playerAge: "34", playerContact: "010 3843 9932"},
                { guildName: "저승", playerId: "아툰챈이", playerClass: "신검", playerName: "", playerAge: "34", playerContact: "010 3843 9932"},
                { guildName: "저승", playerId: "아툰조아", playerClass: "신검", playerName: "", playerAge: "34", playerContact: "010 3843 9932"},
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
    </Row>
  </Container>
  </div>
    )}

}

const mapStateToProps = (state) => {
    console.log(state)
  return {

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users'}
  ])
)(UserManagement);
