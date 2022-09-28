import React from 'react'
// import FastImage, { ImageStyle, Source } from 'react-native-fast-image'
import { StyleProp, Image, ImageStyle } from 'react-native'
import { httpToHttps } from '@kit'
import { default_goods_img } from '@img'

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
      <Image
        source={{
          uri: httpToHttps(url || default_goods_img),
          cache: 'force-cache'
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

// export const preload = (sources: Source[]) => {
//   FastImage.preload(sources)
// }

type FastImageProps = {
  url: string
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center'
  priority?: 'low' | 'normal' | 'high'
  style: StyleProp<ImageStyle>
}
