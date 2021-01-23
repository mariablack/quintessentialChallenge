/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

import { ReactComponent as Logo } from '../images/login.svg';
import font from '../fonts/ProductSansRegular.ttf';

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        color: '#474EBB',
        borderRadius: '8px',
        border: '2px solid #B8B8B8',
        lineHeight: '22px',
        fontSize: '18px',
        textAlign: 'center',
        letterSpacing: '0.035em',
      },
    },
    MuiFocused: {
      border: '2px solid #474EBB',
    },
    MuiButton: {
      contained: {
        color: '#FFFF',
        backgroundColor: '#474EBB',
        fontSize: '18px',
        lineHeight: '22px',
        textTransform: 'capitalize',
        letterSpacing: '0.035em',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        width: '257px',
        height: '48px',
        margin: '27% 0% 15% 0%',
      },
    },
  },
});

const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    width: '1366px',
    height: '768px',
    background: '#FFFFFF',
  },
  fields: {
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    width: '769px',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: font,
    fontSize: '36px',
    lineHeight: '44px',
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    color: '#474EBB',
    marginBottom: '57px',
  },
  textField: {
    background: '#FFFFFF',
    fontFamily: font,
    borderRadius: '8px',
    width: '402px',
    height: '56px',
    marginBottom: '28px',
  },
  label: {
    fontFamily: font,
    fontSize: '16px',
    lineHeight: '19px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  link: {
    width: '257px',
    height: '20px',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    letterSpacing: '0.035em',
    color: '#000',
  },
};

const LoginScreen = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const authenticated = useSelector(
    (state) => state.authentication.authenticated
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    if (mail && password) {
      dispatch(userActions.login(mail));
    }
  };

  useEffect(() => {
    if (authenticated) {
      history.push('/homepage');
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.wrapper}>
        <Logo style={styles.logo} />
        <div style={styles.fields}>
          <p style={styles.title}>ΣΥΝΔΕΣΗ</p>
          <p style={styles.label}>Δ/ση ηλεκτρονικού ταχυδρομείου*</p>
          <TextField
            required
            id="mail"
            variant="outlined"
            value={mail}
            style={styles.textField}
            onChange={(event) => {
              setMail(event.target.value);
            }}
          />
          <p style={styles.label}>Κωδικός πρόσβασης</p>
          <TextField
            required
            id="password"
            variant="outlined"
            value={password}
            style={styles.textField}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <div>
            <Button
              variant="contained"
              onClick={(event) => submitHandler(event)}
            >
              Είσοδος
            </Button>
          </div>
          <p style={styles.link}>Ξέχασα τον κωδικό μου</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginScreen;
