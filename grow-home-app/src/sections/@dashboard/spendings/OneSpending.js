import PropTypes from 'prop-types';
import React from 'react';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
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

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
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
        iconImage =  <img src={Food} alt="Logo" />
    } else if (category === "Activities"){
        iconImage = <img src={Activities} alt="Logo" />
    } else {
        iconImage = <img src={FixedCosts} alt="Logo" />
    }
    return iconImage
  }

  return (
    <Card>
      <Box sx={{ pt: '100%', width:'100%', position: 'relative' }}>

          <Label
            variant="filled"
            color={'info'}

          >
            {name}
          </Label>
        
        <p>{categories}</p>
        {getIconOfCategory({categories})}
      </Box>

   
    </Card>
  );
}
