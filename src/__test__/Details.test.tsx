import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import Details from "../components/pages/Details";
import {createMemoryHistory} from 'history';

it('Render details component', () => {

    const history = createMemoryHistory();
    history.push("/details", {title: "", url: "", created_at: Date(), author: ""});

    render(
        <Router location={history.location} navigator={history}>
            <Details/>
        </Router>
    );
    const details = screen.getByTestId("details");
    expect(details).toBeInTheDocument();
});


it('Check the data is rendering in the Grid tag?', () => {

    const history = createMemoryHistory();
    history.push("/details", "This is Musfique Hasan");
    render(
        <Router location={history.location} navigator={history}>
            <Details/>
        </Router>
    );
    const details = screen.getByText("This is Musfique Hasan");
    expect(details).toBeInTheDocument();
});
