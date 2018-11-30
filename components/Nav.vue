<template>
  <el-menu
  :default-active="$route.path"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" router
  >

    <template v-for=" (item,index) in config">
      <el-menu-item v-if="!item.children" :key="index" :index="item.to">{{item.title}}
      </el-menu-item>
      <el-submenu v-else :key="index" :index="item.title">
        <template slot="title">{{item.title}}
        </template>
        <el-menu-item
        v-for="(child,subscript) in item.children" :key="subscript"
        :index="child.to"
        >
          {{child.title}}
        </el-menu-item>
      </el-submenu>
    </template>

  </el-menu>
</template>

<script>
import config from '~/assets/routing/config.js'

export default {
  data () {
    return {
      config: config.dataArr
    }
  }
}
</script>

<style scoped>
  .logo{
    width: 80px;
    background-color: rgb(116, 116, 116);
  }
  @media(max-width: 762px){

  }
</style>

