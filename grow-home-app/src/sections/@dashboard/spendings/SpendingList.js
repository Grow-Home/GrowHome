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
    <Grid container spacing={1} >
      {products.map((product) => (
        <Grid item xs={12}  key={product.id}>
            <OneSpending product={product}/>
        </Grid>
        
      ))}
    </Grid>
  );
}
