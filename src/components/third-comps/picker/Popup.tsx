import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from '../modal/ModalView'
import PopupMixin from './PopupMixin'

const getModal = (props: any, visible: any, { getContent, hide, onDismiss, onOk }: any) => {
  const { styles, title, okText, dismissText } = props

  const titleEl = typeof title === 'string' ? <Text style={[styles.title]}>{title}</Text> : title
  const okEl = typeof okText === 'string' ? <Text style={[styles.actionText, styles.okText]}>{okText}</Text> : okText
  const dismissEl =
    typeof dismissText === 'string' ? (
      <Text style={[styles.actionText, styles.dismissText]}>{dismissText}</Text>
    ) : (
      dismissText
    )

  return (
    <Modal animationType="slide-up" wrapStyle={styles.modal} style={styles.container} visible={visible} onClose={hide}>
      <View style={[styles.header]}>
        <TouchableOpacity onPress={onDismiss} style={[styles.headerItem, styles.headerLeftItem]} activeOpacity={0.75}>
          {dismissEl}
        </TouchableOpacity>
        <View style={[styles.headerItem]}>{titleEl}</View>
        <TouchableOpacity onPress={onOk} style={[styles.headerItem, styles.headerRightItem]} activeOpacity={0.75}>
          {okEl}
        </TouchableOpacity>
      </View>
      {getContent()}
    </Modal>
  )
}

export default PopupMixin(getModal, {
  actionTextUnderlayColor: '#ddd',
  actionTextActiveOpacity: 1,
  triggerType: 'onPress',
  styles: {},
  WrapComponent: View as any
})
