import React, {Component} from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import { createUser} from "../../store/actions/userActions"
import { createBotam} from "../../store/actions/botamActions"
import firebase from '../../config/fbconfig'

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}




class MaterialTables extends Component {
  
  state = {
    ranKey : 1,
    type : ""
  }

  sendMsg = () => {
    this.props.parentCallback("updated")
  }
  
  componentDidUpdat(){
    this.setState({ranKey:getRandomInt(1,200)})
  }

  updateKey(){
    this.setState({ranKey:getRandomInt(1,200)})
  }

  render(){
    const db = firebase.firestore();
    const requestType = this.props.title

    console.log(requestType)
    

  return (
    <div key={this.state.ranKey}>
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
                  const data = this.state.data
                  if(requestType === 'botam')
                    this.props.createBotam(newData) 
                  else if (requestType === 'user')
                    this.props.createUser(newData)
                    
                }
               
                resolve();
            }, 1000);
            
           
        }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
             
              
              if (oldData) {
                const deleteRow = db.collection('users').where('playerId','==',oldData.playerId);
                deleteRow.get().then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                    doc.ref.update({
                      guildName : newData.guildName,
                      playerId : newData.playerId,
                      playerClass : newData.playerClass,
                      playerName : newData.playerName,
                      playerAge : newData.playerAge,
                      playerContact: newData.playerContact
                    });
                  })
                })
               

              }
              
              resolve()
         
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const db = firebase.firestore();
              const deleteRow = db.collection('users').where('playerId','==',oldData.playerId);
              deleteRow.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  doc.ref.delete();
                })
              })
             
            }, 600);
          }),
      }}
      
    />
    
  </div>
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