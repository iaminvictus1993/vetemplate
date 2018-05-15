<template>
    <div style="height:100%">
        <div :class="['container', !isCollapse?'donghua':'']" :style="{width:!isCollapse?'230px':'70px'}">
            <el-menu @mouseenter.native="hanlerCollapse" :unique-opened="true" :router="false" :default-active="$route.path" :background-color="asideBgColor" text-color="#fff" :collapse="isCollapse">
                <template v-for="(item, index) in menues">
                    <!-- 渲染首页 -->
                    <router-link v-if="item.meta.noSub" :to="item.menuItemPath" :key="item.menuItemPath">
                        <el-menu-item :index="item.menuItemPath">
                            <i :class="item.menuItemIcon"></i>
                            <span slot="title">{{item.menuItemName}}</span>
                        </el-menu-item>
                    </router-link>
                    <el-submenu v-else-if="!item.meta.noSub" :index="item.menuItemPath" :key="index">
                        <template slot="title">
                            <i :class="item.menuItemIcon"></i>
                            <span slot="title">{{item.menuItemName}}</span>
                        </template>
                        <!-- 若routes.js中设置meta.groups则分组 -->
                        <!-- <div v-if="item.meta.groups.length">
                            <el-menu-item-group v-for="(groupItem, groupIndex) in item.meta.groups" :key="groupIndex">
                                <template slot="title">{{groupItem}}</template>
                                <template v-for="(subitem, subindex) in item.children">
                                    <router-link v-if="subitem.meta.group===groupItem" :to="item.menuItemPath+'/'+subitem.path" :key="subindex">
                                        <el-menu-item :index="item.menuItemPath+'/'+subitem.path">
                                            <i :class="subitem.meta.icon"></i>
                                            <span slot="title">{{subitem.meta.mark}}</span>
                                        </el-menu-item>
                                    </router-link>
                                </template>
                            </el-menu-item-group>
                        </div> -->
                        <!-- <div v-if="!item.meta.groups || !item.meta.groups.length"> -->
                        <template v-for="(subitem, subindex) in item.children">
                            <router-link :to="item.menuItemPath+'/'+subitem.path" :key="subindex">
                                <el-menu-item :index="item.menuItemPath+'/'+subitem.path">
                                    <i :class="subitem.meta.icon"></i>
                                    <span slot="title">{{subitem.meta.mark}}</span>
                                </el-menu-item>
                            </router-link>

                        </template>
                        <!-- </div> -->
                    </el-submenu>
                </template>
            </el-menu>

        </div>
    </div>
</template>

<script>
import routes from '@/router/routes.js'
export default {
    data() {
        return {
            asideBgColor: '#222d32'
        }
    },
    props: {
        isCollapse: {
            type: Boolean,
            required: true
        }
    },
    created() {
        this.theme = localStorage.getItem('theme')
        if (this.theme === 'style0') {
            this.asideBgColor = 'black'
        } else {
            this.asideBgColor = '#222d32'
        }
        const self = this
        this.bus.$on('set-theme', function(id) {
            if (id === 'style0') {
                self.asideBgColor = 'black'
            } else {
                self.asideBgColor = '#222d32'
            }
        })
    },
    components: {},
    computed: {

        // 构值填充el-menu
        menues() {
            let arr = []
            routes.forEach(item => {
                let tempObj = {}
                tempObj.menuItemName = item.meta.mark
                tempObj.menuItemIcon = item.meta.icon
                tempObj.menuItemPath = item.path
                tempObj.meta = item.meta
                if (item.children && item.children.length) {
                    tempObj.children = item.children
                }
                arr.push(tempObj)
            })
            return arr
        }
    },
    methods: {
        handleOpen() {},
        handleClose() {},
        hanlerCollapse() {
            this.bus.$emit('set-isCollapse', false)
        }
    }
}
</script>
<style lang='less' scoped>
.container {
    position: fixed;
    bottom: 0;
    top: 56px;
    overflow: hidden;
}

.el-menu {
    // min-height: 94vh;
    border: none;
    height: 100%;
    width: 248px;
    overflow-y: scroll;
    overflow-x: hidden;
    .el-menu-item {
        i {
            color: white;
        }
        background-color: #2c3b41 !important;
        &:hover {
            span {
                color: #409eff;
            }
        }
    }
}
.donghua {
    transition: width 1s;
}
</style>