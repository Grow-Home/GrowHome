import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import OneSpending from './OneSpending';

// ----------------------------------------------------------------------

SpendingList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function SpendingList({ products}) {
  return (
    <Grid container spacing={3} >
      {products.map((product) => (
        <Grid item xs={12} >
            <OneSpending product={product}/>
        </Grid>
          
        
      ))}
    </Grid>
  );
}
