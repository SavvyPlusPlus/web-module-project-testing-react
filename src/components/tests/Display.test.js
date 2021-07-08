import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import Show from './../Show';

const testShow = {
    //add in approprate test data structure here.
    name: "Stranger Things",
    seasons: [
        {
            id: 0,
            name: "Season 1",
            episodes: []
        }
    ],
    summary: "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl."
};

test('render component without any props', () => {
    render(<Display />);
});

test('display show component on button press', () => {
    render(<Display />);
    render(<Show show={testShow} selectedSeason={0} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const show = screen.getByTestId('show-container');
    expect(show).toBeInTheDocument();
});

test('display correct amount of seasons as the ones passed on the component', () => {
    render(<Display />);
    render(<Show show={testShow} selectedSeason={0} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const option = screen.getAllByRole('option');
    expect(option[0].value).toEqual('none');
    expect(option[1].value).toEqual('0');
    expect(option.length).toEqual(2);
});

test('function is called on button press', () => {
    const mock = jest.fn(data => console.log(data));





    render(<Display displayFun={mock} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mock).toHaveBeenCalledTimes(0);
});