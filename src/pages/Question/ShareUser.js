import React, { Component } from 'react';
import { Input } from 'antd';
import { formatMessage } from 'umi/locale';

const Search = Input.Search;

class ShareUser extends Component {
  render () {
    return (
      <div>
         <Search
          placeholder={formatMessage({id: 'input.share.placeholder'})}
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}

export default ShareUser;