<template>
  <div class="style">
    <div class= "container-top">
      <div class="text-bgc">
        <span> LOVE </span>
      </div>
      <div class="img-border">
        <img src='~assets/images/hai.jpg'/>
      </div>
    </div>

    <div class="container-middle">
      <div>
        <span> Began in of appearance </span>
      </div>
      <img src="~assets/images/basketball.jpg"/>
    </div>

    <div class="container-btoome">
      <div>
        <span> Began in of appearance </span>
      </div>
      <img src="~assets/images/basketball.jpg"/>
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
    height: @var-height;
    background-color: rgb(206, 216, 210);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .container-top {
    width: 60%;
    text-align: center;
    img {
    width: @var-width - 10%;
    margin-top: 20px;
    margin-bottom: 40px;
    padding: 40px;
    background-image: -webkit-linear-gradient(top, red, blue); 
    }
    .text-bgc{
      margin-top: 20px;
      margin-left: 15px;
      text-align: left;
      vertical-align: center;
      span {
        font-size: 25px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        background-color: rgb(218, 25, 25);
        margin-top: 20px;
        }
    }
  }

  .container-middle{
    width: @var-width;
    height: 100%;
    text-align: center;
    span{
       font-size: 25px;
       font-weight: 600;
        color: rgb(255, 255, 255);
        background-color: rgb(218, 25, 25);
        margin-top: 20px;
    }
    img{
      width: @var-width - 20%;
    margin-top: 20px;
    margin-bottom: 40px;
    }
  }
  @media(max-width: 762px) {
    .container-top {
      width: 90%;
    }
  }
</style>

