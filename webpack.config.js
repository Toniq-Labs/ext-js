const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { EsbuildPlugin } = require('esbuild-loader')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const generalConfig = {
  entry: './src/index.js',
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    //new NodePolyfillPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'node'
        }
      },
    ]
  },
  resolve: {
    fallback: {
      "crypto-browserify": require.resolve("crypto-browserify"),
      "crypto": false,
      Buffer: require.resolve('buffer'),
      fetch: require.resolve('whatwg-fetch'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'node'
      }),
    ],
  },
};

const nodeConfig = {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.cjs.js',
    //globalObject: 'this',
    libraryTarget: 'commonjs',
    libraryExport: 'default',
  },
};
const moduleConfig = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.esm.js',
    globalObject: 'this',
    libraryTarget: 'module',
    libraryExport: 'default',
  },
  experiments: {
    outputModule: true,
  },
};
const browserConfig = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.umd.js',
    globalObject: 'this',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    library: 'extjs',
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    generalConfig.devtool = 'cheap-module-source-map';
    generalConfig.mode = 'development';
  } else if (argv.mode === 'production') {
  } else {
    throw new Error('Specify env');
  }

  Object.assign(nodeConfig, generalConfig);
  Object.assign(moduleConfig, generalConfig);
  Object.assign(browserConfig, generalConfig);

  return [nodeConfig, moduleConfig, browserConfig];
};