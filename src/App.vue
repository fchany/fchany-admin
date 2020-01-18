<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.view-container{
    padding:10px;
}
.el-tabs__item{
    padding:0 15px;
    height:30px;
    line-height:30px;
}
.el-menu-item, .el-submenu__title{
    height:35px;
    line-height:35px;
}
</style>

