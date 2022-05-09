import React from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Box, Fab, Grid, Paper, Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { InitPost } from "./interfaces";

const Details: React.FC = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const post = state as InitPost;

    return (
        <div data-testid="details">
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
                            {JSON.stringify(post, null, 2)}
                        </Paper>

                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}

export default Details;