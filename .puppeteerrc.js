const join = import("path").join;

/**
 * @type {import("puppeteer").Configuration}
 */
const puppeteerConfig = () => {
  return {
    // Changes the cache location for Puppeteer. reinstall puppeteer to take effect
    cacheDirectory: join(__dirname, ".cache", "puppeteer"),
  };
};

module.exports = puppeteerConfig;
