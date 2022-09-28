import React, { PropsWithChildren, useState } from 'react'
import dayjs from 'dayjs'
import { DatePicker } from '@comps'

const FDataPicker = (props: FDataPickerProps) => {
  const { children, value, onSelect, disabled, onCancel } = props
  const initValue = value.split('-')
  initValue[1] = `${parseInt(initValue[1]) - 1}`

  const [data, setDate] = useState<Array<string>>(initValue)

  return (
    <DatePicker
      mode="date"
      disabled={disabled}
      value={new Date(Number(data[0]), Number(data[1]), Number(data[2]))}
      maxDate={new Date()}
      onDismiss={onCancel}
      onChange={data => {
        onSelect(dayjs(data).format('YYYY-MM-DD'))
      }}
      onValueChange={(values: Array<string>) => setDate(values)}
    >
      {children}
    </DatePicker>
  )
}

export default React.memo(FDataPicker)

type FDataPickerProps = PropsWithChildren<{
  value: string
  disabled: boolean
  onCancel: () => void
  onSelect: (va: string) => void
}>
