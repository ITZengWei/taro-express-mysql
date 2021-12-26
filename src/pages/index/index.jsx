import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

const a = 100
console.log(a)
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    )
  }
}
