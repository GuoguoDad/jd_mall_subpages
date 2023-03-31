import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { StackActions, useNavigation } from '@react-navigation/native'
import { getBottomSpace } from '@liuhui1990/react-native-iphone-x-helper'
import { ActionSheet, FastImg, Scene, Toast } from '@comps'
import { arrowRight, default_goods_img } from '@img'
import { isIOS, px2Dp } from '@kit'
import SettingItem from '@pages/user-settting/components/item'
import { RoutesEnum } from '../../pages'

const UserSetting = () => {
  const navigation = useNavigation()

  return (
    <Scene title="账户设置">
      <ScrollView style={styles.container}>
        <TouchableOpacity activeOpacity={0.65} style={[styles.row, styles.itemView]} onPress={showPicker}>
          <FastImg url={default_goods_img} style={styles.headerIcon} />
          <View style={styles.userView}>
            <Text style={styles.nickName}>GuoguoDad</Text>
            <Text style={styles.userName}>用户名: jd_6062cf674dc4e</Text>
          </View>
          <FastImg url={arrowRight} style={styles.arrowRight} />
        </TouchableOpacity>
        <SettingItem
          title="地址管理"
          description={''}
          onPress={() => navigation.dispatch(StackActions.push(RoutesEnum.Waterfall, { from: 'UserSetting' }))}
        />
        <View style={styles.greySpace} />
        <SettingItem title="账户与安全" description={'账户保障可升级'} onPress={() => Toast.info('敬请期待')} />
        <SettingItem title="设置字体大小" description={''} />
        <SettingItem title="字符设置" description={''} />
        <SettingItem title="发票抬头管理" description={'增加增票资质'} />
        <SettingItem title="我的档案" description={'添加社保/宝宝等档案'} />
        <SettingItem title="通用" description={'清除本地缓存等'} />
        <View style={styles.greySpace} />
        <SettingItem title="PLUS会员" description={'现在续费，可享受多重特权'} />
        <SettingItem title="家庭号设置" description={'帮我付/快捷聊/亲密卡'} />
        <SettingItem title="功能实验室" description={'提前体验新功能'} />
        <SettingItem title="功能反馈" description={''} />
        <SettingItem title="应用权限说明" description={''} />
        <SettingItem title="隐私政策" description={''} />
        <View style={styles.greySpace} />
        <TouchableOpacity activeOpacity={0.65} style={[styles.row, styles.btnView]}>
          <Text style={styles.btnTxt}>退出登录</Text>
        </TouchableOpacity>
      </ScrollView>
    </Scene>
  )

  function showPicker() {
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
                // handleUpload(res?.assets![0]?.uri!, res?.assets![0]?.fileName!)
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
                // handleUpload(res?.assets![0]?.uri!, res?.assets![0]?.fileName!)
              }
            })
            .catch((err: ImagePickerResponse) => {
              console.warn('========launchImageLibrary:', err?.errorMessage)
            })
        }
      }
    )
  }
}

export default UserSetting

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  headerIcon: {
    width: px2Dp(140),
    height: px2Dp(140),
    borderRadius: px2Dp(80)
  },
  arrowRight: {
    width: px2Dp(16),
    height: px2Dp(30),
    marginRight: px2Dp(15),
    borderRadius: px2Dp(80)
  },
  itemView: {
    paddingHorizontal: px2Dp(16),
    paddingVertical: px2Dp(10),
    backgroundColor: 'white',
    alignItems: 'center'
  },
  btnView: {
    height: px2Dp(90),
    paddingHorizontal: px2Dp(16),
    paddingVertical: px2Dp(10),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: isIOS() ? getBottomSpace() : px2Dp(20)
  },
  userView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: px2Dp(12)
  },
  nickName: {
    fontWeight: '400',
    fontSize: px2Dp(32),
    color: '#000100'
  },
  userName: {
    fontWeight: '300',
    fontSize: px2Dp(24),
    color: '#8B8B8D',
    marginTop: px2Dp(5)
  },
  greySpace: {
    height: px2Dp(20),
    backgroundColor: '#F0F0F0'
  },
  btnTxt: {
    fontWeight: '400',
    fontSize: px2Dp(32),
    color: '#000100'
  }
})
