import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Checkbox as MdcCheckbox} from '@rmwc/checkbox';
import './Checkbox.scss';

/**
    Checkbox form element which uses a Material Design libarary.
*/
export default function Checkbox({
    className,
    fullWidth,
    inputClassName,
    inputRef,
    label,
    name,
    onChange,
    rootProps,
    value,
    ...props
}) {
    const [inputValue, setInputValue] = useState(value);

    function handleChange(event) {
        setInputValue(event.target.value);
        onChange(event);
    }

    function getClass() {
        return classnames({
            checkbox: true,
            'checkbox--full-width': fullWidth,
        }, className);
    }

    return (
        <MdcCheckbox
            {...props}
            className={getClass()}
            inputRef={inputRef}
            label={label}
            name={name}
            onChange={handleChange}
            value={inputValue}
        />
    );
}

Checkbox.propTypes = {
    className: PropTypes.string,
    /**
        Sets the textfield to use the fullWidth which is preferred in most cases so
        the layout controls the size of the fields.
    */
    fullWidth: PropTypes.bool,
    /** The className that will be on the input if needed. */
    inputClassName: PropTypes.string,
    /** This is a prop that will be passed to the ref prop of the <input /> element*/
    inputRef: PropTypes.func,
    /**
        Creates a label element for the input. It's recommended to use this prop to show
        the special label made for the Checkbox component.
    */
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    /** By default, props spread to the input. These props are for the component's root container. */
    rootProps: PropTypes.object,
    value: PropTypes.string,
};

Checkbox.defaultProps = {
    fullWidth: true,
    onChange: () => null,
    rootProps: {},
    value: '',
};
