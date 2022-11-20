import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import House0 from './images/house0.png';
import House1 from './images/house1.png';
import House2 from './images/house2.png';
import House3 from './images/house3.png';
import House4 from './images/house4.png';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <Typography variant="h3" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
        </Typography>
      <CircularProgress size={450} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pl:10,
        }}
      >

          {props.value === 0 &&
                  <img  width="60%" src={House0} alt=""/>
          }
          {props.value === 25 &&
              <img width="60%" src={House1} alt=""/>
          }
          {props.value === 50 &&
              <img width="60%" src={House2} alt=""/>
          }
          {props.value === 75 &&
              <img width="60%" src={House3} alt=""/>
          }
          {props.value === 100 &&
              <img width="60%" src={House4} alt=""/>
          }
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 25));
    }, 2800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
