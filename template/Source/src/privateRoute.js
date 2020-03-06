import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DefaultLayout } from "./layouts";
import routes from "./routes";
 
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if(auth.isEmpty === true) {
                return <Redirect to="/signin"/>;
            }
            else if (auth.isEmpty === false){
            return (<DefaultLayout><Component {...props} /></DefaultLayout>)
            }
        }}
    />
    
); 


 
const mapStateToProps = (state) => {
    console.log(state.firebase.auth.isEmpty)
    return {
      auth: state.firebase.auth
     
    }
};
 
export default connect(mapStateToProps)(PrivateRoute);
