module.exports = function(eleventyConfig) {
    const markdownIt = require('markdown-it')
    const markdownItAttrs = require('markdown-it-attrs')
    const markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true
    }
    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
    eleventyConfig.addPassthroughCopy('condensate.css');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('comic-img');
    eleventyConfig.addPassthroughCopy('comic-html');
    eleventyConfig.addPassthroughCopy('variables.css');
    eleventyConfig.setNunjucksEnvironmentOptions({
      throwOnUndefined: true,
      autoescape: false, // warning: don’t do this!
    });
    eleventyConfig.setLibrary('md', markdownLib);
    return {
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk"
    }
};