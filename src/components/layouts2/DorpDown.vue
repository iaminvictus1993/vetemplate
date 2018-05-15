<template>
    <div class="dropContainer">

        <el-dropdown @command="handleCommand" v-for="(item, index) in routes" :key="index" class="wrapper">
            <span class="el-dropdown-link">
                <i :class="item.meta.icon"></i>
                {{item.meta.mark}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(subItem, subIndex) in item.children" :key="subIndex" divided :command="item.path+'/'+subItem.path">
                    <i :class="[subItem.meta.icon, 'el-icon--left']"></i>{{subItem.meta.mark}}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import routes from '@/router/routes.js'
export default {
    data() {
        return {
            routes: []
        }
    },
    created() {
        console.log(routes)

        // 删掉dashboard
        this.routes = routes.slice(1)
    },
    methods: {
        handleCommand(command) {
            this.$router.push(command)
        }
    }
}
</script>
<style lang='less' scoped>
.dropContainer {
    position: absolute;
    color: white;
    top: 20px;
    left: 300px;
    .wrapper {
        display: inline;
        color: white;
        margin-right: 30px;
    }
}
</style>