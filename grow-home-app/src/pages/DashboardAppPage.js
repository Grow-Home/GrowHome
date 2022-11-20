import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import React from 'react';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
import {Grid, Container, Box, Card, CardHeader, CardContent, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
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
                { label: 'Clothes', value: 5435 },
                { label: 'Activities', value: 1443 },
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
            <AppOrderTimeline
              title="Tips for saving money!"
              list={[...Array(4)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Drink coffee at home ☕. Exception: HackaTUM :D ',
                  'Don\'t scroll through the shopping apps. You going to end up buying something for sure!',
                  'Bring back the student spirit, bring back Pasta with Pesto.',
                  'Bring the vintage style back. Grab yourself something from the thrift shop.',

                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
          
      <Grid item xs={12} md={6} lg={4}>
          <Card >
            <CardHeader title={"Monthly mortgage rate"}  />

          <CardContent
            sx={{
              '& .MuiTimelineItem-missingOppositeContent:before': {
                display: 'none',
              },
            }}
          >
            <Timeline>
              You saved last month 1300 €.
              Your current mortgage rate would be 1180€.
              So get going !
            </Timeline>
          </CardContent>
          </Card>
      </Grid>


          
      </Grid>
   </Container>
    </>
  );
}
