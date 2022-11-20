import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import AppIcon from "../images/growhome-high-resolution-logo-color-on-transparent-background.png";


// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {

  // OR using local (public folder)
  // -------------------------------------------------------
   const logo = (
     <Box
       component="img"
       src="https://github.com/Grow-Home/GrowHome/blob/main/grow-home-app/public/assets/logo.svg"
       sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
     ><img width="60%" src={AppIcon} alt=""/>
     </Box>
   );


  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      <img width={50} height={40} src={AppIcon} alt=""/>
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
