import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import styles from './index.less';

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="validation.password.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="validation.password.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="validation.password.strength.short" />
    </div>
  ),
  long: (
    <div className={styles.error}>
      <FormattedMessage id="validation.password.strength.long" />
    </div>
  ),
};

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
  long: 'exception',
};

const getPasswordStatus = value => {
  if (value && value.length > 9 && value.length < 13) {
    return 'ok';
  }
  if (value && value.length > 5 && value.length < 13) {
    return 'pass';
  }
  if (value && value.length > 12) {
    return 'long';
  }
  return 'poor';
};

const renderPasswordProgress = value => {
  const passwordStatus = this.getPasswordStatus(value);
  return value && value.length ? (
    <div className={styles[`progress-${passwordStatus}`]}>
      <Progress
        status={passwordProgressMap[passwordStatus]}
        className={styles.progress}
        strokeWidth={6}
        percent={value.length * 10 > 100 ? 100 : value.length * 10}
        showInfo={false}
      />
    </div>
  ) : null;
};

export default props => (
  <Popover
    getPopupContainer={node => node.parentNode}
    content={
      <div style={{ padding: '4px 0' }}>
        {passwordStatusMap[this.getPasswordStatus(props.value)]}
        {this.renderPasswordProgress(props.value)}
        <div style={{ marginTop: 10 }}>
          <FormattedMessage id="validation.password.strength.msg" />
        </div>
      </div>
    }
    overlayStyle={{ width: 240 }}
    placement="right"
    visible={visible}
  >
    {children}
  </Popover>
);
