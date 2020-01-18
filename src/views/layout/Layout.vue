<template>
  <div :class="classObj" class="app-wrapper">
    <div class="header-wrap">
        <div class="clear-fix box-sizing pl30 pr15">
            <div class="pull-left">后台管理系统 V2.0</div>
            <div class="pull-right clear-fix">
                <div class="pull-left pl15 pr15 header-item">菜单一</div>
                <div class="pull-left pl15 pr15 header-item">菜单二</div>
                <div class="pull-left pl15 pr15 header-item">菜单三</div>
                <div class="pull-left pl15 pr15 header-item">菜单四</div>
                <div class="pull-left pl15 pr15 header-item">菜单五</div>
            </div> 
        </div>
    </div>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .header-wrap{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:45px;
      /*background:linear-gradient(rgb(77, 156, 255), rgb(60, 138, 183));*/
      background: #0175EC;
      z-index:999;
      line-height:45px;
      color:#fcfcfc;
      .header-item{
          font-size:14px;
          transition:all 0.2s;
          cursor:pointer;
          height:45px;
          line-height:45px;
      }
      .header-item:hover{
          background:#2480d6;
      }
      span{color:#fff}
  }
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
