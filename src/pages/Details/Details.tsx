import { Box, Button, Card, CardContent, CircularProgress, Fab, Grid, Paper, Tooltip, Typography } from '@mui/material';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Postinit } from '../Home/Home';

const Details = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const post: Postinit | any = location?.state;
    const data = JSON.stringify(post);


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} >
                    <Box sx={{ p: 5 }}>
                        <Tooltip title="Back to Home Page">
                            <Fab size="small" color="secondary" aria-label="add"
                                onClick={() => navigate('/')}
                            >
                                <AiOutlineArrowLeft />
                            </Fab>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 25, mt: 3 }}>raw JSON</Typography>
                        <Paper elevation={2} sx={{ p: 5, mt: 3 }}>
                            {data}
                        </Paper>

                    </Box>
                </Grid>
            </Grid>

        </div>
    );
};

export default Details;