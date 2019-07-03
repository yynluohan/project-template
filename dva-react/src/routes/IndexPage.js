import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage(props) {

  const { name } = props.example;

  return (
    <div className={styles.normal}>
      { name }
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    example: state.example
  }
}

export default connect(mapStateToProps)(IndexPage);
