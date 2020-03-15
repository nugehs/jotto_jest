import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory} from '../test/testUtil';
import Input from './Input';

const setup = (initialState = {}) =>  {
    const store = storeFactory();
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialstate = { success: false };
            wrapper = setup(initialstate);
        });

        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1)
        });

        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1)
        });

        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1)
        });
    });

    describe('word has been successfully guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialstate = { success: true };
            wrapper = setup(initialstate);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1)
        });

        test('does not render input box', () => {

        });

        test('does not render submit button', () => {

        });
    });
});

describe('update state', () => {
    test('renders submit button', () => {

    });
});
