<template>
    <div class="logo">
        <img class="img-logo" src="./img/logo.jpg">
        <el-carousel :interval="3000" type="card" height="400px">
            <el-carousel-item>
                <h3 class="medium">
                    <img src="./img/lb1.jpg">
                </h3>
            </el-carousel-item>
            <el-carousel-item >
                <h3 class="medium">
                    <img src="./img/lb2.jpg">
                </h3>
            </el-carousel-item>
            <el-carousel-item >
                <h3 class="medium">
                    <img src="./img/lb3.jpg">
                </h3>
            </el-carousel-item>
            <el-carousel-item >
                <h3 class="medium">
                    <img src="./img/lb4.jpg">
                </h3>
            </el-carousel-item>
            <el-carousel-item >
                <h3 class="medium">
                    <img src="./img/lb5.jpg">
                </h3>
            </el-carousel-item>
        </el-carousel>
        <!--图片列表-->
        <div class="news-list">
            <div class="title"><h2>来自南华大学的新闻</h2></div>
            <el-row>
                <el-col :span="6" class="col-xs-6 col-sm-6">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="./img/hanhan.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>韩寒电影飞驰人生到我校宣传</span>
                            <div class="bottom clearfix">
                                <time class="time">我也不知道为啥,他要来我校宣传,可能是我校的姑娘比较多</time>
                                <el-button type="text" class="button">查看新闻</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="col-xs-6 col-sm-6">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="./img/news1.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>我校开展防辐射讲座</span>
                            <div class="bottom clearfix">
                                <time class="time">每一点辐射,是对地球的不负责</time>
                                <el-button type="text" class="button">查看新闻</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="col-xs-6 col-sm-6">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="./img/news2.png" class="image">
                        <div style="padding: 14px;">
                            <span>南华大学某颁奖典礼</span>
                            <div class="bottom clearfix">
                                <time class="time">猜猜都谁获奖了</time>
                                <el-button type="text" class="button">查看新闻</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="col-xs-6 col-sm-6">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="./img/news3.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>论中国贫富差距为什么这么大</span>
                            <div class="bottom clearfix">
                                <time class="time">中国的贫富差距只会越来越大,就像永远不停的房价</time>
                                <el-button type="text" class="button">查看新闻</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    @import "../../common/css/bootstrap.min.css";
    .logo .img-logo{
        height: 70px;
        width: 100%;
    }
    /*走马灯*/
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-row{
        margin: 0 -10px;
    }
    .el-col-6{
        padding: 0 10px;
    }
    /*图片列表*/
    .news-list{
        background: rgb(195,215,164);
    }
    .news-list .title{
        font-size: 40px;
        line-height: 40px;
        padding: 20px 0;
    }
</style>