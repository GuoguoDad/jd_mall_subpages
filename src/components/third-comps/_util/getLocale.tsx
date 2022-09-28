export function getComponentLocale(props: any, context: any, componentName: string, getDefaultLocale: () => any) {
  let locale: any = {}
  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName]
  } else {
    const defaultLocale = getDefaultLocale()
    locale = defaultLocale.default || defaultLocale
  }

  let result = {
    ...locale
  }
  if (props.locale) {
    result = {
      ...result,
      ...props.locale
    }
    if (props.locale.lang) {
      result.lang = {
        ...locale.lang,
        ...props.locale.lang
      }
    }
  }
  return result
}

export function getLocaleCode(context: any) {
  const localeCode = context.antLocale && context.antLocale.locale
  // Had use LocaleProvide but didn't set locale
  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return 'zh-cn'
  }
  return localeCode
}
