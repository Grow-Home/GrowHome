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
        <Grid key={product.id}  item xmd={6} xs={12} >
            <OneSpending style={{height: '100%', width: '30px'}} product={product}/>
        </Grid>
          
        
      ))}
    </Grid>
  );
}
