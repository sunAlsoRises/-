<template>
    <div class="news-list-contains">
        <div class="mianbao">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <header class="main-title" id="main-title">
                <h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新闻和活动</font></font></h1>
            </header>
            <!--图片列表-->
            <div class="news-list">
                <div class="left col-lg-8 col-xs-12 col-sm-12 col-md-8" >
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="thumbnail">
                                <img src="./img/hanhan.jpg" alt="韩寒">
                                <div class="caption">
                                    <h3>模块化与线性GCSE</h3>
                                    <p>考试结构是否重要？</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="thumbnail">
                                <img src="./img/facebook banner.jpg" alt="交友">
                                <div class="caption">
                                    <h3>数字墓地：死者正在接管虚拟网络吗？</h3>
                                    <p>论现代人工智能与大数据</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="thumbnail">
                                <img src="./img/insight_seis.jpg" alt="传感器">
                                <div class="caption">
                                    <h3>英国传感器捕获的第一次'Marsquake'</h3>
                                    <p>...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="demonstration">本周新闻</h2>
                        <el-carousel height="300px" :interval="1500">
                            <el-carousel-item>
                                <h3 class="medium">
                                    <img class="img-responsive" src="./img/lb1.jpg">
                                </h3>
                            </el-carousel-item>
                            <el-carousel-item>
                                <h3 class="medium">
                                    <img class="img-responsive" src="./img/lb2.jpg">
                                </h3>
                            </el-carousel-item>
                            <el-carousel-item>
                                <h3 class="medium">
                                    <img src="./img/cd.jpg">
                                </h3>
                            </el-carousel-item>
                            <el-carousel-item>
                                <h3 class="medium">
                                    <img  src="./img/23.jpg">
                                </h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="right col-lg-4 col-md-4 hidden-sm hidden-xs">
                    <NewRight/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewRight from '../../components/NewRight/NewRight.vue'
    export default {
        name: "NewList",
        components: {
            NewRight
        },
    }
</script>

<style scoped>
    .mianbao{
        margin: 20px 0;
    }
    .main-title{
        margin: 15px 0;
    }
    .main-title h1{
        font-family: "PT Sans Narrow",'Helvetica Neue',Arial,Helvetica,sans-serif;
        font-size: 4.375em;
        margin-right: 18%;
        font-weight: 700;
        line-height: 1.05em;
    }
    .el-row{
        margin: 0 -10px;
    }
    .el-col-6{
        padding: 0 10px;
    }
    .news-list .left{
        padding: 0;
    }
    .news-list .right{
        padding: 0 20px;
        margin-left: 10px;
        margin-right: -10px;
    }

</style>