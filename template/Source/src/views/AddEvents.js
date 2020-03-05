import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import { connect } from 'react-redux';
import { createBotam} from "../store/actions/botamActions"
import PageTitle from "../components/common/PageTitle";
import NewEntity from '../components/blog/NewEntity'



class AddEvents extends Component {

    state = {
        activeIndex: 0,
    }

    handleChangeIndex(index) {
        this.setState({ activeIndex: index });
    }

    handleChange(event, value) {
        this.setState({ activeIndex: value });
    }

    render() {
        

    return (

    <div>
   

    <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="보탐/출석 기록 추가" subtitle="Item List" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="10" md="10">
        <NewEntity/>       
      </Col>
    </Row>
  </Container>
  </div>
    )}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBotam: (botam) => dispatch(createBotam(botam))
    }
} 

export default connect(null,mapDispatchToProps)(AddEvents);
