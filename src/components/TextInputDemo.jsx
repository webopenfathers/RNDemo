import React, { useEffect } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

// TextInput组件：唯一且强大的输入组件
// 一：字体样式
// 和Text组件一样，TextInput也支持字体样式的设置
// 二：自动聚焦
// autoFocus：是否自动聚焦，默认为false，为true时会自动弹出键盘
// focus()：api调用的方式

// 三：自动失焦
// submitBehavior：可选值('blur'|'submit'|'newline)
// "blur": 提交时让输入框失去焦点（即原来的 blurOnSubmit={true} 的行为）。
// "newline": 提交时在输入框中插入一个换行符 （即原来的 blurOnSubmit={false} 的行为）。
// "submit": 提交时让输入框保持焦点（即原来的 blurOnSubmit={false} 的行为）。

// blurOnSubmit：是否在提交时让输入框失去焦点，默认为true
// blurOnSubmit={true}：提交时让输入框失去焦点
// blurOnSubmit={false}：提交时让输入框保持焦点

// blur()：api调用的方式

// 四：隐藏光标
// caretHidden：是否隐藏光标，默认为false不隐藏。

// 五：默认输入
// defaultValue：默认输入的值，默认为空字符串

// 六：可编辑性
// editable：是否可编辑，默认为true

// 七：键盘类型：keyboardType
// 可选值：(双平台支持)
// 'default'：默认键盘
// 'number-pad' ：数字键盘
// 'decimal-pad' ：小数键盘
// 'numeric' ：数字键盘
// 'email-address' ：邮箱键盘
// 'phone-pad' ：电话键盘

// 八：确定键配置：returnKeyType
// 可选值：(双平台支持)
// 'done'：完成
// 'go'：前往
// 'next'：下一个
// 'search'：搜索
// 'send'：发送

// 九：最大长度：maxLength

// 十：多行输入
// multiline：是否多行输入，默认为false
// numberOfLines：多行输入时的,默认用几行显示

// 十一：焦点回调
// onFocus：输入框获得焦点时的回调
// onBlur：输入框失去焦点时的回调

// 十二：输入回调
// onChange：输入内容变化时的回调，参数为一个对象，包含text
// onChangeText：输入内容变化时的回调，参数为输入的文本内容

// 十三：选中相关
// selection：{{ start: 1, end: 3 }} 选中内容的范围，参数为一个对象，包含start和end(包含start，不包含end)
// selectionColor：选中内容的颜色，默认为蓝色
// selectTextOnFocus：是否在输入框获得焦点时选中内容，默认为false

// 十四：对齐方式
// textAlign ：文本的水平对齐方式，默认为'left'，可选值为'left'、'right'、'center'
// textAlignVertical：多行输入时，文本的垂直对齐方式，默认为'center'，可选值为'top'、'center'、'bottom'

// 十五：安全模式(注意：不能和multiline一起使用)
// secureTextEntry：是否开启安全模式，默认为false，开启后输入的内容会被隐藏，适用于密码输入

const TextInputDemo = () => {
  const inputRef = React.useRef(null);
  useEffect(() => {
    setTimeout(() => {
      // inputRef.current.blur();
    }, 2000);
  }, []);
  return (
    <View style={styles.root}>
      <TextInput
        blurOnSubmit={true}
        ref={inputRef}
        // autoFocus={true}
        style={styles.input}
        placeholder="Enter text"
        caretHidden={false}
        // defaultValue="默认输入"
        editable={true}
        keyboardType="number-pad"
        returnKeyType="send"
        // maxLength={11}
        // multiline={true}
        numberOfLines={2}
        onFocus={() => {
          console.log('Input onFocus');
        }}
        onBlur={() => {
          console.log('Input onBlur');
        }}
        onChange={event => {
          console.log('Input onChange', event.nativeEvent);
        }}
        onChangeText={text => {
          console.log('Input onChangeText', text);
        }}
        // selection={{ start: 1, end: 3 }}
        selectionColor={'red'}
        selectTextOnFocus={true}
        secureTextEntry={true}
      />
    </View>
  );
};

export default TextInputDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#D0D0D0',
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'top', // 多行输入时，文本从顶部开始
  },
});
