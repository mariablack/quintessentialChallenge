import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ReactComponent as Image } from '../images/search.svg';

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      fullWidth: {
        width: '477px',
        borderRadius: '8px',
        lineHeight: '18px',
        fontSize: '15px',
        fontWeight: '500',
        color: '000000',
        margin: '30px',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        border: '1px solid #B6B6B6',
      },
      adornedStart: {
        width: '477px',
        height: '36px',
      },
    },
  },
});

const styles = {
  span: {
    padding: '23px',
    width: '281px',
    lineHeight: '18px',
    fontWeight: '500',
    fontSize: '15px',
    color: 'rgba(0, 0, 0, 0.58)',
  },
};

const SearchBar = () => (
  <ThemeProvider theme={theme}>
    <FormControl fullWidth variant="outlined">
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start">
            <Image />
            <span style={styles.span}>
              Αναζήτηση υλικού, έλεγχος αποθεμάτων
            </span>
          </InputAdornment>
        }
      />
    </FormControl>
  </ThemeProvider>
);

export default SearchBar;
