import {defineConfig, expect} from "@playwright/test";
export default defineConfig({
     reporter: [['html', { outputFolder: "./defaultReport" , open: 'never'}]],
    fullyParallel: true,
    workers: 2,
    retries: 0,
    timeout: 300000,
    use: {
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: {
            mode: "on",
            size: { width: 1920, height: 1080 }
        },
        navigationTimeout: 60000,
        viewport: null,
        launchOptions: {
            args: ["--start-maximized", "--allow-file-access-from-files", "--remote-allow-origins",
                "--allow-insecure-localhost", "--no-sandbox", "--ignore-certificate-errors", "--disable-web-security",
                "--Access-Control-Allow-Credentials"]  // --allow-file-access-from-files, "--remote-allow-origins"
        },
        browserName: "chromium",
        channel: "chrome",
        headless: false,
        ignoreHTTPSErrors: true
    },
});