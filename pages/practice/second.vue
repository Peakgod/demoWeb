<template>
  <div class="box">
    <div class="container-top">
      <span>
        My Second Demo 
        <el-button type="info" @click="newMethods">添加数据</el-button>
      </span>
    </div>

    <div class="container-middle">
      <el-table
      :data="data"
      :row-class-name="tableRowClassName"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <!-- an row -->
            <span class="com-span">{{ props.row.comment }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="port"
          prop="port"
          sortable>
        </el-table-column>
        <el-table-column
          label="password"
          prop="password">
        </el-table-column>
        <el-table-column
          label="startDate"
          prop="startDate">
        </el-table-column>
        <el-table-column
          label="endDate"
          prop="endDate">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
         width="160">
          <template slot-scope="scope">
            <el-button type="text" class="ele-btn-view">查看</el-button>
            <el-button type="text" class="ele-btn-modify">修改</el-button>
            <el-button type="text" class="ele-btn-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import config from '~/assets/routing/config.js'

export default {
  data () {
    return {
      data: [],
      path: config.httpUrl
    }
  },

  mounted () {
    this.getRequest()
  },

  methods: {
    getRequest () {
      // console.log(this.path)
      axios.get(this.path)
        .then(response => {
          let SuccessArray = response.data.list
          for (let each of SuccessArray) {
            if (each.password) {
              each.password = each.password.replace(/./g, '*')
            }

            if (each.startDate || each.endDate) {
              each.startDate = moment(each.startDate).format('YYYY-MM-DD')
              each.endDate = moment(each.endDate).format('YYYY-MM-DD')
            }
          }
          this.data = SuccessArray
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 判断样式的方法
    tableRowClassName (row) {
      let item = row.row.endDate
      if (item) {
        if (new Date(item).getTime() <= new Date().getTime()) {
          return 'warning-row'
        }
      }
    },
    newMethods () {
      const h = this.$createElement
      this.$msgbox({
        title: '添加信息',
        message: h('div', null, [
          h('input', { style: 'width: 200px; height: 35px; margin-bottom: 15px' }),
          h('i', { style: 'color: red' }, '请输入端口号'),
          h('input', { style: 'width: 200px; height: 35px; margin-bottom: 15px' }, null),
          h('i', { style: 'color: red' }, '请输入密码'),
          h('input', { style: 'width: 200px; height: 35px; margin-bottom: 15px' }, null),
          h('i', { style: 'color: red' }, '请输入开始时间'),
          h('input', { style: 'width: 200px; height: 35px; margin-bottom: 15px' }, null),
          h('i', { style: 'color: red' }, '请输入结束时间')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      })
        .then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          })
        })
    }
    // axios.post(this.path)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}
</script>

<style lang="less">
.container-top {
    height: 60px;
    line-height: 60px;
    background-color: #dbdbdb;
    span{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
        button{
          margin: auto 300px auto 0;
          padding: 15px;
        }
    }
}
.el-table {
    width: 60%;
    margin: 0 auto;
    .warning-row{
        background: rgba(255, 199, 139, 0.38);
    }
    .ele-btn-view{
      color: rgb(64, 115, 124);
    }
    .ele-btn-modify{
      color: rgb(58, 67, 156);
    }
    .ele-btn-delete{
      color: rgb(207, 45, 67);
    }
}
@media (max-width: 1000px) {
  .el-table {
    width: 80%
  }
  .container-top {
    span{
      button{
        margin: auto 80px auto 0;
        padding: 15px;
      }
    }
  }
}
</style>