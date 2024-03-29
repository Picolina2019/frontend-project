import path from 'path';
import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };
  config!.resolve!.modules = [
    path.resolve(__dirname, '../../src'),
    'node_modules',
  ];
  config?.resolve?.extensions?.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  // config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
  //   if (/svg/.test(rule.test as string)) {
  //     return { ...rule, exclude: /\.svg$/i };
  //   }
  //   return rule;
  // });
  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule) => (/svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule));
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config!.module!.rules!.push(buildCssLoader(true));
  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://google.com'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
