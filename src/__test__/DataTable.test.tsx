import { render, screen } from '@testing-library/react';
import DataTable from '../components/pages/DataTable';

it('Render DataTable component', () => {
    interface InitPost {
        title: string,
        url: string,
        created_at: string,
        author: string,
        created_at_i: number,
    }
    const posts: InitPost[] = []
    render(<DataTable posts={posts} paginationPage={0} rowsPerPage={0} getDetails={function () { }} isLoading={true} />);
    const dataTable = screen.getByTestId("dataTable");
    expect(dataTable).toBeInTheDocument();
});

it('Check If the Table is Rendered?', () => {
    interface InitPost {
        title: string,
        url: string,
        created_at: string,
        author: string,
        created_at_i: number,
    }
    const posts: InitPost[] = []
    render(<DataTable posts={posts} paginationPage={0} rowsPerPage={0} getDetails={function () { }} isLoading={true} />);
    const dataTable = screen.getByRole("table");
    expect(dataTable).toBeInTheDocument();
});

it('Check if the data row is rendered in the table?', () => {
    interface InitPost {
        title: string,
        url: string,
        created_at: string,
        author: string,
        created_at_i: number,
    }
    const posts: InitPost[] = []
    render(<DataTable posts={posts} paginationPage={0} rowsPerPage={0} getDetails={function () { }} isLoading={true} />);
    const dataTable = screen.getByTestId("dataRow");
    expect(dataTable).toBeInTheDocument();
});
