import { baseConfig } from './vite.config';

if (baseConfig.build.lib) {
  baseConfig.build.lib.entry = './src/index.umd.tsx';
  baseConfig.build.lib.formats = ['umd'];
}

// bundle ariakit into the UMD bundle
baseConfig.build.rollupOptions.external = ['react', 'react-dom'];
// @ts-ignore
baseConfig.build.rollupOptions.output.globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default baseConfig;
