import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class ProvinceSelector extends Component {

  handleChange = (value) => {
    const { onChange, setValue } = this.props;
    setValue && setValue(value);
    onChange && onChange(value)
  }

  renderOption= (provinceData) => {
    return provinceData.map((item, index) => {
      return <Option value={item.province} key={index}>{item.province}</Option>
    });
  }

  render(){
    const { value, data } = this.props;
    return (
      <Select
        showSearch
        value={value}
        placeholder="选择省份"
        optionFilterProp="children"
        onChange={this.handleChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {this.renderOption(data)}
      </Select>
    )
  }

}

export default ProvinceSelector;
