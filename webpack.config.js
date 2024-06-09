const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { EsbuildPlugin } = require('esbuild-loader');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const commonConfig = {
  entry: './src/index.js',
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
    }),
    new NodePolyfillPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'node14',
          format: 'cjs',
        },
      },
    ],
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
        target: 'node14',
        format: 'cjs',
      }),
    ],
  },
};

const nodeConfigWithDeps = {
  ...commonConfig,
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'ext.node.full.js',
    libraryTarget: 'commonjs2',
  },
  externals: [], // Include all dependencies
};

const nodeConfigWithoutDeps = {
  ...commonConfig,
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'ext.node.js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
};

const browserConfig = {
  ...commonConfig,
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'ext.js',
    globalObject: 'this',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    library: 'extjs',
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    commonConfig.devtool = 'cheap-module-source-map';
    commonConfig.mode = 'development';
  } else if (argv.mode === 'production') {
    commonConfig.mode = 'production';
  } else {
    throw new Error('Specify env');
  }

  return [nodeConfigWithDeps, nodeConfigWithoutDeps, browserConfig];
};
