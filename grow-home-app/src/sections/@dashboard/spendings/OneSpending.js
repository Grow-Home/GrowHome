import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------
/*
OneSpending.propTypes = {
  product: PropTypes.object,
};
//const { name, cover, price, colors, status, priceSale } = product;
*/
export default function OneSpending() {
  

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>

          <Label
            variant="filled"
            color={'info'}

          >
            Category
          </Label>
        
        <p>Hallo</p>
      </Box>

   
    </Card>
  );
}
