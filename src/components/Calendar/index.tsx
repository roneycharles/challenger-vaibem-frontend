import React, { useRef, useState, useEffect } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';

import { CalendarInput } from './styles';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
}
const DatePicker: React.FC<Props> = ({ name, ...rest }) => {
  const datepickerRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <CalendarInput
      ref={datepickerRef}
      selected={date}
      onChange={setDate}
      placeholderText='Data de Entrega'
      {...rest}
    />
  );
};
export default DatePicker;
