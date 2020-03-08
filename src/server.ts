#!/usr/bin/env node

import * as server from 'pushstate-server'
import * as chalk from 'chalk'


export default ({dir, port}) => {
  server.start({
    port,
    directories: dir.split(','),
  }, () => {
    console.log(`\n服务启动成功：${chalk.cyan(`http://0.0.0.0:${port}`)}\n`)
  })
}
