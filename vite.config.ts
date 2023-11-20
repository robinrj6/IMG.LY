/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react';
import hash from 'object-hash';
import { UserConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import svgr from 'vite-plugin-svgr';

const baseConfig: UserConfig = {
  plugins: [
    svgr(),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/typography.scss',
          dest: 'styles',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@imgly-labs/imgly-website-components',
      fileName: 'imgly-website-components',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@ariakit/react'],
      output: {
        name: '@imgly-labs/imgly-website-components',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@ariakit/react': 'AriaKit',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') {
            return 'imgly-website-components.css';
          }
          return assetInfo.name;
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName:
        process.env.NODE_ENV === 'production'
          ? (name, filename, css) => {
              // note: return the classname if it contains `imgly--` since these should be available globally
              if (name.includes('imgly--')) {
                return name;
              }

              const start = css.indexOf(`${name} {`);
              const end = css.indexOf('}', start);
              const content = css
                .slice(start + name.length + 1, end + 1)
                .replace(/[\r\n]/, '');

              return `imgly_${hash({ name, filename, content }).substring(
                0,
                5,
              )}`;
            }
          : 'imgly_[local]_[hash:base64:5]',
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  baseConfig.define = {
    'process.env.NODE_ENV': '"production"',
  };
}

export { baseConfig };

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default mergeConfig(baseConfig, {
  plugins: [dts({ copyDtsFiles: false })],
});
