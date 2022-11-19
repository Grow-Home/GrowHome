import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// mock
import SpendingList  from '../sections/@dashboard/spendings/SpendingList';
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function SpendingPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
     
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <SpendingList products={PRODUCTS} />
      </Container>
    </>
  );
}
