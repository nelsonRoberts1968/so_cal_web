import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    height: 54,
    [theme.breakpoints.up('sm')]: {
        height: 60,
    },
}));

export default Toolbar;