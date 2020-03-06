import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { makeStyles } from '@material-ui/core/styles';
import { compose } from 'redux'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        아툰해커
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#2a3f54',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#2a3f54'
  },
});



class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
    console.log(this.state)
  }

  
  render() {
    const { authError } = this.props
  return (
    <Grid container component="main" className="SignIn-root-1">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="SignIn-image-2" />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="SignIn-paper-3">
          <Avatar className="SignIn-avatar-4">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="SignIn-form-5" onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="SignIn-submit-6"
            >
              로그인
            </Button>
            <div style={{color:"red",fontAlign:"center"}}>
              { authError ? <p>{authError}</p> : null}

            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호를 잃어버렸나요?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"계정이 없으신가요?"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch (signIn(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignIn))