import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, Divider, Grid, IconButton, Slider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  root: {
    margin: '24px 24px 0 24px',
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  position: {
    marginBottom: 12
  },
  card: {
    border: 'solid'
  },
  cardContent: {
    padding: ' 0 40px 0 40px'
  },
  cardTitle: {
    padding: '16px 0 0 8px'
  },
  sliderTitle: {
    marginBottom: '32px'
  },
  favoriteIcon: {
    padding: '4px 4px 0 0'
  },
  divider: {
    margin: '0 0 24px 0'
  }
});

type StoreCardProps = {
  id: number;
  name: string;
  type: string;
  maxCapacity: number;
  currentCapacity: number;
  isFavorite: boolean;
  changeFavorite(): void;
};

export default function StoreCard({
  id,
  name,
  type,
  maxCapacity,
  currentCapacity,
  isFavorite,
  changeFavorite
}: StoreCardProps) {
  const classes = useStyles();

  return (
    <Grid container>
      <Card className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={2}>
            <CardHeader avatar={<Avatar aria-label="recipe" />} />
          </Grid>

          <Grid item xs={8}>
            <CardContent className={classes.cardTitle}>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" component="h2">
                {type}
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={2}>
            <Grid container justify="flex-end">
            <CardContent className={classes.favoriteIcon}>
              <IconButton aria-label="add to favorites" onClick={() => changeFavorite(id)}>
                {isFavorite ? (
                  <FavoriteIcon fontSize={'large'} />
                ) : (
                  <FavoriteBorderIcon fontSize={'large'} />
                )}
              </IconButton>
            </CardContent>
            </Grid>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <CardContent className={classes.cardContent}>
          <Typography variant="body1" className={classes.sliderTitle}>
            Anzahl Besucher
          </Typography>
          <Grid container justify="center">
            <Slider
              disabled
              step={1}
              aria-labelledby="discrete-slider"
              defaultValue={currentCapacity}
              max={maxCapacity}
              valueLabelDisplay="on"
            />
          </Grid>

          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography variant="body1">0</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{maxCapacity}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
