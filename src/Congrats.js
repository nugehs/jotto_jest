import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - react props
 * @returns {JSX.Element} - Render component (or nulll if 'success props is ')
 */
export default (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}
