import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Column, TableDataInit } from './interfaces';

const columns: readonly Column[] = [
    { id: "title", label: "Title", minWidth: 170 },
    { id: "url", label: "URL", minWidth: 150 },
    { id: "created_at", label: "Created At", minWidth: 100 },
    { id: "author", label: "Author", minWidth: 100 },
];

const DataTable: React.FC<TableDataInit> = ({ posts, paginationPage, rowsPerPage, getDetails, isLoading }) => {

    return (
        <Table stickyHeader aria-label="sticky table" size='small' data-testid="dataTable">
            <TableHead>
                <TableRow data-testid="dataRow">
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
                <TableRow >
                    <TableCell ></TableCell>
                    <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
                        {isLoading && <CircularProgress />}
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
                {
                    posts.slice((paginationPage - 1) * rowsPerPage, (paginationPage - 1) * rowsPerPage + rowsPerPage).map((post, index) => {
                        return (
                            <>
                                <TableRow
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        getDetails(post)
                                    }}
                                    key={index}
                                    hover
                                >

                                    <TableCell>{post?.title}</TableCell>
                                    <TableCell>{post?.url}</TableCell>
                                    <TableCell>{post?.created_at}</TableCell>
                                    <TableCell>{post?.author}</TableCell>
                                </TableRow>
                            </>
                        )
                    })
                }
            </TableBody>
        </Table>
    );
};

export default DataTable;