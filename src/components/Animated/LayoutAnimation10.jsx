import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, LayoutAnimation, Image } from 'react-native'


// LayoutAnimation 超级简单又强大的布局动画
// 一：
// 安卓手动启用布局动画


// 二：
// 布局动画的应用场景和优势

const LayoutAnimation10 = () => {

  // const [showView, setShowView] = useState(false)

  const [showRight, setShowRight] = useState(false)

  return <View style={styles.root}>
    <Button title='按钮' onPress={() => {
      // LayoutAnimation.configureNext(
      //   // LayoutAnimation.Presets.linear
      //   // LayoutAnimation.Presets.spring
      //   // LayoutAnimation.Presets.easeInEaseOut,
      //   () => {
      //     // 动画结束回调
      //     console.log('动画结束回调...');

      //   },
      //   () => {
      //     // 动画异常回调
      //     console.log('动画异常回调...');
      //   }
      // )
      // setShowView(true)




      // 快捷方法
      LayoutAnimation.spring()
      // LayoutAnimation.linear()
      // LayoutAnimation.easeInEaseOut()
      setShowRight(true)
    }} />

    {/* {showView && <View
      style={styles.view}
    ></View>
    } */}

    <View style={[styles.view, { flexDirection: showRight ? 'row-reverse' : 'row' }]}>
      <Image style={styles.img} source={require('../../assets/images/default_avatar.png')} />
      <Text style={styles.txt}>这是一行自我介绍的文本</Text>
    </View>
  </View >
}

export default LayoutAnimation10

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: "center"
  },

  view: {
    width: '100%',
    height: 100,
    backgroundColor: "#F0F0F0",
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16
  },

  img: {
    width: 64,
    height: 64,
    borderRadius: 32
  },

  txt: {
    fontSize: 20,
    color: "#303030",
    fontWeight: 'bold',
    marginHorizontal: 20
  }
})