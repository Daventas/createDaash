import React, {component} from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SideAddCredit from "../components/add-new-transaction/side-add-credit"
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import MaterialTable from "../components/material-table/materialTable"


class AccBalance extends React.Component {

    render() {

        return(
      
 <div>
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="연맹 통장 잔고 내역" subtitle="Accounts Balance" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <MaterialTable 
            title="Demo Title"
             columns={[
                { title: "아이디", field: "userId" },
                { title: "현재 잔고", field: "currentBalnce" },
                { title: "총 입금(이번달)", field: "completedCredit"},
                { title: "총 출금(이번달)", field: "completedDebit"},
                { title: "총 분배 횟수(이번달)", field: "totalTransactions"}
                //{
                //  title: "Doğum Yeri",
                //  field: "birthCity",
                //  lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
               //
             ]}
              data={[
                { userId: "아툰해커", currentBalnce: "9541", completedCredit: "2223", completedDebit: "421", totalTransactions: "34"},
                { userId: "아툰정석", currentBalnce: "5542", completedCredit: "12334", completedDebit: "3345", totalTransactions: "12"},
                { userId: "아툰상큼", currentBalnce: "8795", completedCredit: "3445", completedDebit: "2213", totalTransactions: "55"},
                { userId: "아툰단신", currentBalnce: "3322", completedCredit: "3245", completedDebit: "4433", totalTransactions: "78"},
                { userId: "아툰탱크", currentBalnce: "5487", completedCredit: "2222", completedDebit: "2334", totalTransactions: "33"},
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
        <SideAddCredit />
       
      </Col>
    </Row>
  </Container>
  </div>
    )}

}

export default AccBalance;
