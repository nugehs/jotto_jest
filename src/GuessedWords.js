import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - react props
 * @returns {JSX.Element} - Render component (or null if 'success props is ')
 */
const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess secret word!
            </span>
        );
    }
    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        }),
    ).isRequired
};

export default GuessedWords;
