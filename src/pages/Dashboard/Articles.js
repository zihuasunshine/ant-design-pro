import React, { PureComponent, Fragment } from 'react';
import { Row, Col, List, Icon, Tag, Input, Select ,Divider, Pagination } from 'antd';
import { connect } from 'dva';
import ArticleListContent from '@/components/ArticleListContent';
import styles from './Articles.less';

const colLayout = { xs: 24, sm: 24, md: 12, lg: 12, xl: 12, xxl: 12 };
const Search = Input.Search;
const Option = Select.Option;
const qtypes = {
  new: '1',
  hot: '2',
  discuss: '3',
};

@connect(({ home }) => ({
  home,
}))
class Center extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      options1: [{id: 1, name:'全部问题'}],
      options2: [],
      options3: [],
      options4: [],
      lastOption: '',
    },
    this.category = {};
    this.question = '';
    this.qtype = 1,
    this.pager = {
      page: 1,
      size: 10,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.getCategory(1, {}, 1);
    this.getQuestionList();
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

  // 点击搜索按钮
  handleSerach = value => {
    this.question = value;
    value? this.qtype= 4 : this.qtype = 1;
    this.getQuestionList();
  };

  // 点击分页
  handlePageChange = (page) =>{
    this.pager = {
      page,
      size: 10
    }
    this.getQuestionList();
  }

  // 点击下拉选择框 key标识几级变化
  handleChange = (value, option, key) => {
    this.getCategory(value, option, key);
    const { dispatch } = this.props;
    const fieldName = ['category_f', 'category_s', 'category_t'];
    this.category = {
      [fieldName[key-2]]: value,
    }
    this.getQuestionList();
  }

  // 选择全部问题时(重置效果)
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

  // 得到问题列表
  getQuestionList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/fetchList',
      params: {
        question: this.question,
        qtype: this.qtype,
        ...this.pager,
        category: this.category
      },
    });
  };

  render() {
    const { options1, options2, options3, options4, lastOption } = this.state;
    const {
      home: { list },
    } = this.props;
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <div className={styles.list_box}> 
        <Row>
          <Col>
            <div className={styles.category_box}>
                {
                  options1.length>0? (
                    <Select size='large' value={options1[0].id} style={{ width: 140, marginRight:8}} 
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
                    <Select size='large' value={options2[0].id} style={{ width: 140, marginRight:8 }} onChange={(value, option)=>this.handleChange(value, option,3)}>
                      {options2.map(item => {
                        return <Option key={'option'+item.id} value={item.id}>{item.name}</Option>
                      })}
                  </Select>):null
                }
                {
                  options3.length>0?(
                    <Select size='large' value={options3[0].id} style={{ width: 140, marginRight:8 }} onChange={(value, option)=>this.handleChange(value, option,4)}>
                      {options3.map(item => {
                        return <Option key={'option'+item.id} value={item.id}>{item.name}</Option>
                      })}
                  </Select>):null
                }
                 {
                  options4.length>0?(
                    <Select size='large' value={options3[0].id} style={{ width: 140 }}>
                      {options3.map(item => {
                        return <Option key={'option'+item.id} value={item.id}>{item.name}</Option>
                      })}
                  </Select>):null
                }
                {
                  lastOption?<Tag className={styles.tag}>{lastOption}</Tag>:null
                }
              </div>
          </Col>
          <Col {...colLayout}>
            <div className={styles.category_box}>
              <Search placeholder="输入关键词" onSearch={this.handleSerach} enterButton size='large' />
            </div>
          </Col>
        </Row>
        <List
          className={styles.articleList}
          rowKey="id"
          itemLayout="vertical"
          dataSource={list && list.data ? list.data : []}
          renderItem={item => (
            <List.Item
              key={item.id}
              style={{padding:0}}
            >
              <List.Item.Meta
                title={''}
                description={''}
              />
              <ArticleListContent data={item} link={`/question/answer/${item.id}`} />
            </List.Item>
          )}
        />
        <div className={styles.page}>
          <Pagination 
            defaultCurrent={1} 
            total={list && list.total && list.total > 200? 200 : list.total}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Center;
