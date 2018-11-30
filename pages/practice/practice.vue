<template>
    <div class="all">
        <div class="sidebar">
            <el-col :span="12">
    <el-menu
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item-group>
          <el-menu-item index="1-1">DEMO1</el-menu-item>
        </el-menu-item-group>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>12</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">DEMO2</el-menu-item>
          <el-menu-item index="1-2">DEMO3</el-menu-item>
          <el-menu-item index="1-3">DEMO4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>1</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-4">DEMO5</el-menu-item>
          <el-menu-item index="1-5">DEMO6</el-menu-item>
          <el-menu-item index="1-6">DEMO7</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>2</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-7">DEMO1</el-menu-item>
          <el-menu-item index="1-8">DEMO2</el-menu-item>
          <el-menu-item index="1-9">DEMO3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
        </div>
        <div class="content"></div>
    </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped lang="less">
  @var-width: 100%;
  @var-height: 100%;

.all {
  width: @var-width;
  height: 200px;
  background-color: #666;
}
.el-col-12{
    width: 12%;
}
</style>

