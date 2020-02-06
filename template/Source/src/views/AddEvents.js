import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import { connect } from 'react-redux';
import { createBotam} from "../store/actions/botamActions"
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import MaterialTable from "../components/material-table/materialTable"
import Typography from '@material-ui/core/Typography';
import MUIDataTable from "mui-datatables";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import NewEntity from '../components/blog/NewEntity'

function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const tabStyle = {
    backgroundColor : "black"

}


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
        const columns = [
            {
                name: "Message",
                options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            35
                        );
                    }
                }
            }];
         const  readData = [{
                heading: "Notifications Centre",
                postheading: "ABC Financial Planning",
                
            }];

        const  unreadData = [{
                heading: "Notifications Centre",
                postheading: "ABC Financial Planning",
             
            }];
        let options = { 
                filterType: 'dropdown',
                responsive: 'stacked',
                print: false,
                search: false,
                download: false,
                selectableRows: 'none'
            };

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
