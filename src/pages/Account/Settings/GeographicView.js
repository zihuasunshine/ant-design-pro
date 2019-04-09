import React, { PureComponent } from 'react';
import { Select, Spin } from 'antd';
import { connect } from 'dva';
import styles from './GeographicView.less';
import { city } from './geographic/city';
import { province } from './geographic/province';

const { Option } = Select;

const nullSlectItem = {
  label: '',
  key: '',
};

class GeographicView extends PureComponent {

  state = {
    provinceOption: [],
    citiOption: []
  }

  componentDidMount() {
    const { value } = this.props;
    
  }

  static getDerivedStateFromProps(props, state) {
    const { value } = props;
    const provinceOption = province;
    const cityOption = value? city[value.province.key] : []
    console.log(cityOption);
    return {
      provinceOption, cityOption
    }
  }

  getProvinceOption(provinceOption) {
    return this.getOption(provinceOption);
  }

  getCityOption = (cityOption) => {
    return this.getOption(cityOption);
  };

  getOption = list => {
    if (!list || list.length < 1) {
      return (
        <Option key={0} value={0}>
          没有找到选项
        </Option>
      );
    }
    return list.map(item => (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    ));
  };

  selectProvinceItem = item => {
    const {  onChange } = this.props;
    onChange({
      province: item,
      city: nullSlectItem,
    });
    this.setState({
      cityOption: city[item.key]
    });
  };

  selectCityItem = item => {
    const { value, onChange } = this.props;
    onChange({
      province: value.province,
      city: item,
    });
  };

  conversionObject() {
    const { value } = this.props;
    if (!value) {
      return {
        province: nullSlectItem,
        city: nullSlectItem,
      };
    }
    const { province, city } = value;
    return {
      province: province || nullSlectItem,
      city: city || nullSlectItem,
    };
  }

  render() {
    const { provinceOption, cityOption } = this.state;
    const { province, city } = this.conversionObject();
    const isLoading = false;
    return (
      <Spin spinning={isLoading} wrapperClassName={styles.row}>
        <Select
          className={styles.item}
          value={province}
          labelInValue
          showSearch
          onSelect={this.selectProvinceItem}
        >
          {this.getProvinceOption(provinceOption)}
        </Select>
        <Select
          className={styles.item}
          value={city}
          labelInValue
          showSearch
          onSelect={this.selectCityItem}
        >
          {this.getCityOption(cityOption)}
        </Select>
      </Spin>
    );
  }
}

export default GeographicView;
