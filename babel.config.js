module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            contexts: "./src/contexts",
            enviroments: "./src/enviroments",
            hooks: "./src/hooks",
            pages: "./src/pages",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
