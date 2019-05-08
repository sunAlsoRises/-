<template>
    <div class="header-menu">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#30393a"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">学院</el-menu-item>
            <el-menu-item index="2"><a href="" target="_blank">学员</a></el-menu-item>
            <el-menu-item index="3" disabled>员工</el-menu-item>
            <el-menu-item index="4"><a href="" target="_blank">学员</a></el-menu-item>
            <el-menu-item index="5"><a href="" target="_blank">父母</a></el-menu-item>
            <el-menu-item index="6" disabled>游客</el-menu-item>
            <el-menu-item index="6" disabled>媒体</el-menu-item>
        </el-menu>
        <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state"
                :fetch-suggestions="querySearch"
                placeholder="我们能帮您找些什么"
                >
            <i
                    class="el-icon-edit el-input__icon"
                    slot="suffix"
                    >
            </i>
            <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
            </template>
        </el-autocomplete>
    </div>
</template>

<script>
    export default {
        name: "HeaderMenu",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                restaurants: [],
                state: ''
            };
        },
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },

        }
    }
</script>

<style scoped>
.header-menu{
    position: relative;
}
.header-menu .el-menu{
    display: flex;
    justify-content:center;
}
.header-menu .el-menu li{
    height: 40px;
    line-height: 40px;
}
.header-menu .el-autocomplete{
    position: absolute;
    right: 0;
    top: 0;
}
.header-menu .el-autocomplete .el-input .el-input__inner{
    background: #000000;
}
    /*搜索*/
.my-autocomplete  li {
    line-height: normal;
    padding: 7px;
}
.my-autocomplete  .name {
    text-overflow: ellipsis;
    overflow: hidden;
}
.my-autocomplete  .addr {
    font-size: 12px;
    color: #b4b4b4;
}

.my-autocomplete  .highlighted .addr {
    color: #ddd;
}
</style>