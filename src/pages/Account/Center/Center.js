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
  currentUser: user.currentUser.data,
  currentUserLoading: loading.effects['user/fetchCurrent'],
  project,
  projectLoading: loading.effects['project/fetchNotice'],
}))
class Center extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      newTags: props.currentUser ? props.currentUser.tags : [],
      inputVisible: false,
      inputValue: '',
    };
  }
  

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 8,
      },
    });
    dispatch({
      type: 'project/fetchNotice',
    });
  }

  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'articles':
        router.push(`${match.url}/articles`);
        break;
      case 'applications':
        router.push(`${match.url}/applications`);
        break;
      case 'projects':
        router.push(`${match.url}/projects`);
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
    if(!inputValue){
      message.error(formatMessage({ id: 'ag_cant_be_empty' }));
      return;
    }
    if( newTags.indexOf(inputValue) > -1) {
      message.error(formatMessage({ id: 'tag_already_exists' }));
      return;
    }
    dispatch({
      type: 'center/addTag',
      tag: inputValue,
      token: sessionStorage.getItem('access_token')
    }).then(() => {
      const { center: { addTagRes } }= this.props;
      if(addTagRes.code === 200){
        newTags = [...newTags, { key: `new-${newTags.length}`, text: inputValue }];
        this.setState({newTags});
      }else{
        const { msg } = addTagRes;
        message.error(formatMessage({ id: msg}));
      }
    });
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  handleClose = (id) =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'center/deleteTag',
      tagId: id,
      token: sessionStorage.getItem('access_token')
    }).then(() => { 
      const { center: { deleteTagRes } } = this.props;
      if(deleteTagRes.code === 200){
        // 成功
      }else{
        const { msg } = addTagRes;
        message.error(formatMessage({ id: msg}));
      }
    });
  }

  render() {
    const { newTags, inputVisible, inputValue } = this.state;
    const {
      listLoading,
      currentUser,
      currentUserLoading,
      project: { notice },
      projectLoading,
      match,
      location,
      children,
    } = this.props;

    const operationTabList = [
      {
        key: 'articles',
        tab: (
          <span>
            待回答 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'applications',
        tab: (
          <span>
            我的提问 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'projects',
        tab: (
          <span>
            我的回答 <span style={{ fontSize: 14 }}>(8)</span>
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
                    <div>个人主页:{currentUser.urlToken ? currentUser.urlToken : '暂无'}</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      <i className={styles.title} />
                      {currentUser.title}
                    </p>
                    <p>
                      <i className={styles.group} />
                      {currentUser.group}
                    </p>
                    <p>
                      <i className={styles.address} />
                      {currentUser.province}
                      {currentUser.city}
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>标签</div>
                    {currentUser.tags.concat(newTags).map(item => (
                      <Tag closable onClose={() => this.handleClose(item.id)} key={item.id}>{item.text}</Tag>
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
                  <Divider style={{ marginTop: 16 }} dashed />
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
                  </div>
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
