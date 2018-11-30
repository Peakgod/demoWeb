<template>
  <div class="box">
    <div class="container-top">
      My Second Demo 
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

  created () {
    this.getRequest()
  },

  methods: {
    getRequest () {
      axios.get(this.path)
        .then(response => {
          let SuccessArray = response.data.list
          for (let each of SuccessArray) {
            each.password = each.password.replace(/./g, '*')

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
    }
  }
}
</script>

<style lang="less">
.container-top {
    height: 60px;
    line-height: 60px;
    background-color: #dbdbdb;
}
.el-table{
    width: 55%;
    margin: 0 auto;
    .warning-row{
        background: rgba(255, 199, 139, 0.38);
    }
}
</style>