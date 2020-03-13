import checkPropType from 'check-prop-types';

/**
 * Return node(s) with given data-test attributes
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkPropsType = (component, conformingProps) => {
   const propError = checkPropType(
       component.propTypes,
       conformingProps,
       'prop',
       component.name);

   return propError;
};