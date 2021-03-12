module.exports = {
  mount: {
    'src/_site': {
      url: '/',
      static: true,
    },
    'src/scripts': '/',
    'src/styles': '/',
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
