import React, {useState} from "react";
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import {
    DatePicker as MuiDatePicker,
    TimePicker as MuiTimePicker,
} from '@material-ui/pickers';


export default function DateTimePicker({
    className,
    hiddenInput,
    inputProps,
    labelDate,
    labelTime,
    onDateTimePickerChange,
    value,
    ...props
}) {
    // const initialPickerValue = (value) ? moment(value) : moment();
    const [inputValue, setInputValue] = useState(value || getInputValue());
    const [pickerValue, setPickerValue] = useState(moment(value));
    const {
        inputRef,
        ...restInputProps
    } = inputProps;

    function getInputValue(date) {
        return `${moment(date).utc().format('YYYY-MM-DD HH:MM:SS')} Z`;
    }

    function handleDateTimePickerChange(date) {
        setInputValue(moment(date).utc().format());
        setInputValue(getInputValue(date));
        setPickerValue(date);
        onDateTimePickerChange(date);
    }

    function setRef(node = {}) {
        if (typeof node === 'object' && node !== null) {
            console.log({node})
        }

        inputRef(node);
    }

    console.log({inputValue, restInputProps});
    return (
        <div className={classnames('date-time-picker', className)}>
            <MuiDatePicker label={labelDate} value={pickerValue} onChange={handleDateTimePickerChange} />
            <MuiTimePicker label={labelTime} value={pickerValue} onChange={handleDateTimePickerChange} />
            {hiddenInput && <input ref={setRef} {...restInputProps} type="hidden" value={inputValue} />}
        </div>
    );
}

DateTimePicker.propTypes = {
    className: PropTypes.string,
    /** indicates whether to render the hidden input element for the form or not. */
    hiddenInput: PropTypes.bool,
    /** props for the actual hidden input element to abe applied to the form. */
    inputProps: PropTypes.object,
    /** Label for the date field */
    labelDate: PropTypes.string,
    /** Label for the time field */
    labelTime: PropTypes.string,
    /**
        Callback function for the onChange event of the DateTimePicker component.
        Returns a moment parsable date.
    */
    onDateTimePickerChange: PropTypes.func,
    /** Initial value for the date picker component. Should be a moment parsable date */
    value: PropTypes.string,
};

DateTimePicker.defaultProps = {
    hiddenInput: true,
    labelDate: 'Date',
    labelTime: 'Time',
    onDateTimePickerChange: () => null,
};
