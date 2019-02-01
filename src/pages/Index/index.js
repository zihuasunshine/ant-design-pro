import React, { Component, Fragment } from 'react';
import { Row, Col, Input, Icon } from 'antd';
import { connect } from 'dva';
import Media from 'react-media';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Question from '@/components/Index/Question';
import QuestionMeta from '@/components/Index/QuestionMeta';
import Title from '@/components/Index/Title';
import ListItem from '@/components/Index/ListItem';
import Classify from '@/components/Index/Classify';
import ArticleListContent from '@/components/ArticleListContent';
import styles from './index.less';
import img from '@/assets/img_0.png';
import imgHot from '@/assets/img_hot.png';
import imgNew from '@/assets/img_new.png';

const Search = Input.Search;
const leftLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 12, xxl: 12};
const rightLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 12, xxl: 12};
const size = 10; // 每页条数
const categoryType = ['category_f', 'category_s','category_t'];

@connect(({ home }) => ({
  home
}))
class Index extends Component {

  constructor(props) {
    super(props);
    this.page = 1;
    this.params = {
      question: '',
      qtype: 1,
      size: 10,
      page: this.page,
      category:{}
    };
    this.state = {
      tags: [{
        id: 1,
        name: '全部问题'
      }],
    }
  }

  componentDidMount() {
    this.getCategory(1);
    this.getQuestionList({ ...this.params,flag: false });
  }

  // 得到问题列表
  getQuestionList = (params) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/fetchList',
      params
    });
  };

  // 点击搜索按钮
  handleSerach = value => {
    this.params.question = value;
    this.params.qtype = value?4:1;
    this.getQuestionList({...this.params, flag: false});
  };

  // 查看更多
  handleLoadMore = () => {
    ++this.params.page;
    this.getQuestionList({...this.params, flag: true});
  }

  // 得到分类
  getCategory = (pId) =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'home/category',
      params:{
        pId
      }
    })
  }

  // 分类点击
  handleOptionClick = (item, flag, index) =>{
    const { tags } = this.state;
    if(flag === 1){
      this.setState({tags: [...tags, {id:item.id, name: item.name}]}, () => {
        const { tags: _tags } = this.state;
        const categoryKey = categoryType[_tags.length-2];
        this.params.category=_tags.length.length === 1?{}:{[categoryKey]: item.id};
        this.getQuestionList({...this.params, flag: false});
      });
    }else{
      let tempTags = [...tags];
      tempTags.splice(index+1, tags.length-index-1);
      this.setState({tags: tempTags}, () => {
        const { tags: _tags } = this.state;
        const categoryKey = categoryType[_tags.length-2];
        this.params.category=_tags.length.length === 1?{}:{[categoryKey]: item.id};
        this.getQuestionList({...this.params, flag: false});
      });
    }
    this.getCategory(item.id);
    
  }

  render() {
    const { tags } = this.state;
    const { home: { listRes, categoryRes } } = this.props;
    const options = categoryRes && categoryRes.code === 200? categoryRes.data:[];
    const questionList = listRes && listRes.code === 200? listRes.data:[];

    return (
      <GridContent>
        {/*<Row gutter={16} className={styles.border}>
          <Col {...leftLayout}>
            <Question color={'#139BEA'} img={imgHot}/>
          </Col>
          <Media query="(max-width: 599px)">
            {isMobile =>  isMobile? '' : (<Col {...rightLayout}>
              <Question color={'#E9510A'} img={imgNew}/>
            </Col>)}
          </Media>
        </Row>
        <div className={styles.search_wrapper}>
          <Search
            placeholder="input search text"
          />
        </div>
        <div className={styles.title_wrapper}>
          <Media query="(max-width: 599px)">
            {
              isMobile => isMobile? (
                <Title chinese='全部问题' english=''>
                  <a className={styles.show_more}>查看更多 >></a>
                </Title>) :
                (<Title chinese='全部问题' english={'all questions'}>
                  <Search enterButton/>
                </Title>)
            }
          </Media>
        </div>
        <Media query="(max-width: 599px)">
          {
            isMobile => isMobile? <Fragment/>: (
                <Fragment>
                  <Row gutter={12}>
                    <Col span={12}>
                      <QuestionMeta img={img}/>
                    </Col>
                    <Col span={12}>
                      <ListItem/>
                    </Col>
                  </Row>
                  <div className={styles.title_wrapper}>
                    <Title chinese='' english=''/>
                  </div>
                </Fragment>
              )
          }
        </Media>*/}
        <div className={styles.search_wrapper}>
          <Search
            onSearch={this.handleSerach}
          />
        </div>
        <div className={styles.title_wrapper}>
          <Media query="(max-width: 599px)">
            {
              isMobile => isMobile? (
                <Title chinese='全部问题' english=''>
                  <a className={styles.show_more}></a>
                </Title>) :
                (<Title chinese='全部问题' english={'all questions'}>
                  <Search enterButton onSearch={this.handleSerach}/>
                </Title>)
            }
          </Media>
        </div>
        <Media query="(max-width: 599px)">
          {
            isMobile => isMobile? null:(
              <Classify tags={tags} options={options} onOptionClick={this.handleOptionClick}/>)
          }
        </Media>
        <div className={styles.list_wrapper}>
          {
            questionList.map(item => {
              return <ArticleListContent data={item} link={`/question/answer/${item.id}`} />
            })
          }
        </div>
        {questionList.length>0?<div className={styles.show_more_question} onClick={this.handleLoadMore}>查看更多</div>:null}
      </GridContent>
    )
  }
}

export default Index;