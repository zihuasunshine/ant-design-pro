import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import { Form, Row, Col, Input, Checkbox, Button  } from 'antd';
import ProviceSelector from '@/components/ProvinceSelector';
import styles from './style.less';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const options = [
  {label: '双一流', value:'双一流'},
  {label: '985', value:'985'},
  {label: '211', value:'211'},
];
const colLayout = { xs: 24, sm: 24, md: 12, lg: 12, xl: 5, xxl: 5};
const colLayout2 = { xs: 24, sm: 24, md: 12, lg: 12, xl: 4, xxl: 4};
const itemLayout = {
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 24},
    md: {span: 24},
    lg: {span: 24},
    xl: {span: 24},
    xxl: {span: 24}
  },
}

@Form.create()
@connect(({ global, adjust }) => ({
  global,
  adjust
}))
class QueryForm extends Component {

  componentDidMount() {
    const { dispatch, state, form: { setFieldsValue } } = this.props;
    for(let key in state){
      setFieldsValue({[key]: state[key]});
    }
    dispatch({
      type: 'global/getProvince'
    });
  }

  getAdjustData = (params) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'adjust/loading',
      loading: true
    }).then(() => {
      dispatch({
        type: 'adjust/getAdjustData',
        params,
      });
    }).then(() => {
      dispatch({
        type: 'adjust/setCurrent',
        current: 1
      });
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  handleClick = (e) => {
    e.preventDefault();
    const { form: { validateFields }} = this.props;
    validateFields((err, values) => {
      if (!err) {
        if(!values.yx) delete values.yx;
        if(!values.zy) delete values.zy;
        if(!values.sf) delete values.sf;
        if(!values.yxsx) {
          delete values.yxsx
        }else {
          values.yxsx = values.yxsx.join(',')
        };
        this.getAdjustData(values);
      }
    });
  }

  render(){
    const { form: { getFieldDecorator }, global: { provinceRes } } = this.props;
    const provinces = provinceRes && provinceRes.code === 200? provinceRes.data : [];

    return(
      <Form>
        <Row gutter={16}>
          <Col {...colLayout}>
            <FormItem {...itemLayout} className={styles.mtbtom}>
              {getFieldDecorator('yx', {
                
              })(
                <Input placeholder={formatMessage({id: 'form.yx.placeholder'})} />
              )}
            </FormItem>
          </Col>
          <Col {...colLayout}>
            <FormItem {...itemLayout} className={styles.mtbtom}>
              {getFieldDecorator('zy', {
                
              })(
                <Input placeholder={formatMessage({id: 'form.zy.placeholder'})} />
              )}
            </FormItem>
          </Col>
          <Col {...colLayout}>
            <FormItem {...itemLayout} className={styles.mtbtom}>
                {getFieldDecorator('sf', {
                  
                })(
                  <ProviceSelector data={provinces}/>
                )}
            </FormItem>
          </Col>
          <Col {...colLayout}>
            <FormItem {...itemLayout} className={styles.mtbtom}>
                {getFieldDecorator('yxsx', {
                  
                })(
                  <CheckboxGroup
                    options={options}
                  />
                )}
            </FormItem>
          </Col>
          <Col {...colLayout2}>
            <Button type='primary' onClick={this.handleClick} className={styles.query_btn}>查询</Button>
            <Button type='primary' ghost onClick={this.handleReset}>清空</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default QueryForm; 