'use strict'

const env = process.env.NODE_ENV || 'dev'
const envLabel = {
  'prod': '生产',
  'test': '测试',
  'dev': '开发',
}
const accet = {
  username: 'test',
  password: 'test',
}
const serverMap = {
  'prod': {
    host: '192.168.1.1',
    port: '22'
  },
  'test': {
    host: '192.168.1.1',
    port: '22'
  },
  'dev': {
    host: '192.168.1.1',
    port: '22'
  },
}
// 路径禁止为 / 或者 /*  
const path = '/home/www/html/' // 项目部署的服务器目标位置
const name = 'vue-template' // 项目名称
const dist = './dist/' // 打包后项目文件

const backupCmd = (conn)=> {
 return new Promise((resolve, reject)=> {
  conn.exec(`rm -rf ${path+name}.back`, (rmErr, rmStream)=> {
    if(rmErr) reject(rmErr)
    rmStream.on('close', ()=> {
      conn.exec(`mv ${path+name} ${path+name}.back`, (mvErr, mvStream)=> {
        if(mvErr) reject(mvErr)
        mvStream.on('close', ()=>{
          resolve()
        })
      })
    })
  })
 })
}
// 引入scp2
let scp2 = require('scp2')
let Client = require('ssh2').Client

// 打印相关
let ora = require('ora')
let chalk = require('chalk')
let uploadTips = ora(chalk.green(`正在部署到${envLabel[env]}环境...`))

// log
let os = require('os')
let fs = require('fs')
let fetchIp = ()=> {
  let ip = []
  try {
    let networkInterfaces = os.networkInterfaces()
    for(let key in networkInterfaces){
      let iface = networkInterfaces[key]
      iface.forEach(i=> { i.family === 'IPv4' && i.address !== '127.0.0.1' && !i.internal && ip.push({
        address: i.address,
        mac: i.mac
      }) })
    }
  } catch (e) {
    console.log(chalk.red("获取本地环境信息失败!"))
    console.log(chalk.red(e))
    ip = ['no fetch']
  }
  return JSON.stringify(ip)
}
fs.stat(dist, (err, stats)=> {
  if(!err && stats.isDirectory()){
    fs.writeFile(`${dist}log`,
    `hostname: ${os.hostname()}
    platform: ${os.platform()}
    ip: ${fetchIp()}
    date: ${Date.now()}
    `, 'utf8', err=> {})
  }
})

// deploy
let conn = new Client()
conn.on('ready', ()=> {
  uploadTips.start()
  backupCmd(conn).then(()=> {
    scp2.scp(dist, {    // 本地打包文件的位置
      ...serverMap[env],
      ...accet,
      path: path + name,
    }, err =>{
      uploadTips.stop()
      if (!err) {
        console.log(chalk.green(`项目已部署到${envLabel[env]}环境!`))
      } else {
        console.log(chalk.red(`项目部署出错了!`), err)
      }
    })
    conn.end()
  }).catch(e=> {
    console.log('备份操作出错了！', e)
    uploadTips.stop()
  })
}).connect({
  ...serverMap[env],
  ...accet
  //privateKey: require('fs').readFileSync('xxxx')
})
