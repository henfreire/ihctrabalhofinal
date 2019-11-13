import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import FaceIcon from '@material-ui/icons/Face';
import Modal from 'components/Modal'
const messages = [
  {
    id: 1,
    primary: 'Mariana Santos',
    secondary: "Sou apaixonada pela natureza",
    nota: 78
  },
  {
    id: 2,
    primary: 'José Aleberto',
    secondary: `Eu me preocupo muito com o meio ambiente`,
    nota: 90
  },
  {
    id: 3,
    primary: 'Ana Luiza',
    secondary: 'Fazer sua parte já incrível',
    nota: 67
  },
  {
    id: 4,
    primary: 'Helen Rocha',
    secondary: "Sou apaixonada pela natureza e por animais",
    nota: 99
  },
  {
    id: 5,
    primary: 'Maurício Pires',
    secondary: `Eu me preocupo muito com o meio ambiente e com todos`,
    nota: 97
  },
  {
    id: 6,
    primary: 'Maria Helena',
    secondary: "Sou apaixonada pela natureza e por animais",
    nota: 67
  },
  {
    id: 7,
    primary: 'João Paulo',
    secondary: `Eu me preocupo muito com o meio ambiente e com todos`,
    nota: 90
  }
];

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  fraseNatureza:{
      textAlign: 'center',
      width: '100%',
      color:'#fff'
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(true)
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          O quanto eu me importo com a natureza
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person, nota }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Últimas Respostas</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <FaceIcon/>
                </ListItemAvatar>
                <div className="d-flex w-100">
                <ListItemText primary={primary} secondary={secondary} />
                <Avatar className={classes.avatar} >{nota}</Avatar>
                </div>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={()=> setOpen(true)}>
            <PlayArrowIcon />
           
          </Fab>
          <Typography className={`${classes.fraseNatureza} mt-2`} variant="h6"  align="center">
         Veja o quanto você ama a natureza
        </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={()=> setOpen(false)}/>
    </React.Fragment>
  );
}