<template>
  <div class="content">
    <div class="nav">
      <a>My First Deom</a>
    </div>
    <div class="container">
        <div class="general add-container-input">
          <input
           type="text"
           class="first-input"
           placeholder= "请添加条目！"
           v-model="addVal"
           @keyup.enter="addInputVal"
          />
        </div>

        <div class="general">
          <div class="add-container" v-show="!arrGetValue.length">
            <div class="add-container-text">
              <i class="el-icon-success"></i>
              没有信息，请添加
            </div>
          </div>
        </div>

        <ul class="add-ul">
          <li class="add-content add-container" v-for="(item) in arrGetValue" :key="item.inputVal">
            <label>{{item.inputVal}}</label>
              <a class="destroy" @click="deleteContent(item)">
                <i class="el-icon-error"></i>
              </a>
          </li>
        </ul>

        <div class="vessel">
          <div class="container-btn-remove" @click="cleanAll">清空</div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myFirstDemo',
  data () {
    return {
      arrGetValue: [],
      addVal: ''
    }
  },

  methods: {
    // 添加的方法ghjgh
    addInputVal () {
      if (this.addVal === '') {
        alert('请输入')
      } else {
        this.arrGetValue.push({
          inputVal: this.addVal
        })
        this.addVal = ''
      }
    },
    // 删除的方法
    deleteContent (data) {
      let index = this.arrGetValue.indexOf(data)
      this.arrGetValue.splice(index, 1)
    },
    // 清空的方法
    cleanAll () {
      // 清空数组
      this.arrGetValue = []
    }
  }
}
</script>

<!-- 样式开始 -->
<style scoped lang='less'>
  @container-width: 100%;
  @container-height: 100%;

  .content {
    width: @container-width;
    height:  @container-height;
  }
  .nav {
    width: @container-width;;
    height: 60px;
    line-height: 60px;
    background-color: rgb(219, 219, 219);
    div {
      a{
        margin-left: 10px;
      }
   }
  }
  .container {
    width: 40%;
    background-color: #b8ffd0;
    position: absolute;
    left: 50%;
    transform: translate(-50%)
  }
  /*公共样式*/
  .general{
    width: @container-width;
    height: 25%;
    margin: 2.5% 0;
    overflow: hidden;
  }
  .add-container-input{
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  /*输入框的样式*/
  .first-input{
    font-size: 16px;
    width: 90%;
    padding-left: 5px;
    height: 50px;
  }
  .add-container{
    width: @container-width - 10%;
    height: 50px;
    padding-left: 5px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    border:2px solid rgb(57, 212, 109)
  }
  /*提示div中的样式 */
  .add-container-text{
    color: rgb(57, 212, 109);
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .add-container-text{
    i{
    width: 25px;
    height: 25px;
    margin-right: 5px;
    }
  }
  .vessel {
    text-align: right;
      .container-btn-remove {
      display: inline-block;
      padding: 10px 20px;
      margin-right: 15px;
      margin-bottom: 8px;
      border-radius: 5px;
      /*按钮鼠标移入时的样式*/
      &:hover {
        vertical-align: center;
        cursor: pointer;
        color: white;
        background-color: #24fc6c;
      }
      &:active {
        vertical-align: center;
          cursor: pointer;
        color: white;
        background-color: #69c086;
      }
    }
  }
  .add-ul {
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .destroy {
    i{
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 10px;
    vertical-align: center;
    }
  }
   @media (max-width: 960px){
    .container {
    width: @container-width - 45%;
    }
  }
   @media (max-width: 768px){
    .container {
    width: @container-width - 10%;
    }
  }
</style>
