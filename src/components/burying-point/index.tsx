import React from 'react'
import { NavigationInjectedProps } from 'react-navigation'
import { ScreenProps } from '@type'

export function withBuryingPoint<P extends Omit<Readonly<withBuryingPointProps | NavigationInjectedProps>, ''>>(
  WrappedComponent: React.ComponentType<P>
) {
  return class extends React.Component<P> {
    constructor(props: P) {
      super(props)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

type withBuryingPointProps = {
  screenProps: ScreenProps
} & NavigationInjectedProps
