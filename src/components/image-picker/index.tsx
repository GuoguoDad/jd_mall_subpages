import React from 'react'
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { ActionSheet, FastImg, Toast } from '@comps'
import { icon_camera, icon_clear } from '@img'
import { isSuccessCode, px2Dp } from '@kit'

type ImagePickerProps = {
  images: Array<string>
  onImageAdd: (url: string) => void
  onDel: (index: number) => void
  max?: number
}

const ImagePicker = (props: ImagePickerProps) => {
  const { images, max = 9, onImageAdd, onDel } = props

  return (
    <View style={styles.container}>
      {images.map((v, i) => {
        let needRight = (i + 1) % 4 === 0
        return (
          <View key={i} style={[styles.imgView, needRight ? {} : { marginRight: px2Dp(24) }]}>
            <FastImg url={v} style={styles.img} />
            <TouchableOpacity style={styles.delView} activeOpacity={0.75} onPress={() => onDel(i)}>
              <FastImg url={icon_clear} style={styles.delImg} />
            </TouchableOpacity>
          </View>
        )
      })}
      {images.length < max ? (
        <TouchableOpacity activeOpacity={0.75} style={styles.addView} onPress={() => showPicker()}>
          <FastImg url={icon_camera} style={styles.camera} />
          <Text style={styles.txt}>添加照片</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  )

  function showPicker() {
    Keyboard.dismiss()
    ActionSheet.showActionSheetWithOptions(
      {
        options: ['拍照', '从手机相册选择', '取消'],
        cancelButtonIndex: 2
      },
      (buttonIndex: number) => {
        //拍照
        if (buttonIndex === 0) {
          launchCamera({
            mediaType: 'photo',
            quality: 0.6
          })
            .then((res: ImagePickerResponse) => {
              if (!res?.errorCode) {
                handleUpload(res?.assets![0]?.uri!, res?.assets![0]?.fileName!)
              }
            })
            .catch((err: ImagePickerResponse) => {
              console.warn('========launchCamera:', err?.errorMessage)
            })
        }
        //从手机相册选择
        else if (buttonIndex === 1) {
          launchImageLibrary({
            mediaType: 'photo',
            quality: 0.6
          })
            .then((res: ImagePickerResponse) => {
              if (!res?.errorCode) {
                handleUpload(res?.assets![0]?.uri!, res?.assets![0]?.fileName!)
              }
            })
            .catch((err: ImagePickerResponse) => {
              console.warn('========launchImageLibrary:', err?.errorMessage)
            })
        }
      }
    )
  }

  function handleUpload(fileUri: string, filename: string) {
    // Toast.loading('上传中...')
    // upload(fileUri, filename)
    //   .then(res => {
    //     Toast.hide()
    //     if (isSuccessCode(res.code)) {
    //       onImageAdd(res.data)
    //     } else {
    //       Toast.fail(res?.msg || '上传失败，请稍后重试')
    //     }
    //   })
    //   .catch(() => {
    //     Toast.hide()
    //   })
  }

  /**
   * @param fileUri
   * @param filename
   */
  function upload(fileUri: string, filename: string) {
    let formData = new FormData()
    formData.append('file', { uri: fileUri, type: 'multipart/form-data', name: filename }) // 这里的file就是后台需要的key

    return fetch('/uploadImage.do', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
        // cookie: cookies.currentValue
      },
      body: formData
    }).then(r => r.json())
  }
}

export default ImagePicker

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imgView: {
    position: 'relative',
    width: px2Dp(150),
    height: px2Dp(150),
    borderRadius: px2Dp(18),
    marginBottom: px2Dp(24)
  },
  img: {
    width: px2Dp(150),
    height: px2Dp(150),
    borderRadius: px2Dp(18)
  },
  camera: {
    width: px2Dp(54),
    height: px2Dp(54),
    borderRadius: px2Dp(18)
  },
  delView: {
    width: px2Dp(30),
    height: px2Dp(30),
    position: 'absolute',
    zIndex: 9,
    top: px2Dp(-12),
    right: px2Dp(-12)
  },
  delImg: {
    width: px2Dp(30),
    height: px2Dp(30)
  },
  addView: {
    width: px2Dp(150),
    height: px2Dp(150),
    borderRadius: px2Dp(18),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9'
  },
  txt: {
    fontFamily: 'PingFangSC-Regular',
    fontWeight: '400',
    fontSize: px2Dp(24),
    color: '#545B63',
    letterSpacing: 0,
    marginTop: px2Dp(10)
  }
})
