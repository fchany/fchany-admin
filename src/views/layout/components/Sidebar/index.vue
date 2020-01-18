<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
    <div v-if="start">
        <sidebar-item v-for="route in router" :key="route.path" :item="route" :base-path="route.path"/>
        <!-- <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/> -->
    </div>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'
import { getUserType } from "@/utils/auth";

export default {
    data() {
        return {
            start: false,
            router: []
        }
    },
    components: { 
        SidebarItem
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        routes() {
            return this.$router.options.routes;
        },
        variables() {
            return variables;
        },
        isCollapse() {
            return !this.sidebar.opened;
        }
    },
    mounted() {
        var flag = getUserType();
        var router = this.$router.options.routes;
        roles(router);
        function roles(item) {
            for (var i = 0; i < item.length; i++) {
                if (item[i].children) {
                    roles(item[i].children);
                }
                if (item[i].meta && item[i].meta.roles) {
                    var pass = true;
                    for (var j = 0; j < item[i].meta.roles.length; j++) {
                        if (item[i].meta.roles[j] == flag) {
                            pass = false;
                            break;
                        }
                    }
                    if (pass) {
                        item[i].hidden = pass;
                    }
                }
            }
        }
        this.router = router;
        this.start = true;
    }
}
</script>
<style scoped>
>>>.el-menu-item{
    height:55px;
    line-height:55px;
}
>>>.el-submenu__title{
    height:55px;
    line-height:55px;
}
>>>.el-submenu .el-menu-item{
    height:45px;
    line-height:45px;
}
</style>
