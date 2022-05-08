import {
    Box,
    CircularProgress,
    Container,
    Grid,
    Pagination,
    Paper,
    TableContainer,
} from "@mui/material";
import DataTable from "./DataTable";
import { InitPost } from "./interfaces";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "./DataProvider";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { paginationPage, posts, isLoading, setPaginationPage, rowsPerPage, totalPostCount, setTempPageStart, tempPageStart } = useContext(DataContext);

    const getDetails = (post: InitPost) => {
        navigate(
            '/details',
            { state: post }
        )
    }

    const handleChangePage = async (event: unknown, newPage: number) => {
        setPaginationPage(newPage);
        setTempPageStart(newPage)
        // console.log(newPage);

    }

    return (
        <div >
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} >
                    <Box sx={{ p: 5 }}>
                        <Paper elevation={2} >
                            <TableContainer sx={{ maxHeight: "80vh" }} >
                                <DataTable posts={posts} paginationPage={paginationPage} rowsPerPage={rowsPerPage} getDetails={getDetails} isLoading={isLoading}></DataTable>
                            </TableContainer>
                            <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>

                                <Pagination color="primary" data-testid="pagination"
                                    count={totalPostCount / rowsPerPage}
                                    page={tempPageStart ? tempPageStart : paginationPage}
                                    onChange={handleChangePage}
                                />

                            </Box>
                        </Paper>

                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;