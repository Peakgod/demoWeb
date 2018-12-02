<template>
  <div class="box">
    <div class="container-top">
      <span>
        My Second Demo 
        <el-button type="info" @click="dialogFormVisible = true">添加数据</el-button>
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

    <el-dialog title="新增数据" :visible.sync="dialogFormVisible">
      <el-form ref="nuwForm" :model="form">
        <el-form-item label="port" :label-width="formLabelWidth">
          <el-input v-model="form.port" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="password" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="comment" :label-width="formLabelWidth">
          <el-input v-model="form.comment" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="startDate" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="endDate" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="newMethods('form')">确 定</el-button>
      </div>
    </el-dialog>

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
      path: config.httpUrl,
      dialogFormVisible: false,
      form: {
        port: '',
        password: '',
        comment: '',
        startDate: '',
        endDate: ''
      },
      formLabelWidth: '120px'
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
    newMethods (form) {
      this.dialogFormVisible = false
      axios.post(this.path, {
        port: this.form.port,
        password: this.form.password,
        startDate: this.form.startDate,
        comment: this.form.comment,
        endDate: this.form.endDate
      })
        .then(response => {
          console.log(response)
          this.getRequest()
          this.$refs['nuwForm'].resetFields()
        })
        .catch(error => {
          console.log(error)
        })
    }
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
