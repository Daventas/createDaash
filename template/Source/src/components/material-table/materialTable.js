import React, {Component} from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import { createUser} from "../../store/actions/userActions"
import { createBotam} from "../../store/actions/botamActions"


class MaterialTables extends Component {
  
  render(){

  return (
    <MaterialTable
      title=""
      columns={this.props.columns}
      data={this.props.data}
      options={
        this.props.options
        }
      editable={{
        onRowAdd: newData =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                {
                  this.props.createUser(newData) 
                  console.log(newData)
                }
                resolve();
            }, 1000);
        }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState(prevState => {
                  const data = [...this.props.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      
    />
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
              createBotam: (botam) => dispatch(createBotam(botam)),
              createUser: (user) => dispatch(createUser(user))
          }
      } 
      
export default connect(null,mapDispatchToProps)(MaterialTables);