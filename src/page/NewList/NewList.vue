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
                                    <img src="./img/w1.jpg">
                                </h3>
                            </el-carousel-item>
                            <el-carousel-item>
                                <h3 class="medium">
                                    <img  src="./img/w2.jpg">
                                </h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="pinglun">
                        <div class="row">
                            <div class="col-xs-6 col-md-4">
                                <a href="#" class="thumbnail">
                                    <img src="./img/c1.jpg" alt="...">
                                </a>
                                <p>这个是啥新闻我也不知道</p>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <a href="#" class="thumbnail">
                                    <img src="./img/c2.jpg" alt="...">
                                </a>
                                <p>你要是想知道就自己去找</p>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <a href="#" class="thumbnail">
                                    <img src="./img/c3.jpg" alt="...">
                                </a>
                                <p>南华大学超级劲爆新闻</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right col-lg-4 col-md-4 hidden-sm hidden-xs">
                    <NewRight/>
                </div>
            </div>
        </div>
        <div class="hafo">
            <div class="home-collections">


                <div class="article-collection-teases">

                    <h3 class="article-collection-teases__head article-collection-teases__head--short"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        校园和社区	</font></font></h3>

                    <div class="article-collection-teases__teases article-collection-teases__teases--layout-3-centered">


                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-274157 post type-post status-publish format-standard has-post-thumbnail hentry category-campus-community tag-dean-claudine-gay tag-edward-j-hall tag-edward-w-kohler tag-harvard-college-professors tag-matthew-k-nock tag-paola-arlotta tag-suzannah-clark">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#">
                                        <img width="500" height="500" src="./img/lb2.jpg" class="" alt=""
                                             sizes="(max-width: 500px) 100vw, 500px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#ttps://news.harvard.edu/gazette/section/campus-community/">
                                                Campus					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/five-faculty-named-harvard-college-professors/" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                5名南华大学教授					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FAS的教师来自一系列学科，但他们热爱学习</font></font></p>


                                </div>
                            </article>
                        </div>

                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-274384 post type-post status-publish format-standard has-post-thumbnail hentry category-campus-community tag-eleanor-lieberman tag-fas tag-ikeoluwa-adeyemi tag-manisha-aggarwal-schifellite tag-matthew-akre tag-max-vumbaca tag-salvador-pena tag-student-employment-office tag-william-fitzsimmons">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#">
                                        <img width="500" height="500" src="./img/w2.jpg" class="" alt="SalvadorPeña看着办公室的档案"
                                             sizes="(max-width: 500px) 100vw, 500px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#">
                                                Campus					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                学生员工很荣幸					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个新的活动表彰那些在大学期间工作的人的贡献</font></font></p>


                                </div>
                            </article>
                        </div>

                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-272687 post type-post status-publish format-standard has-post-thumbnail hentry category-campus-community tag-crimson-ems tag-gallery-2 tag-huhs tag-medicine tag-pro-ems tag-rose-lincoln">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#">
                                        <img width="500" height="500" src="./img/w1.jpg" class="" alt="Terzah Hill观察Evan Komorowski和Thomas Wobby移动轮床。"
                                             sizes="(max-width: 500px) 100vw, 500px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#">
                                                Campus					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/crimson-ems-trains-harvard-students-in-cpr-and-other-life-saving-techniques/" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                南华 新领袖 在行动					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">南华大学自己的学生军医小组提供心肺复苏术和其他救生技术的培训</font></font></p>


                                </div>
                            </article>
                        </div>

                    </div>
                </div>

                <div class="article-collection-teases">

                    <h3 class="article-collection-teases__head article-collection-teases__head--short"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        科学技术	</font></font></h3>

                    <div class="article-collection-teases__teases article-collection-teases__teases--layout-3-asymmetric">


                        <div class="tz-article-collection tz-article-collection--wide">
                            <article class="tz-article-collection__article post-273890 post type-post status-publish format-standard has-post-thumbnail hentry category-science-technology tag-acute-myeloid-leukemia tag-aml tag-brian-liau tag-chemistry tag-chemistry-and-chemical-biology tag-crispr tag-leukemia tag-nature-chemical-biology">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-chemist-teases-out-why-drugs-work-or-dont/">
                                        <img width="1200" height="800" src="./img/hanhan.jpg" class="" alt="教授坐在白板前"  sizes="(max-width: 1200px) 100vw, 1200px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="#">
                                                Science					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                了解为什么癌症药物起作用（或不起作用）					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">研究员Brian Liau和他的团队将CRISPR基因编辑技术与化学分析相结合，以梳理出急性髓性白血病机制</font></font></p>


                                </div>
                            </article>
                        </div>

                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-272107 post type-post status-publish format-standard has-post-thumbnail hentry category-science-technology tag-animals tag-basic-research tag-birds tag-data-science tag-evolution tag-genetics tag-informatics tag-tim-sackton">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-study-explores-genetics-behind-evolution-of-flightless-birds/">
                                        <img width="500" height="500" src="./img/news3.jpg" class="" alt="研究人员展示了不会飞的鸟类的骷髅。"
                                              sizes="(max-width: 500px) 100vw, 500px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#ttps://news.harvard.edu/gazette/section/science-technology/">
                                                Science					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-study-explores-genetics-behind-evolution-of-flightless-birds/" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                不会飞的鸟类的进化					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">研究探讨了它们发展背后的遗传学</font></font></p>


                                </div>
                            </article>
                        </div>

                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-273609 post type-post status-publish format-standard has-post-thumbnail hentry category-science-technology tag-ai tag-artificial-intelligence tag-blavatnik-institute tag-cell tag-harvard-medical-school tag-hms tag-macaques tag-margaret-livingstone tag-neurobiology tag-will-xiao">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-medical-school-develops-ai-to-see-visual-cortexs-preferences/">
                                        <img width="500" height="500" src="./img/c2.jpg" class="" alt="照片操纵一个人在配置文件中，在云层上"
                                             sizes="(max-width: 500px) 100vw, 500px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#ttps://news.harvard.edu/gazette/section/science-technology/">
                                                Science					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-medical-school-develops-ai-to-see-visual-cortexs-preferences/" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                容易上眼睛					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人工智能揭示了视觉皮层中的神经元更喜欢看什么</font></font></p>


                                </div>
                            </article>
                        </div>

                    </div>
                </div>

                <div class="article-collection-teases">

                    <h3 class="article-collection-teases__head article-collection-teases__head--short"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        健康与医学	</font></font></h3>

                    <div class="article-collection-teases__teases article-collection-teases__teases--layout-3-centered">


                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-274426 post type-post status-publish format-standard has-post-thumbnail hentry category-health-medicine tag-adrian-veres tag-diabetes tag-douglas-melton tag-felicia-pagliuca tag-insulin tag-semma-therapeutics tag-stem-cell tag-type-1-diabetes">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-researchers-advance-cell-therapy-for-diabetes/">
                                        <img width="500" height="500" src="./img/news1.jpg" class="" alt="两个多彩的细胞簇"
                                             sizes="(max-width: 500px) 100vw, 500px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#">
                                                Health					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-researchers-advance-cell-therapy-for-diabetes/" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                改善糖尿病的细胞疗法					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以南华为首的研究提高了用于糖尿病治疗的胰岛素生成细胞的产量</font></font></p>


                                </div>
                            </article>
                        </div>

                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-273163 post type-post status-publish format-standard has-post-thumbnail hentry category-health-medicine tag-alvin-powell tag-amino-acid tag-beth-israel-deaconess-medical-center tag-breast-cancer tag-drug-resistance tag-leucine tag-scl7a5 tag-senthil-muthuswamy tag-tamoxifen">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/dietary-link-found-to-drug-resistant-breast-cancer/">
                                        <img width="500" height="500" src="./img/news2.png" class="" alt="肉，鱼，乳制品，鸡蛋，在一张木桌上的白肉作为背景"
                                              sizes="(max-width: 500px) 100vw, 500px">
                                    </a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#">
                                                Health					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/dietary-link-found-to-drug-resistant-breast-cancer/" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                膳食联系发现耐药性乳腺癌					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在动物产品和豆类中发现的氨基酸亮氨酸阻断了药物的有效性</font></font></p>


                                </div>
                            </article>
                        </div>

                        <div class="tz-article-collection tz-article-collection--square">
                            <article class="tz-article-collection__article post-273630 post type-post status-publish format-standard has-post-thumbnail hentry category-health-medicine tag-ahmed-nasser tag-alvin-powell tag-benjamin-aiwonodagbon tag-disaster-relief tag-field-hospital tag-global-disaster-response-program tag-harold-parker-state-forest tag-harvard-humanitarian-initiative tag-harvard-t-h-chan-school-of-public-health tag-humanitarian-academy-at-harvard tag-lindsey-martin tag-massachusetts-general-hospital tag-sarah-klem tag-simulation tag-stephanie-kayden">

                                <div class="tz-article-collection__top">
                                    <a class="" href="#">
                                        <img width="500" height="500" src="./img/c2.jpg" class="" alt="参与者学会在人道主义灾难模拟中治疗伤害。"
                                             sizes="(max-width: 500px) 100vw, 500px">			</a>
                                </div>

                                <div class="tz-article-collection__bottom">
                                    <div class="tz-article-collection__meta">
                                        <h3 class="tz-article-collection__cat">
                                            <a class="tz-article-collection__cat-link" href="#">
                                                Health					</a>
                                        </h3>

                                        <h2 class="tz-article-collection__title">
                                            <a class="" href="#ttps://news.harvard.edu/gazette/story/2019/05/harvard-tufts-mit-stage-3-day-humanitarian-disaster-simulation/" rel="bookmark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                                在寒冷和雨中，关于照顾的一个庞大的教训					</font></font></a>
                                        </h2>
                                    </div>

                                    <p class="tz-article-collection__subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为期3天的人道主义灾难模拟为北安多佛州立公园带来了数百人</font></font></p>


                                </div>
                            </article>
                        </div>

                    </div>
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
/*hafo*/
    :root {
        --theme: #a51c30;
        --theme--darker: #95192b;
    }
    .home-collections {
        margin: 0;
    }
    body, body * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .theme-6 {
        --theme: #083fa4;
        --theme--darker: #073994;
    }
    @media (min-width: 800px){
        .home-collections .article-collection-teases {
            padding-bottom: 0;
        }
    }

        .home-collections .article-collection-teases {
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
        @media (min-width: 1070px){
            .article-collection-teases {
                margin-bottom: 0;
            }
        }

            @media (min-width: 1070px){
                .article-collection-teases {
                    margin-bottom: 60px;
                }
            }

                .article-collection-teases {
                    max-width: 1224px;
                    margin-left: auto;
                    margin-right: auto;
                    z-index: 10;
                    position: relative;
                    margin: 0 auto 40px;
                }








    .article-collection-teases__head {
        font-family: Dinamit;
        font-size: 21px;
        line-height: 1.25;
        font-weight: 200;
        font-style: normal;
        text-transform: none;
        position: relative;
        z-index: 10;
        margin: 0;
    }
    @media (min-width: 1500px){
        .article-collection-teases__head {
            font-size: 55px;
        }
    }
    .article-collection-teases__head {
        font-family: Dinamit;
        font-size: 21px;
        line-height: 1.25;
        font-weight: 200;
        font-style: normal;
        text-transform: none;
        position: relative;
        z-index: 10;
        margin: 0;
    }
    @media (min-width: 1500px){
        .article-collection-teases__head {
            font-size: 55px;
        }
    }
    .article-collection-teases__head--short:before {
        content: '';
        display: block;
        position: absolute;
        left: -55px;
        width: 45px;
        height: 2px;
        background-color: #a51c30;
        background-color: var(--theme);
    }
    @media (min-width: 1099.2px){
        .article-collection-teases__head--short:before {
            top: 35px;
        }
    }

    @media (min-width: 1500px){
        .article-collection-teases__head--short:before {
            top: 35px;
        }
    }
    .article-collection-teases__head {
        font-family: Dinamit;
        font-size: 21px;
        line-height: 1.25;
        font-weight: 200;
        font-style: normal;
        text-transform: none;
        position: relative;
        z-index: 10;
        margin: 0;
    }
    @media (min-width: 1500px){
        .article-collection-teases__head {
            font-size: 55px;
        }
    }
    .article-collection-teases__head--short {
        margin: 0 0 20px;
    }

    @media (min-width: 600px){
        .article-collection-teases__head--short {
            margin-bottom: 40px;
        }
    }

                                        .article-collection-teases__teases {
                                            z-index: 30;
                                            position: relative;
                                            pointer-events: all;
                                        }
                                        @media (min-width: 800px){
                                            .article-collection-teases__teases {
                                                margin-bottom: 30px;
                                                display: -webkit-box;
                                                display: -webkit-flex;
                                                display: -ms-flexbox;
                                                display: flex;
                                                -webkit-box-pack: start;
                                                -webkit-justify-content: flex-start;
                                                -ms-flex-pack: start;
                                                justify-content: flex-start;
                                                -webkit-box-align: end;
                                                -webkit-align-items: flex-end;
                                                -ms-flex-align: end;
                                                align-items: flex-end;
                                                -webkit-flex-wrap: nowrap;
                                                -ms-flex-wrap: nowrap;
                                                flex-wrap: nowrap;
                                                position: relative;
                                                z-index: 20;
                                            }
                                        }

                                            @media (min-width: 800px){
                                                .article-collection-teases__teases--layout-3-centered {
                                                    -webkit-box-pack: justify;
                                                    -webkit-justify-content: space-between;
                                                    -ms-flex-pack: justify;
                                                    justify-content: space-between;
                                                    -webkit-box-align: center;
                                                    -webkit-align-items: center;
                                                    -ms-flex-align: center;
                                                    align-items: center;
                                                }
                                            }

                                                @media (min-width: 800px) {
                                                    .article-collection-teases__teases--layout-3-centered .tz-article-collection--square:first-of-type:nth-child(1), .article-collection-teases__teases--layout-3-centered .tz-article-collection--square:first-of-type:nth-child(3), .article-collection-teases__teases--layout-3-centered .tz-article-collection--square:nth-child(1), .article-collection-teases__teases--layout-3-centered .tz-article-collection--square:nth-child(3) {
                                                        width: 27%;
                                                    }
                                                }
                                                    @media (min-width: 800px){
                                                        .article-collection-teases__teases--layout-3-centered .tz-article-collection--square, .article-collection-teases__teases--layout-3-centered .tz-article-collection--square:first-of-type {
                                                            width: 32.02614%;
                                                            -webkit-box-flex: 0;
                                                            -webkit-flex: 0 0 auto;
                                                            -ms-flex: 0 0 auto;
                                                            flex: 0 0 auto;
                                                            margin-top: 0;
                                                            margin-right: 0;
                                                            margin-left: 0;
                                                            margin-bottom: 10px;
                                                        }
                                                    }

                                                        @media (min-width: 800px){
                                                            .article-collection-teases__teases .tz-article-collection {
                                                                margin-bottom: 0!important;
                                                            }
                                                        }

                                                            @media (min-width: 600px){
                                                                .article-collection-teases__teases .tz-article-collection {
                                                                    margin-bottom: 40px;
                                                                }
                                                            }

                                                                @media (min-width: 400px){
                                                                    .article-collection-teases__teases .tz-article-collection {
                                                                        margin-bottom: 30px;
                                                                    }
                                                                }

                                                                    .article-collection-teases__teases .tz-article-collection {
                                                                        display: block;
                                                                        margin-bottom: 10px;
                                                                    }
    .article-collection-teases__teases {
        z-index: 30;
        position: relative;
        pointer-events: all;
    }
                                                                    @media (min-width: 800px){
                                                                        .article-collection-teases__teases--layout-3-centered .tz-article-collection--square .tz-article-collection__top, .article-collection-teases__teases--layout-3-centered .tz-article-collection--square:first-of-type .tz-article-collection__top {
                                                                            width: 100%;
                                                                        }
                                                                    }

                                                                        @media (min-width: 800px){
                                                                            .article-collection-teases__teases .tz-article-collection--square .tz-article-collection__top {
                                                                                width: 83.5%;
                                                                            }
                                                                        }

                                                .tz-article-collection__top {
                                                    margin: 0;
                                                    background: #fff;
                                                }
    a {
        text-decoration: none;
        color: #a51c30;
        color: var(--theme);
    }
.tz-article-collection__top img {
display: block;
height: auto;
width: 100%!important;
-webkit-transition: -webkit-filter .3s;
transition: -webkit-filter .3s;
-o-transition: filter .3s;
transition: filter .3s;
transition: filter .3s,-webkit-filter .3s;
}
                                                                            .home-collections .tz-article-collection__bottom {
                                                                                padding-top: 15px;
                                                                            }
                                                                            @media (min-width: 1070px){
                                                                                .article-collection-teases__teases .tz-article-collection__bottom {
                                                                                    height: 265px;
                                                                                }
                                                                            }

                                                                                @media (min-width: 800px){
                                                                                    .article-collection-teases__teases .tz-article-collection__bottom {
                                                                                        height: 240px;
                                                                                        overflow: hidden;
                                                                                        position: relative;
                                                                                    }
                                                                                }

                                                                                    @media (min-width: 768px){
                                                                                        .tz-article-collection__bottom {
                                                                                            padding-top: 10px;
                                                                                        }
                                                                                    }

                                                                                        .tz-article-collection__bottom {
                                                                                            padding-top: 7px;
                                                                                        }

    /**/
@media (min-width: 1500px){
    .tz-article-collection__subtitle {
        font-size: 15px;
    }
}

.tz-article-collection__subtitle {
font-family: Dinamit;
font-size: 13px;
line-height: 1.5;
font-weight: 300;
font-style: normal;
text-transform: none;
color: #000;
margin: 0;
}
    .home-collections .tz-article-collection__cat {
        display: none;
    }
    @media (min-width: 1070px){
        .tz-article-collection__cat {
            font-size: 10px;
        }
    }

        .tz-article-collection__cat {
            padding: 0;
            margin: 0 0 7px;
            padding: 0;
            margin: 0 0 10px;
            font-family: Dinamit;
            font-weight: 500;
            line-height: 1.5;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            color: #000;
            position: relative;
            display: inline-block;
            border: 0;
            font-size: 9px;
        }
        @media (min-width: 799px){
            .article-collection-teases__teases--layout-3-centered .tz-article-collection:nth-of-type(1) .tz-article-collection__title, .tz-article-collection--wide .tz-article-collection__title {
                font-size: 28px;
            }
        }

            @media (min-width: 1500px) and (min-width: 800px){
                .tz-article-collection--square .tz-article-collection__title {
                    font-size: 28px;
                }
            }

            @media (min-width: 799px){
                .tz-article-collection .tz-article-collection__title {
                    font-size: 24px;
                }
            }

                    .tz-article-collection__title {
                        font-family: "Nocturno Display";
                        font-size: 21px;
                        line-height: 1.1;
                        font-weight: 400;
                        font-style: normal;
                        text-transform: none;
                        margin: 0 0 5px;
                    }
                    .tz-article-collection__title a {
                        -webkit-transition: color .3s;
                        -o-transition: color .3s;
                        transition: color .3s;
                        color: #000;
                    }
        .article-collection-teases__teases .tz-article-collection {
            display: block;
            margin-bottom: 10px;
        }
        @media (min-width: 400px){
                        .article-collection-teases__teases .tz-article-collection {
                            margin-bottom: 30px;
                        }
                    }
                        @media (min-width: 600px){
                            .article-collection-teases__teases .tz-article-collection {
                                margin-bottom: 40px;
                            }

                        }
                        @media (min-width: 800px){
                            .article-collection-teases__teases .tz-article-collection {
                                margin-bottom: 0!important;
                            }
                        }

    /**/
                        @media (min-width: 1384px) and (min-width: 800px){
                            .article-collection-teases__teases--layout-3-asymmetric .tz-article-collection--wide {
                                width: -webkit-calc(((100vw - 1224px)/2) + 601px);
                                width: calc(((100vw - 1224px)/2) + 601px);
                            }
                        }

                            @media (min-width: 1070px) and (min-width: 800px){
                                .article-collection-teases__teases--layout-3-asymmetric .tz-article-collection--wide {
                                    width: -webkit-calc(49.01961% + 80px + 1px);
                                    width: calc(49.01961% + 80px + 1px);
                                }
                            }

                                @media (min-width: 600px) and (min-width: 800px){
                                    .article-collection-teases__teases--layout-3-asymmetric .tz-article-collection--wide {
                                        width: -webkit-calc(49.01961% + 60px + 1px);
                                        width: calc(49.01961% + 60px + 1px);
                                    }
                                }

                                    @media (min-width: 800px){
                                        .article-collection-teases__teases--layout-3-asymmetric .tz-article-collection--wide {
                                            width: -webkit-calc(49.01961% + 25px + 1px);
                                            width: calc(49.01961% + 25px + 1px);
                                            -webkit-box-flex: 1;
                                            -webkit-flex: 1 0 auto;
                                            -ms-flex: 1 0 auto;
                                            flex: 1 0 auto;
                                            -webkit-box-ordinal-group: 4;
                                            -webkit-order: 3;
                                            -ms-flex-order: 3;
                                            order: 3;
                                        }
                                    }

    /*pinglun*/
    .pinglun{
        margin-top: 80px;

    }
</style>