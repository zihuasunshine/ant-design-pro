import React, { PureComponent } from 'react';
import { FormattedMessage, formatMessage } from 'umi/locale';
import { Spin, Tag, Menu, Icon, Avatar, Tooltip, Modal, BackTop } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva' 
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import NoticeIcon from '../NoticeIcon';
import HeaderSearch from '../HeaderSearch';
import HeaderDropdown from '../HeaderDropdown';
import SelectLang from '../SelectLang';
import Suggest from './Suggest';
import Login from '@/pages/User/Login';
import Register from '@/pages/User/Register';
import styles from './index.less';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'; // 默认头像

@connect(({ global, login }) => ({
  global, login
}))
export default class GlobalHeaderRight extends PureComponent {

  componentDidMount() {
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    const user = sessionStorage.getItem('usr');
    access_token && refresh_token && !user? this.getCurrentUserInfo() : '';
  }

  getNoticeData() {
    const { notices = [] } = this.props;
    if (notices.length === 0) {
      return {};
    }
    const newNotices = notices.map(notice => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newNotice.status];
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        );
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }

  getUnreadData = noticeData => {
    const unreadMsg = {};
    Object.entries(noticeData).forEach(([key, value]) => {
      if (!unreadMsg[key]) {
        unreadMsg[key] = 0;
      }
      if (Array.isArray(value)) {
        unreadMsg[key] = value.filter(item => !item.read).length;
      }
    });
    return unreadMsg;
  };

  changeReadState = clickedItem => {
    const { id } = clickedItem;
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeNoticeReadState',
      payload: id,
    });
  };

  handleCancle = () =>{
    debugger;
    const { dispatch } = this.props;
    dispatch({
      type: 'login/setModalType',
      visible: false
    });
  }

  // 弹出框类型(login, register)
  setModalType = (type) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/setModalType',
      visible: true,
      modalType: type
    });
  }

  // 显示意见反馈弹框
  setSuggestModalVisible = (visible) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/setSuggestModal',
      suggestModalVisible: visible
    });
  }

  // 获取当前登录人信息
  getCurrentUserInfo = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrent'
    })
  }
  
  render() {
    const currentUser = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')): null;
    const {
      //currentUser,
      login: { modalVisible, modalType },
      global: { suggestModalVisible },
      fetchingNotices,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear,
      theme,
    } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        {/*<Menu.Item key="triggerError">
          <Icon type="close-circle" />
          <FormattedMessage id="menu.account.trigger" defaultMessage="Trigger Error" />
          </Menu.Item>*/}
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );
    const noticeData = this.getNoticeData();
    const unreadMsg = this.getUnreadData(noticeData);
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        {/*
          <HeaderSearch
            className={`${styles.action} ${styles.search}`}
            placeholder={formatMessage({ id: 'component.globalHeader.search' })}
            dataSource={[
              formatMessage({ id: 'component.globalHeader.search.example1' }),
              formatMessage({ id: 'component.globalHeader.search.example2' }),
              formatMessage({ id: 'component.globalHeader.search.example3' }),
            ]}
            onSearch={value => {
              console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={value => {
              console.log('enter', value); // eslint-disable-line
            }}
          />
          <Tooltip title={formatMessage({ id: 'component.globalHeader.help' })}>
            <a
              target="_blank"
              href="https://pro.ant.design/docs/getting-started"
              rel="noopener noreferrer"
              className={styles.action}
            >
              <Icon type="question-circle-o" />
            </a>
          </Tooltip>
        */}
        {/*登录注册*/}
        {!localStorage.getItem('access_token') ? (
          <div className={styles.login_wrapper}>
            <span onClick={() => this.setModalType('login')}>{formatMessage({id: 'app.login.login'})}</span>
            <span onClick={() => this.setModalType('regster')}>{formatMessage({id: 'app.register.register'})}</span>
            {/*<Link to={'/user/login?redirect=' + window.location.href}>{formatMessage({id: 'app.login.login'})}</Link>
            <Link to="/user/register"></Link>*/}
          </div>
        ) : null}

        {/*通知功能先隐藏*/}
        {/*<NoticeIcon
          className={styles.action}
          count={currentUser.unreadCount}
          onItemClick={(item, tabProps) => {
            console.log(item, tabProps); // eslint-disable-line
            this.changeReadState(item, tabProps);
          }}
          locale={{
            emptyText: formatMessage({ id: 'component.noticeIcon.empty' }),
            clear: formatMessage({ id: 'component.noticeIcon.clear' }),
          }}
          onClear={onNoticeClear}
          onPopupVisibleChange={onNoticeVisibleChange}
          loading={fetchingNotices}
          clearClose
        >
          <NoticeIcon.Tab
            count={unreadMsg.notification}
            list={noticeData.notification}
            title={formatMessage({ id: 'component.globalHeader.notification' })}
            name="notification"
            emptyText={formatMessage({ id: 'component.globalHeader.notification.empty' })}
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
          />
          <NoticeIcon.Tab
            count={unreadMsg.message}
            list={noticeData.message}
            title={formatMessage({ id: 'component.globalHeader.message' })}
            name="message"
            emptyText={formatMessage({ id: 'component.globalHeader.message.empty' })}
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
          />
          <NoticeIcon.Tab
            count={unreadMsg.event}
            list={noticeData.event}
            title={formatMessage({ id: 'component.globalHeader.event' })}
            name="event"
            emptyText={formatMessage({ id: 'component.globalHeader.event.empty' })}
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
          />
        </NoticeIcon>*/}
        {localStorage.getItem('access_token') ? (
          <HeaderDropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar
                size="small"
                className={styles.avatar}
                src={currentUser ? currentUser.avatarFile : url}
                alt="avatar"
              />
              <span className={styles.name}>
                {currentUser && (currentUser.nickname || currentUser.userName || '')}
              </span>
            </span>
          </HeaderDropdown>
        ) : null}
        {/*<SelectLang className={styles.action} />*/}
        <Modal
          maskStyle={{background: 'rgba(0,0,0,.3)'}}
          destroyOnClose={true}
          width={375}
          onCancel={this.handleCancle }
          visible={modalVisible}
          footer={null}
        >
          {modalType === 'login'? <Login/> : <Register/>}
        </Modal>
        <Modal
          maskStyle={{background: 'rgba(0,0,0,.3)'}}
          visible={suggestModalVisible}
          maskClosable={false}
          onCancel={() => this.setSuggestModalVisible(false)}
          footer={false}
        >
          <div className={styles.suggest_wrapper}>
            <Suggest/>
          </div>
        </Modal>
        <Tooltip placement='left' title='意见反馈'>
          <div className={styles.suggest} onClick={() => this.setSuggestModalVisible(true)}>
            <Icon type="edit" theme='filled'/>
          </div>
        </Tooltip>
        <Tooltip placement='left' title='回到顶部'>
          <BackTop />
        </Tooltip>
      </div>
    );
  }
}
