export default {
  history: 'hash',
  treeShaking: true,
  disableCSSModules: false,
  publicPath: "./",
  outputPath: "./dist",
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-react',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
