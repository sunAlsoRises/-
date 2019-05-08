<template>
  <div id="app">
    <el-container>
      <el-header style="height: 40px">
          <HeaderMenu/>
      </el-header>
      <el-main>
        <ThreePage/>
        <router-view/>
      </el-main>
      <el-footer>
        <FooterGuide/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu/HeaderMenu.vue'
import FooterGuide from "./components/FooterGuide/FooterGuide";
import ThreePage from "./components/ThreePage/ThreePage";
// import Canvas from "./components/Canvas/Canvas";
export default {
  name: 'app',
  components: {
    FooterGuide,
    HeaderMenu,
    ThreePage,
    // Canvas
  },
  data () {
    return {
      lb: [{img:"../static/img/lb1.jpg"},{img:"../static/img/lb2.jpg"},
        {img:"../static/img/lb3.jpg"},{img:"../static/img/lb4.jpg"},
        {img:"../static/img/lb5.jpg"},],
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>

<style scoped>
  @import "common/css/bootstrap.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#app .el-container{

}
.el-container .el-header{
  padding: 0;
}
.el-container .el-main{
  /*padding: 0;*/
  padding-top: 0;
  padding-bottom: 0;
}

  /*底部*/
</style>
