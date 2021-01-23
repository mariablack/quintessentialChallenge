import React from 'react';

import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import Action from '../components/Action';
import font from '../fonts/SFProDisplay-Regular.ttf';

import { elipseRed, elipseYellow, elipseGreen } from '../images/elipses';

const styles = {
  wrapper: {
    position: 'relative',
    width: '1366px',
    height: '768px',
    background: '#FFFFFF',
    display: 'flex',
  },
  right_menu: {
    width: '1150px',
  },
  title: {
    width: '292px',
    height: '26px',
    color: '#282121',
    fontSize: '21px',
    fontFamily: font,
    lineHeight: '25px',
    display: 'flex',
    alignItems: 'center',
    padding: '38px',
    fontWeight: '600',
  },
  top_menu: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '83px',
    borderBottom: '2px solid #DADADA',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '70px auto',
    height: '500px',
    width: '900px',
  },
};
const data = [
  {
    title: 'ΕΞΑΓΩΓΗ',
    description: 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη',
    icon: elipseRed,
  },
  {
    title: 'ΜΕΤΑΚΙΝΗΣΗ',
    description: 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη',
    icon: elipseYellow,
  },
  {
    title: 'ΕΙΣΑΓΩΓΗ',
    description: 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη',
    icon: elipseGreen,
  },
];

const Homepage = () => {
  <div style={styles.wrapper}>
    <Menu />
    <div style={styles.right_menu}>
      <div style={styles.top_menu}>
        <div style={styles.title}>Κεντρική σελίδα</div>
        <SearchBar />
      </div>
      <div style={styles.actions}>
        {data.map((item) => (
          <Action action={item} />
        ))}
      </div>
    </div>
  </div>;
};

export default Homepage;
