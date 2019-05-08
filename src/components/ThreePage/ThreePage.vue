<template>
    <div :class="{'three-page':true ,hidden:hidden} ">
        <el-button @click="hideThree()">点击隐藏</el-button>

        <div style="display: flex; justify-content:center; height: 100px;"  >
            <transition name="el-zoom-in-center">
                <div v-show="show2" duration="3000" class="transition-box">
                    <router-link to="/index">
                        首页板块
                    </router-link>
                </div>
            </transition>

            <transition name="el-zoom-in-top">
                <div v-show="show2" class="transition-box">
                    <router-link to="/newlist">
                        栏目页板块(新闻事件)
                    </router-link>
                </div>
            </transition>

            <transition name="el-zoom-in-bottom">
                <div v-show="show2" class="transition-box">
                    <router-link to="/newinfo">
                        内容板块(新闻详情)
                    </router-link>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ThreePage",
        data: () => {
            return{
                show2: true,
                hidden:true
            }
        },
        methods: {
            hideThree(){
                this.show2 = !this.show2
                var that = this;
                setTimeout(function () {
                    that.clickHide();
                },500);

            },
            clickHide(){

                this.hidden = true
            },
            menu() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if (scrollTop >50) {
                    this.hidden = false
                    this.show2 = true
                }else {
                    this.hidden = true
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu)
        },
    }
</script>

<style scoped>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background:rgba(64,158,255,.8);
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
    .three-page .el-button--default{
        position: absolute;
        left: 10px;
    }
    .three-page{
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(48, 57, 58,.8);
        z-index: 100;
    }
</style>