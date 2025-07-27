import React from 'react';
import { View, Text } from 'react-native';

class ClassView extends React.Component {
  constructor(props) {
    super(props);
    // 组件自己的state
    this.state = {
      address: '江苏省南京市',
    };
  }

  componentDidMount() {
    // 组件挂载后，设置state
    setTimeout(() => {
      this.setState({
        address: '浙江省杭州时',
      });
    }, 3000);
  }

  render() {
    // 引用外部传入的props
    const { name, age, level } = this.props;
    // 引用组件自己的state
    const { address } = this.state;
    return (
      <View style={{ width: '100%', height: 200, backgroundColor: '#00bcd4' }}>
        <Text
          style={{ fontSize: 20, color: 'white', textAlign: 'center' }}
        >{`name=${name},age=${age},level=${level},address=${address}`}</Text>
      </View>
    );
  }
}

export default ClassView;
