import { React } from 'react';
import PropTypes from 'prop-types';
import MuiPaper from '@mui/material/Paper';
import { styled, ThemeProvider } from '@mui/material/styles';

const theme = require('../theme');

const PaperRoot = styled(MuiPaper, {
    shouldForwardProp: (prop) => prop !== 'background' && prop !== 'padding',
})(({ theme, background, padding }) => ({
    backgroundColor: theme.palette.secondary[background],
    ...(padding && {
        padding: 1,
    }),
}));

function Paper(props) {
    const { background, classes, className, padding = false, ...other } = props;

    return (
        <PaperRoot
            square
            elevation={3}
            background={background}
            padding={padding}
            className={className}
            {...other}
        />
    );
}

Paper.propTypes = {
    background: PropTypes.oneOf(['dark', 'light', 'main']).isRequired,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    className: PropTypes.string,
    padding: PropTypes.bool,
};

export default Paper;