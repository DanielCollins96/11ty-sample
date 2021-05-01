module.exports = function (eleventyConfig) {

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("src/css");
//   eleventyConfig.addWatchTarget('./_tmp/style.css')
//   eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};