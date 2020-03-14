import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkPropsType } from '../test/testUtil';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{
        guessedWord: 'train',
        letterMatchCount: 3,
    }],
};

/**
 * Factory function to create ShallowWrapper for the GuessedWords component.
 * @function setup
 * @params {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}) => {
    const setUpProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords { ...setUpProps } />);
};

test('should not throw warning with expected props', () => {
    checkPropsType(GuessedWords, defaultProps);
});


describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp({ guessedWords: [] });
    });

    test('render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('render instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () =>  {
    let wrapper;
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];
    beforeEach(() => {
        wrapper = setUp({ guessedWords });
    });

    test('render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('render "guessed words" section', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordNodes.length).toBe(1);
    });

    test('correct number of guessed words displays', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});
