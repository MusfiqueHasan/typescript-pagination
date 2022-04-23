import { Button, CircularProgress, Grid, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { IoIosPaper } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react';
import { Box } from '@mui/system';

export interface Postinit {
  title: string,
  url: string,
  created_at: string,
  author: string
}

interface Column {
  id: 'title' | 'url' | 'created_at' | 'author' | 'action',
  label: string,
  minWidth?: number,
  align?: 'right'
}

const columns: Column[] = [

  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'url', label: 'URL', minWidth: 150 },
  { id: 'created_at', label: 'Created At', minWidth: 100 },
  { id: 'author', label: 'Author', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 100 },

]

const Home = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [localPage, setLocalPage] = useState<number>(1);
  const [posts, setPosts] = useState<Postinit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalElement, setTotalElement] = useState<number>(0);
  const rowPerPage: number = 10;


  useEffect(() => {

    const interval = setInterval(() => {
      setPage((_page) => _page + 1)
    }, 10000);

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    getPost();
  }, [page]);

  const getPost = async () => {
    try {
      const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`);
      const data = await res.json();

      const _posts = [...posts, ...data.hits];
      setPosts(_posts);
      setTotalElement(_posts.length);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangePage = (event: unknown, pageNum: number) => {
    setLocalPage(pageNum);
  }

  const getDetails = (post: Postinit) => {
    navigate('/details', {
      state: post
    })
  }

  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} >
          <Box sx={{ p: 5 }}>
            {
              loading ?
                <CircularProgress />
                :
                <Paper elevation={2} >
                  <TableContainer sx={{ maxHeight: "80vh" }} >
                    <Table stickyHeader aria-label="sticky table" size='small'>
                      <TableHead>
                        <TableRow>
                          {
                            columns?.map(column =>
                              <TableCell
                                key={column?.id}
                                align={column?.align}
                                style={{ background: '#2196f3', color: 'white' }}>
                                {column?.label}
                              </TableCell>
                            )
                          }
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          posts.slice((localPage - 1) * rowPerPage, (localPage - 1) * rowPerPage + rowPerPage).map((post) => <TableRow
                            key={post?.title}

                          >

                            <TableCell>{post?.title}</TableCell>
                            <TableCell>{post?.url}</TableCell>
                            <TableCell>{post?.created_at}</TableCell>
                            <TableCell>{post?.author}</TableCell>
                            <TableCell>
                              <Tooltip title="view Details">
                                <Button
                                  onClick={() => {
                                    getDetails(post)
                                  }}
                                  variant="contained" color="primary" size='small'>
                                  <IoIosPaper />
                                </Button>
                              </Tooltip>
                            </TableCell>
                          </TableRow>)
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
                    {
                      posts.length > 10 &&
                      <Pagination
                        color="secondary"
                        count={totalElement / 10}
                        page={localPage}
                        onChange={handleChangePage}
                      />
                    }
                  </Box>

                </Paper>
            }
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;