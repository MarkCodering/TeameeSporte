import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import './footer_style.css';
import company_img from './footer_1.jpg';
import contact_img from './footer_2.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Footer(){
    const classes = useStyles();

    return (
      <div id="footer_background" className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={4} direction="row" justify="flex-start" alignItems="stretch">
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={company_img} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    About Teamee
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Contact Information: We are an startup that provides connectivity service for those who is passionate about sports
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={contact_img} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Contact Information
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Contact Information: 409416533@gms.tku.edu.tw
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}