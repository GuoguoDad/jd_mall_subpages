module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@store',
            rootPathSuffix: './src/store'
          },
          {
            rootPathPrefix: '@pages',
            rootPathSuffix: './src/pages'
          },
          {
            rootPathPrefix: '@routes',
            rootPathSuffix: './src/routes.ts'
          },
          {
            rootPathPrefix: '@kit',
            rootPathSuffix: './src/kit'
          },
          {
            rootPathPrefix: '@img',
            rootPathSuffix: './src/images'
          },
          {
            rootPathPrefix: '@comps',
            rootPathSuffix: './src/components'
          },
          {
            rootPathPrefix: '@type',
            rootPathSuffix: './src/config/types'
          },
          {
            rootPathPrefix: '@config',
            rootPathSuffix: './src/config'
          },
          {
            rootPathPrefix: '@http',
            rootPathSuffix: './src/http'
          },
          {
            rootPathPrefix: '@params',
            rootPathSuffix: './src/pages/page-params'
          }
        ]
      }
    ]
  ]
}
