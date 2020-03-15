import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory} from '../test/testUtil';
import Input from './Input';

const setup = (initialState = {}) =>  {
    const store = storeFactory();
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
};

setup();

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders componet without error', () => {

        });

        test('renders input box', () => {

        });

        test('renders submit button', () => {

        });
    });

    describe('word has been guessed', () => {

    });
});

describe('update state', () => {
    test('renders submit button', () => {

    });
});
