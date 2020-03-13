import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../test/testUtil';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the Congrats component.
 * @function setup
 * @params {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}) => {
    return shallow(<Congrats {...props} />);
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