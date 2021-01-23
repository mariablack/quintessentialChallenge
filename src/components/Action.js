import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    position: 'relative',
    height: '100px',
  },
  box: {
    background: '#FDFDFD',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '5px',
    width: '231px',
    height: '82px',
    padding: '6px 20px',
    position: 'relative',
    margin: '86px 50px 0px 0px',
  },
  title: {
    fontSize: '16px',
    lineHeight: '19px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    padding: '10px',
    fontWeight: '600',
  },
  description: {
    fontSize: '13px',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    opacity: '0.34',
    padding: '0px 10px',
  },
  elipse: {
    position: 'absolute',
    top: 'calc(50% - -5px)',
    left: '-35px',
  },
};

const Action = (props) => {
  const { action } = props;

  return (
    <div style={styles.container}>
      <div style={styles.elipse}>{action.icon}</div>
      <div style={styles.box}>
        <div style={styles.title}>{action.title}</div>
        <div style={styles.description}>{action.description}</div>
      </div>
    </div>
  );
};

Action.propTypes = {
  action: PropTypes.object.isRequired,
};

export default Action;
