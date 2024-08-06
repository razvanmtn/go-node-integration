const { execFileSync } = require("child_process")
const path = require("path")

const DIF_PATH = path.join(__dirname, "lib", "dif")
const SUM_PATH = path.join(__dirname, "lib", "sum")

const _handler = (binaryPath, args = []) => execFileSync(binaryPath, args, {
    stdio: 'pipe',
    encoding: 'utf8',
})

const dif = (...args) => _handler(DIF_PATH, args);
const sum = (...args) => _handler(SUM_PATH, args);

module.exports = { dif, sum }
