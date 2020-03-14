import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {
    findByTestAttr,
    checkPropsType
} from '../test/testUtil';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

/**
 * Factory function to create ShallowWrapper for the Congrats component.
 * @function setup
 * @params {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}) => {
    const setUpProps = { ...defaultProps, ...props };
    return shallow(<Congrats { ...setUpProps } />);
};

test('renders without error render', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setUp({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty message when `success` prop is true', () => {
    const wrapper = setUp({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
   const expectedProps = { success: false };
   const propError = checkPropsType(Congrats, expectedProps);
   expect(propError).toBeUndefined()
});