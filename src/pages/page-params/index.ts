type WithScreenProps<P> = P & { [key: string]: string }

export type PageParamList = {
  WaterFall: WithScreenProps<{ from: string }>
}
