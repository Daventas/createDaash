import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";

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


class ItemList extends Component {

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
      <PageTitle sm="4" title="아이템 목록" subtitle="Item List" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">

      <AppBar position="static" color="default">
        <Tabs
        value={this.state.activeIndex}
        onChange={(e, value) => this.handleChange(e, value)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        >
            <Tab label="판매 대기 아이템" icon={<span className="notify_number tab_number">{this.state.unreadNum}</span>} />
            <Tab label="판매 된 아이템"  icon={<span className="notify_number tab_number">{this.state.readNum}</span>} />
        </Tabs>
        </AppBar>
        <SwipeableViews
                    axis={'x'}
                    index={this.state.activeIndex}
                    onChangeIndex={(index) => this.handleChangeIndex(index)}>
                    <TabContainer>
                        <MuiThemeProvider>
                            <MUIDataTable
                                title={"판매 대기 아이템"}
                                data={readData}
                                columns={columns}
                                options={options}
                            />
                        </MuiThemeProvider>
                    </TabContainer>
                    <TabContainer>
                        <MuiThemeProvider>
                            <MUIDataTable
                                title={"판매 된 아이템"}
                                data={unreadData}
                                columns={columns}
                                options={options}
                            />
                        </MuiThemeProvider>
                    </TabContainer>
        </SwipeableViews>
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

export default ItemList;
