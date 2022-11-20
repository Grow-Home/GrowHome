import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import React from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Box} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import CircularStatic from "../components/radial-progress";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="l">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Capital" total={714000}  />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Monthly Saving" total={131} color="info"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Time in Months" total={110} color="warning" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Interest Rate" total={234} color="error"  />
          </Grid>

            <Grid item xs={12} md={18} lg={14}>
                {/* House Building Blocks  */}
                <Box sx={{ pl:10, pt:2 }} >
                    <CircularStatic/>
                </Box>
            </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Spendings Breakdown"
              chartData={[
                { label: 'Food', value: 4344 },
                { label: 'Rent', value: 5435 },
                { label: 'Clothes', value: 1443 },
                { label: 'Fixed Cost', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="How will your loan change?"
              subheader="10 years of saving -> 1/3 of the loan is gone"
              chartData={[
                { label: '01/12/2022', value: 299025 },
                { label: '01/12/2023', value: 287318 },
                { label: '01/12/2024', value: 275600 },
                { label: '01/12/2025', value: 263870 },
                { label: '01/12/2026', value: 252129 },
                { label: '01/12/2027', value: 240376 },
                { label: '01/12/2028', value: 228611 },
                { label: '01/12/2029', value: 216834 },
                { label: '01/12/2030', value: 205045 },
                { label: '01/12/2031', value: 193245 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
