import React from 'react';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import './header.css';

//Declare global style variables
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 60,
    padding: '0 30px',
  },
});


export default function Header() {
const classes = useStyles();

const [value, setValue] = React.useState(0);
return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" href="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" href="/about" icon={<InfoIcon />} />
      <IconButton href="https://forms.gle/1ATTh1j9ajDVSBKA7" label="Feeback" ><DescriptionIcon/>Feedback</IconButton>
    </BottomNavigation>
  );
}