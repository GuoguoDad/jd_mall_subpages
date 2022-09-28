import * as React from 'react'
import LocaleProvider, { Locale } from '../locale-provider'
import Portal from '../portal'
import { Theme, ThemeProvider } from '../style'

export interface ProviderProps {
  locale?: Partial<Locale>
  theme?: Partial<Theme>
  children?: React.ReactNode | undefined
}
export default class Provider extends React.Component<ProviderProps> {
  render() {
    return (
      <LocaleProvider locale={this.props.locale}>
        <ThemeProvider value={this.props.theme}>
          <Portal.Host>{this.props.children}</Portal.Host>
        </ThemeProvider>
      </LocaleProvider>
    )
  }
}
