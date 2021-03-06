const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

// 验证是否是插件
function isPlugin(source) {
  let result = true
  if (!fs.lstatSync(source).isDirectory()) {
    return false
  }
  const configPath = path.resolve(source, './stage-config.js')
  const packagePath = path.resolve(source, './package.json')
  if (result && !fs.existsSync(configPath)) {
    result = false
  }
  if (result && !fs.existsSync(packagePath)) {
    result = false
  }
  if (!result) {
    console.log(chalk.yellow(`${source} 不符合 Lin-CMS 插件规范`))
  }

  return result
}

function getPlugins(source) {
  const folders = fs.readdirSync(source)
  const pluginsList = []

  folders.forEach((item) => {
    const itemPath = path.join(source, item)
    if (!isPlugin(itemPath)) {
      return
    }
    const config = {}
    config.name = item
    config.path = path.resolve(__dirname, `../src/plugins/${item}/`)
    pluginsList.push(config)
  })

  return pluginsList
}

module.exports = getPlugins
