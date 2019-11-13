import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default function RadioButtons({opcoes, onSelect}) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    onSelect(Number(event.target.value))
  };

  return (
    <div >
        <div>
            Nunca
       <Radio
              checked={selectedValue === String(2)}
              onChange={handleChange}
              value={String(2)}
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            </div>
            <div>
            Pouco
       <Radio
              checked={selectedValue === String(3)}
              onChange={handleChange}
              value={String(3)}
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            </div>
            <div>
            Muito
       <Radio
              checked={selectedValue === String(5)}
              onChange={handleChange}
              value={String(5)}
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            </div>
            <div>
            Sempre
       <Radio
              checked={selectedValue === String(10)}
              onChange={handleChange}
              value={String(10)}
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            </div>
      
      
    </div>
  );
}
