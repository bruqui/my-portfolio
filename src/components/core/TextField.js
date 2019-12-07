import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {TextField as MdcTextField} from '@rmwc/textfield';
import './TextField.scss';

export default function TextField({
    className,
    fieldError,
    fullWidth,
    inputClassName,
    inputRef,
    label,
    name,
    onChange,
    rootProps,
    textarea,
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
            'text-field': true,
            'text-field--full-width': fullWidth,
            'text-field--textarea': textarea,
        }, className);
    }

    return (
        <React.Fragment>
            <MdcTextField
                {...props}
                className={getClass()}
                inputRef={inputRef}
                label={label}
                name={name}
                onChange={handleChange}
                textarea={textarea}
                value={inputValue}
            />
            {fieldError && <div className="text-field__error">{fieldError}</div>}
        </React.Fragment>
    );
}

TextField.propTypes = {
    className: PropTypes.string,
    /** Error to be shown with the field from validation */
    fieldError: PropTypes.string,
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
        the special label made for the TextField component.
    */
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    /** By default, props spread to the input. These props are for the component's root container. */
    rootProps: PropTypes.object,
    /** Changes the input element to a textarea element */
    textarea: PropTypes.bool,
    value: PropTypes.string,
};

TextField.defaultProps = {
    fullWidth: true,
    onChange: () => null,
    rootProps: {},
    value: '',
};
