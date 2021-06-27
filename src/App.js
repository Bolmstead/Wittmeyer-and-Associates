import './App.css';
import NavigationBar from './Components/NavigationBarHome'
import Home from './Components/Home'
import About from './Components/About'
import Specializations from './Components/Specializations'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';


import { makeStyles } from '@material-ui/core/styles';
import Routes from './Routes.js'


const useStyles = makeStyles(() => ({

}));

function App() {
  const classes = useStyles();

  return (
    <div className="body">
      <Grid container>
        <Home />
        <About />
        <Specializations />
      </Grid>



    </div>
  );
}

export default App;
