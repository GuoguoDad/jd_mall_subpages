import React from 'react'
import { StyleProp } from 'react-native'
import FastImage, { ImageStyle, Source } from 'react-native-fast-image'
import { default_goods_img } from '@img'
import { httpToHttps } from '@kit'

class FastImg extends React.Component<FastImageProps, { url: string }> {
  constructor(props: FastImageProps) {
    super(props)
    this.state = {
      url: this.props.url
    }
  }

  componentWillReceiveProps(nextProps: Readonly<FastImageProps>, nextContext: any) {
    if (nextProps.url !== this.state.url) {
      this.setState({ url: nextProps.url })
    }
  }

  render() {
    const { style, priority = 'normal', resizeMode = 'cover' } = this.props
    const { url } = this.state

    return (
      <FastImage
        source={{
          uri: httpToHttps(url || default_goods_img),
          priority
        }}
        onError={() => {
          this.setState({ url: default_goods_img })
        }}
        resizeMode={resizeMode}
        style={style}
      />
    )
  }
}

export default FastImg

export const preload = (sources: Source[]) => {
  FastImage.preload(sources)
}

type FastImageProps = {
  url: string
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center'
  priority?: 'low' | 'normal' | 'high'
  style: StyleProp<ImageStyle>
}
