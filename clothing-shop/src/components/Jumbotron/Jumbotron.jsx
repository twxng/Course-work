import { Button, Typography, Box } from '@mui/material';
import './Jumbotron.css';
import PropTypes from 'prop-types';

const Jumbotron = ({ title, children }) => {
    return (
        <Box className="jumbotron" sx={{ textAlign: 'center', padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                {title}
            </Typography>
            {children} 
            <Button variant="contained" color="error" size="large" sx={{ marginRight: '1rem' }}>
                Getting Start
            </Button>
            <Button variant="outlined" color="error" size="large">
                Learn More
            </Button>
        </Box>
    );
};

Jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Jumbotron; 