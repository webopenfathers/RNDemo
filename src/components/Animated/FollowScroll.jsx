import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Animated
} from 'react-native';

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];


// 跟随动画延迟难题
// 传统写法 左边列表 跟随 右边列表 动画会有延迟
// 解决办法：调用原生写法

const FollowScroll = () => {
    // const [scrollY, setScrollY] = useState(0);
    const scrollY = useRef(new Animated.Value(0)).current;

    const viewList = () => {
        const array = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ];
        return (
            <>
                {array.map((item, index) => (
                    <View key={item} style={{
                        width: 60,
                        height: 100,
                        backgroundColor: colors[index % 5],
                    }} />
                ))}
            </>
        );
    }

    return (
        <View style={styles.root}>
            <View style={styles.leftLayout}>
                <Animated.View
                    style={{
                        width: 60,
                        transform: [
                            // { translateY: -scrollY }
                            { translateY: Animated.multiply(-1, scrollY) }
                        ]
                    }}
                >
                    {viewList()}
                </Animated.View>
            </View>

            <View style={styles.rightLayout}>
                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    // onScroll={(event) => {
                    //     console.log(event.nativeEvent.contentOffset.y, 'event.nativeEvent.contentOffset.y');
                    //     setScrollY(event.nativeEvent.contentOffset.y);
                    // }}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { y: scrollY }
                                }
                            }
                        ],
                        { useNativeDriver: true }
                    )}
                >
                    {viewList()}
                </Animated.ScrollView>
            </View>
        </View>
    );
}

export default FollowScroll

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    leftLayout: {
        width: 60,
        backgroundColor: '#00FF0030',
        flexDirection: 'column',
    },
    rightLayout: {
        width: 60,
        height: '100%',
        backgroundColor: '#0000FF30',
        marginLeft: 100,
    },
});
