import PropTypes from 'prop-types';
import React from 'react';
// @mui
import { Box, Card, Grid, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import SvgColor from '../../../components/svg-color';

// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';
import Food from '../../../components/images/food.png';
import Activities from '../../../components/images/activity.png';
import FixedCosts from '../../../components/images/fixedCosts.png';
import Euro from '../../../components/images/EuroSign.png';
import Plus from '../../../components/images/plus.png';
import Minus from '../../../components/images/minus.png';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------


export default function OneSpending({product}) {
  OneSpending.propTypes = {
        product: PropTypes.object,
  };

  const { id, cover, name, price, categories, date, colors, status } = product;

  function getIconOfCategory(category){
    let iconImage = null
    if (category === "Food"){
        iconImage =  <img width="100px" src={Food} alt="Logo" />
    } else if (category === "Activities"){
        iconImage = <img width="100px" src={Activities} alt="Logo" />
    } else {
        iconImage = <img width="100px" src={FixedCosts} alt="Logo" />
    }
    return iconImage
    
  }

  return (
    <Card>
      <Box sx={{ position: 'relative',ml: 1  }} >
        <Grid container spacing={1} >
            <Grid item  >
                <Box display="flex" justifyContent="flex-end">
                    {name === "Income" &&  <img width="40px" src={Plus} alt="Logo" />}
                    {name !== "Income" &&  <img width="40px" src={Minus} alt="Logo" />}
                </Box>
            </Grid>
            <Grid  sx={{ pl: 65 }} item xs={3} >
                <Typography variant="h6"><b>{name}</b></Typography>
                <Typography>{date}</Typography>
                <Typography variant="h8" style={{textOverflow: 'ellipsis', display: 'inline', whiteSpace: 'nowrap'}} > {price} €</Typography>
            </Grid>
            <Grid item justifyContent="flex-end" alignContent="flex-end"  >
                <Box  sx={{ pl: 65 }} display="flex" justifyContent="flex-end" alignSelf="end" >
                    {getIconOfCategory(categories)}
                </Box>
            </Grid>
        </Grid>
      </Box>

    </Card>
  );
}
