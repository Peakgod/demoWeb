<template>
      <div class="style">
        <div class="container-top">
          <div class="top-left"></div>
          <div class="top-right"></div>
        </div>
        <div class="container-bottom"></div>
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

.style{
  width: @var-width;
  height: @var-height;
  background-color: #666;
  .container-top{
    width: @var-width - 20%;
  }
}
</style>

