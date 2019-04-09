import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input, message } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Center.less';

@connect(({ center, loading, user, project }) => ({
  center,
  listLoading: loading.effects['list/fetch'],
  // currentUser: user.currentUserRes.data,
  currentUserLoading: loading.effects['user/fetchCurrent'],
  project,
  projectLoading: loading.effects['project/fetchNotice'],
}))
class Center extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newTags: [],
      inputVisible: false,
      inputValue: '',
    };
    this.count = 0;
    //this.uid = props.match.params.uid;
  }

  componentDidMount() {
    // const { dispatch } = this.props;
    // const user = sessionStorage.getItem('user');
    // if(user && JSON.parse(user) && user.id === this.uid){
    //   // 当前用户
    // }else {
    //   // 其他用户
    //   dispatch({
    //     type: 'center/getOtherUserInfo',
    //     params: {
    //       uid: this.uid
    //     },
    //   });
    // }
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrent',
      token: sessionStorage.getItem('access_token'),
    }).then(() => {
      const currentUser = JSON.parse(sessionStorage.getItem('user'));
      this.setState({newTags: currentUser.tags});
    });
  }

  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'myPlease':
        router.push(`${match.url}/myPlease`);
        break;
      case 'myQuestion':
        router.push(`${match.url}/myQuestion`);
        break;
      case 'myAnswer':
        router.push(`${match.url}/myAnswer`);
        break;
      case 'myAttention':
        router.push(`${match.url}/myAttention`);
        break;
      default:
        break;
    }
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  saveInputRef = input => {
    this.input = input;
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { dispatch } = this.props;
    const { inputValue } = this.state;
    let { newTags } = this.state;
    if (!inputValue) {
      // message.error(formatMessage({ id: 'tag_cant_be_empty' }));
      this.setState({inputVisible: false})
      return;
    }
    if (newTags.indexOf(inputValue) > -1) {
      message.error(formatMessage({ id: 'tag_already_exists' }));
      return;
    }
    dispatch({
      type: 'center/addTag',
      tag: inputValue,
      token: sessionStorage.getItem('access_token'),
    }).then(() => {
      const {
        center: { addTagRes },
      } = this.props;
      if (addTagRes.code === 200) {
        newTags = [{ id: `${addTagRes.data}`, text: inputValue }, ...newTags];
        this.setState({ newTags });
        // 重新获取用户信息
        // dispatch({
        //   type: 'user/fetchCurrent',
        //   token: sessionStorage.getItem('access_token'),
        // })
      } 
    });
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  handleClose = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'center/deleteTag',
      tagId: id,
      token: sessionStorage.getItem('access_token'),
    }).then(() => {
      const {
        center: { deleteTagRes },
      } = this.props;
      if (deleteTagRes.code === 200) {
        // 成功
      } else {
        const { msg } = addTagRes;
        message.error(formatMessage({ id: msg }));
      }
    });
  };

  render() {
    const { newTags, inputVisible, inputValue } = this.state;
    const { center: { otherUserRes }} = this.props;
    const currentUser = otherUserRes && otherUserRes.code === 200? otherUserRes.data : JSON.parse(sessionStorage.getItem('user'));
    const {
      listLoading,
      currentUserLoading,
      project: { notice },
      projectLoading,
      match,
      location,
      children,
    } = this.props;
    if (this.count === 0) {
      if (currentUser) {
        this.state.newTags = currentUser.tags;
        this.count = 1;
      }
    }
    const tags = newTags.length == 0 ? (currentUser ? currentUser.tags : newTags) : newTags;

    const operationTabList = [
      // {
      //   key: 'waitAnswer',
      //   tab: (
      //     <span>
      //       待回答 <span style={{ fontSize: 14 }}></span>
      //     </span>
      //   ),
      // },
      {
        key: 'myQuestion',
        tab: (
          <span>
            我的提问 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      },
      {
        key: 'myAnswer',
        tab: (
          <span>
            我的回答 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      },
      {
        key: 'myPlease',
        tab: (
          <span>
            请求完善 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      },
      {
        key: 'myAttention',
        tab: (
          <span>
            我的关注 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      },

    ];

    return (
      <GridContent className={styles.userCenter}>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }} loading={currentUserLoading}>
              {currentUser && Object.keys(currentUser).length ? (
                <div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={currentUser.avatarFile} />
                    <div className={styles.name}>{currentUser.nickname}</div>
                    <div>个人主页：{currentUser.urlToken ? currentUser.urlToken : '暂无'}</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      <i className={styles.address} />
                      <span>{currentUser.province}{currentUser.city}</span>
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.center}>
                    研究生院：
                    {currentUser.applicationSchool ? currentUser.applicationSchool : '暂无'}
                  </div>
                  <div className={styles.center}>
                    专业：
                    {currentUser.applicationProfession ? currentUser.applicationProfession : '暂无'}
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>标签</div>
                    {tags.map(item => (
                      <Tag closable key={'key' + item.id} onClose={() => this.handleClose(item.id)}>
                        {item.text}
                      </Tag>
                    ))}
                    {inputVisible && (
                      <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                      />
                    )}
                    {!inputVisible && (
                      <Tag
                        onClick={this.showInput}
                        style={{ background: '#fff', borderStyle: 'dashed' }}
                      >
                        <Icon type="plus" />
                      </Tag>
                    )}
                  </div>
                  {/*<Divider style={{ marginTop: 16 }} dashed />
                  <div className={styles.team}>
                    <div className={styles.teamTitle}>团队</div>
                    <Spin spinning={projectLoading}>
                      <Row gutter={36}>
                        {notice.map(item => (
                          <Col key={item.id} lg={24} xl={12}>
                            <Link to={item.href}>
                              <Avatar size="small" src={item.logo} />
                              {item.member}
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Spin>
                  </div>*/}
                </div>
              ) : (
                'loading...'
              )}
            </Card>
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              activeTabKey={location.pathname.replace(`${match.path}/`, '')}
              onTabChange={this.onTabChange}
              loading={listLoading}
            >
              {children}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Center;
