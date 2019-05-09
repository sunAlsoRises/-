#技术选型
    vue全家桶 vue-cli3 vue-router
#校园网三个板块
    首页板块
    新闻列表板块
    新闻详情板块
   #说明
   所有静态文件都是已经过webpack打包压缩的,html只存在一个.板块以类似vue的形式进行单页面切换 
   当页面进行滑动时 三个板块的tap就会弹出 指引用户点入三个板块
   因为是静态页面  页面中所有点击a标签都是静态无效的
   
 操作
   下载依赖 npm i
  运行   vue-cli-service server
  打包  vue-cli-service build