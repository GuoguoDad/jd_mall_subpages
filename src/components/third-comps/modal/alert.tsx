import React from 'react'
import Portal from '../portal'
import AlertContainer from './AlertContainer'
import { Action } from './PropsType'
import { TextStyle } from 'react-native'

export default function a(
  title: React.ReactNode,
  titleStyle: TextStyle,
  content: React.ReactNode,
  actions: Action[] = [{ text: '确定' }]
) {
  const key = Portal.add(
    <AlertContainer
      title={title}
      titleStyle={titleStyle}
      content={content}
      actions={actions}
      onAnimationEnd={(visible: boolean) => {
        if (!visible) {
          Portal.remove(key)
        }
      }}
    />
  )
}
