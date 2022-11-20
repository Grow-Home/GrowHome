import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import React from 'react';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Box, Card, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
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
DashboardAppPage.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="l">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Current capital" total={41000}  />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Monthly Saving" total={1200} color="info"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Time in Months until grown house" total={8} color="warning" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Interest Rate" total={3.67} color="error"  />
          </Grid>

          

          <Grid item xs={12} md={6} lg={8}>
              {/* House Building Blocks  */}
              <Box sx={{ pl:10, pt:2 }} >
                  <CircularStatic/>
              </Box>
          </Grid>
          
          <Grid item xs={12} md={18} lg={14}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Spendings Breakdown"
              chartData={[
                { label: 'Food', value: 4344 },
                { label: 'Clothes', value: 1443 },
                { label: 'Activities', value: 4443 },
                { label: 'Fixed Cost', value: 5435 },
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
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
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
              title="Tips for saving money!"
              list={[...Array(4)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Drink coffee at home. Expection: HackaTUM :D',
                  'Don\'t scroll through the shopping apps. You going to end up buying something for sure!',
                  'Bring back the student spirit, bring back Pasta with Pesto.',
                  'Bring the vintage style back. Grab yourself something from the thrift shop.',
                  
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="You saved last month 1300 €.
                  Your current mortgage rate would be 1180€.
                  So get going and try to reduce coffee !" total={"Monthly mortgage rate"}  />
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
