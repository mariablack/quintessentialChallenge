import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../images/menu.svg';
import { ReactComponent as House } from '../images/house.svg';
import { ReactComponent as MenuLst } from '../images/menulist.svg';
import { ReactComponent as Store } from '../images/store.svg';
import { ReactComponent as Store2 } from '../images/store2.svg';
import { ReactComponent as Store3 } from '../images/store3.svg';
import { ReactComponent as Store4 } from '../images/store4.svg';
import { ReactComponent as Input } from '../images/input.svg';
import { ReactComponent as Settings } from '../images/settings.svg';

import font from '../fonts/ProductSansRegular.ttf';
import fontPro from '../fonts/SFProDisplay-Regular.ttf';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    '&::before': {
      content: '',
      backgroundColor: 'transparent',
    },
    '& .MuiButtonBase-root.MuiAccordionSummary-root': {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      minHeight: '0px',
    },
  },
});

const styles = {
  wrapper: {
    width: '226px',
    height: 'auto',
    padding: '40px 0px',
    borderRight: '2px solid #DADADA',
  },
  logo: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '100px',
  },
  title: {
    width: '119px',
    height: '39px',
    color: '#282121',
    fontSize: '16px',
    fontFamily: font,
    lineHeight: '19px',
    display: 'flex',
    alignItems: 'center',
    font: fontPro,
  },
  span: {
    margin: '0px 8px',
    whiteSpace: 'nowrap',
    fontSize: '10px',
    lineHeight: '12px',
    color: 'rgba(0, 0, 0, 0.58)',
    width: '109px',
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  links: {
    backgroundColor: '#FFF',
    width: '226px',
    height: '44px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    font: fontPro,
    marginLeft: '-30px',
  },
  home: {
    backgroundColor: '#072C5E',
    width: '226px',
    height: '44px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    font: fontPro,
  },
  text: {
    padding: '0px 10px',
    font: fontPro,
  },
  img: {
    marginLeft: '-32px',
  },
  accordions: {
    height: '533px',
    borderBottom: '2px solid #DADADA',
  },
  settings: {
    fontSize: '10px',
    lineHeight: '12px',
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.58)',
    marginLeft: '8px',
  },
  bottom: {
    padding: '20px',
    display: 'flex',
  },
};

const Menu = () => {
  const classes = useStyles();

  return (
    <div style={styles.wrapper}>
      <div style={styles.logo}>
        <Logo />
        <div style={styles.title}>Warehouse management</div>
      </div>
      <div style={styles.accordions}>
        <Accordion className={classes.root}>
          <AccordionSummary
            expandIcon={<MenuLst />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span style={styles.span}>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</span>
          </AccordionSummary>
          <AccordionDetails style={styles.details}>
            <div style={styles.home}>
              <House />
              <span style={styles.text}>Κεντρική σελίδα</span>
            </div>
            <div style={styles.links}>
              <Store />
              <span style={styles.text}>Αποθήκη 1</span>
            </div>
            <div style={styles.links}>
              <Store2 />
              <span style={styles.text}>Αποθήκη 2</span>
            </div>
            <div style={styles.links}>
              <Store3 />
              <span style={styles.text}>Αποθήκη 3</span>
            </div>
            <div style={styles.links}>
              <Store4 />
              <span style={styles.text}>Αποθήκη 4</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.root}>
          <AccordionSummary
            expandIcon={<MenuLst />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span style={styles.span}>ΚΑΤΑΧΩΡΗΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</span>
          </AccordionSummary>
          <AccordionDetails style={styles.details}>
            <div style={styles.links}>
              <Input /> <span style={styles.text}>Καταχώρηση</span>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <div style={styles.bottom}>
          <Settings />
          <span style={styles.settings}>ΡΥΘΜΙΣΕΙΣ</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
