import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';
import { Row, Col, Tabs, Card, Avatar, Select, Tag } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Home.less';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const { Meta } = Card;
const colLayout = {xs: 24, sm: 24, md:12, lg: 12, xl: 6, xl: 6, xxl: 6 }
const colLayout1 = {xs:6, sm:6, md: 6, lg: 6, xl: 6, xl: 6, xxl: 6};
const colLayout2 = {xs:18, sm:18, md: 18, lg: 18, xl: 18, xl: 18, xxl: 18};
const img = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

function onChange(value) {
  console.log(value);
}

@connect(({ home, loading }) => ({
  home,
  listLoading: loading.effects['list/fetch'],
}))
class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      options1: [{id: 1, name:'全部问题'}],
      options2: [],
      options3: [],
      options4: [],
      lastOption: '',
    },
    this.question = '',
    this.qtype = 1,
    this.pager = {
      page: 1,
      size: 10,
    }
  }

  componentDidMount() {
    // 获取文章列表
    const { dispatch } = this.props;
    dispatch({
      type: 'home/articleList'
    });
    this.getCategory(1, {}, 1);
  }

  getCategory = (pId,option,  key) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/category',
      params:{
        pId
      }
    }).then(()=>{
      const { home: { categoryRes } } = this.props;
      const { options1, options2, options3 } = this.state;
      if(categoryRes && categoryRes.code === 200){
        const options = categoryRes.data;
        // 清空选项判断
        if(key === 2){
          this.setState({options2:[], options3:[], options4:[], lastOption:''})
        }
        if(key === 3) {
          this.setState({options3:[], options4:[], lastOption:''})
        }
        if(key === 4) {
          this.setState({lastOption:''})
        }
        //===========//
        if(key===1){
          this.setState({['options'+key]:[...options1, ...options]});
        }else{
          if(options.length > 0){
            this.setState({['options'+key]:[{id: pId, name: option.props.children},...options]});
          }else{
            this.setState({
              lastOption: option.props.children
            });
          }
        }
      }
    });
  }

  article = (item) => {
    return (
      <div>
        <Link to={`/home/article/${item.id}`}>
          <Row className={styles.article_box}>
            <Col {...colLayout1}>
              <div style={{backgroundImage: item.img?`url(${item.img})`:`url(${img})`}} className={styles.article_img}></div>
            </Col>
            <Col {...colLayout2}>
              <div className={styles.article_text}>
                <Link className={styles.a} to={`/home/article/${item.id}`}>{item.title}</Link>
                <div className={styles.source}><span>来源：{item.source}</span></div>
              </div>
            </Col>
          </Row>
        </Link>
      </div>
     
    )
  }

  articles = (articlelistRes) =>{
    return (
      <div className={styles.article_container}>
          <Row>
          {
            articlelistRes && articlelistRes.data.map((item, index) => {
              if(index !== 0){
                return <Col key={item.id} {...colLayout} className={styles.article_col}>{this.article(item)}</Col>
              }
            })
          }
          </Row>
      </div>
    )
  }

  // key标识几级变化
  handleChange = (value, option, key) => {
    this.getCategory(value, option, key);
    const { dispatch } = this.props;
    const fieldName = ['category_f', 'category_s', 'category_t'];
    dispatch({
      type: 'home/getCategoryParam',
      params: {
        [fieldName[key-2]]: value
      }
    });
    dispatch({
      type: 'home/fetchList',
      params: {
        question: this.question,
        qtype: this.qtype,
        ...this.pager,
        category:{
          [fieldName[key-2]]: value,
        },
      },
    });
  }

  handleSelect = (value) => {
    const { dispatch } = this.props
    const { options2 } = this.state;
    if(value === 1){
      dispatch({
        type: 'home/fetchList',
        params: {
          question: this.question,
          qtype: this.qtype,
          ...this.pager,
        },
      });
      this.setState({options2:[], options3:[], options4:[], lastOption:''});
    }
  }

  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'new':
        router.push(`${match.url}/new`);
        break;
      case 'hot':
        router.push(`${match.url}/hot`);
        break;
      case 'discuss':
        router.push(`${match.url}/discuss`);
        break;
      default:
        break;
    }
  };

  render() {
    const { children, home: { articlelistRes }} = this.props;
    const { options1, options2, options3, options4, lastOption } = this.state;
    console.log(options1);
    return (
      <Fragment>
        <GridContent className={styles.userCenter}>
        <div className={styles.banner}>
          {this.articles(articlelistRes)}
        </div>
          <Row gutter={24}>
            <Col lg={24} md={24}>
              <div className={styles.category_box}>
                {
                  options1.length>0? (
                    <Select value={options1[0].id} style={{ width: 140, marginRight:8}} 
                      onChange={(value, option)=>this.handleChange(value, option,2)}
                      onSelect={this.handleSelect}
                      >
                      {options1.map(item => {
                        return <Option key={'option'+item.id} value={item.id}>{item.name}</Option>
                      })}
                    </Select>):null
                }
                {
                  options2.length>0?(
                    <Select value={options2[0].id} style={{ width: 140, marginRight:8 }} onChange={(value, option)=>this.handleChange(value, option,3)}>
                      {options2.map(item => {
                        return <Option key={'option'+item.id} value={item.id}>{item.name}</Option>
                      })}
                  </Select>):null
                }
                {
                  options3.length>0?(
                    <Select value={options3[0].id} style={{ width: 140, marginRight:8 }} onChange={(value, option)=>this.handleChange(value, option,4)}>
                      {options3.map(item => {
                        return <Option key={'option'+item.id} value={item.id}>{item.name}</Option>
                      })}
                  </Select>):null
                }
                 {
                  options4.length>0?(
                    <Select value={options3[0].id} style={{ width: 140 }}>
                      {options3.map(item => {
                        return <Option key={'option'+item.id} value={item.id}>{item.name}</Option>
                      })}
                  </Select>):null
                }
                {
                  lastOption?<Tag className={styles.tag}>{lastOption}</Tag>:null
                }
              </div>
              <div className={styles.tabs}>
                <Tabs onChange={this.onTabChange} type="card">
                  <TabPane tab="新问题" key="new">
                    {children}
                  </TabPane>
                  <TabPane tab="热门问题" key="hot">
                    {children}
                  </TabPane>
                  <TabPane tab="神讨论" key="discuss">
                    {children}
                  </TabPane>
                </Tabs>
              </div>
            </Col>
          </Row>
        </GridContent>
      </Fragment>
    );
  }
}

export default Home;
