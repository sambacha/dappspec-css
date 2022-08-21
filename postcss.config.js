const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
// const postcssCustomMedia = require('postcss-custom-media');

postcss([
  postcssPresetEnv({
autoprefixer: false
})
]).process(YOUR_CSS /*, processOptions */);