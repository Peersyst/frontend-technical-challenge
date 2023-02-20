import React, { ChangeEvent, FunctionComponent } from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './Checkbox.styles';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput checked={checked} onChange={onChange} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
