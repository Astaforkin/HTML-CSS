const config = {
    testDir: '__tests__',
    snapshotDir: '__tests__/__image_snapshots__/',
    outputDir: '__tests__/__image_snapshots__/__diff_output__/',
    preserveOutput: 'failures-only',
    timeout: 5000,
    use: {
      baseURL: 'http://localhost:8080',
      browserName: 'chromium',
      headless: true,
    },
    expect: {
      timeout: 100,
    },
  };
  
  module.exports = config;