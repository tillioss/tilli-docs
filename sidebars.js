/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide /previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [

    {
      type: 'category',
      label: 'Introduction',
      items: [
        "project-charter"],
    },
   {
     type: 'category',
      label: 'Brand',
      items: ["Brand-Guidelines", "Logo", "Color",
        "Typography", "Art-assets"],
   },
    {
      type: 'category',
      label: 'Open Source',
      items: ["licenses", "os-strategy", "OpensourceQAProcess",
        "Contribution-Guidelines", "code-of-conduct"],
    },
    {
      type: 'category',
      label: 'User and Developer Documentation',
      items: ["getting-started-developer",
      ],
    },
  ],


};

module.exports = sidebars;
