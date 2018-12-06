<template>
  <div class="style">
    <img src="~assets/images/yaso.jpg">
    <!-- 侧边栏 -->
    <div class="container-left">
      <div class="container-left-top">
        <div class="left-photo">
           <img src="~assets/images/touxiang.jpg">
        </div>
        <div class="left-text">
          <ul>
            <li>NAME：<span>冷</span></li>
            <li>Birthday：<span>1997.09</span></li>
            <li>Trick：<span>WEB</span></li>
          </ul>
        </div>
      </div>
      <div class="container-left-bgc">
        <div class="container-left-btn">
          <el-button type="warning"> Movement </el-button>
          <el-button type="warning"> Basketball </el-button>
          <el-button type="warning"> GAME </el-button>
        </div>
      </div>
    </div>

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
  img {
    width: 100%;
    border-radius: 10px;
  }
  .container-left{
    width: 20%;
    border-radius: 30px;
    background-color: rgba(202, 202, 202, 0.35);
    position: fixed;
    top: 10%;
    left: 4%;
    bottom: 10%;
    .container-left-top {
      height: @var-height - 65%;
      display: inline-flex;
      .left-photo {
        width:  @var-width - 50%;
        padding: 30px;
      }
      .left-text {
        width:  @var-width - 50%;
        padding-top: 50px;
        ul {
          list-style: none;
          padding: 0;
          li {
            padding: 5px;
            span{
              color: rgb(16, 134, 138);
            }
          }
        }
      }
    }
    .container-left-bgc {
      height: 65%;
      border-radius: 30px;
      background-color: rgba(209, 209, 209, 0.5);
      text-align: center;
      .container-left-btn {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-top: 20px;
      }
      .el-button+.el-button{
        margin: 5px;
      }
      .el-button--warning{
        margin: 5px;
        width: 50%;
      }
    }
  }
}
</style>

