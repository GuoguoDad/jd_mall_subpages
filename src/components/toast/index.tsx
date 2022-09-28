import React from 'react'
//@ts-ignore
import topView from 'rn-topview'
import ToastContainer from './ToastContainer'

/**
 *
 * @param content
 * @param type
 * @param duration
 * @param onClose
 * @param mask
 * @param multipleStyle
 * @param position 位置  'top'    'center'  'bottom'
 */
function notice(
  content: string,
  type: string,
  duration = 3,
  onClose: any,
  mask = false,
  multipleStyle = false,
  position: string = 'center'
) {
  topView.remove()
  function animationEnd() {
    topView.remove()
  }
  topView.set(
    <ToastContainer
      content={content}
      duration={duration}
      onClose={onClose}
      type={type}
      mask={mask}
      onAnimationEnd={animationEnd}
      multipleStyle={multipleStyle}
      position={position}
    />
  )
}

export default {
  SHORT: 3,
  LONG: 8,
  show(content: string, duration?: number, mask?: boolean, multipleStyle?: boolean) {
    return notice(content, 'info', duration, () => {}, mask, multipleStyle)
  },
  info(
    content: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
    multipleStyle?: boolean,
    position?: string
  ) {
    return notice(content, 'info', duration, onClose, mask, multipleStyle, position)
  },
  success(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'success', duration, onClose, mask)
  },
  fail(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'fail', duration, onClose, mask)
  },
  offline(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'offline', duration, onClose, mask)
  },
  loading(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'loading', duration, onClose, mask)
  },
  hide() {
    topView.remove()
  }
}
