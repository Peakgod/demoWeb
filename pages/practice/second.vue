<template>
  <div class="box">
    <div class="container-top">
      <span>
        My Second Demo 
        <el-button type="info" @click="addInformation">添加数据</el-button>
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
         width="140">
          <template slot-scope="scope" class="ele-btn">
            <el-button type="info" @click="editorInformation(scope.$index, scope.row) ">编辑</el-button>
            <el-button type="danger" @click="deleteData (scope.$index, scope.row) ">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :title="form && form._id ? '编辑数据' : '新增数据' " :visible.sync="dialogFormVisible">
      <el-form ref="andForm" :model="form">
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
            <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="endDate" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate"></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="form && form._id ? editorData ('form') : addMethods('form') ">确 定</el-button>
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
    // 查询的方法
    getRequest () {
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
    tableRowClassName (data) {
      let item = data.row.endDate
      if (item) {
        if (new Date(item).getTime() <= new Date().getTime()) {
          return 'warning-row'
        }
      }
    },
    // 添加数据按钮
    addInformation () {
      this.form = {}
      this.dialogFormVisible = true
    },
    // 添加数据网络请求
    addMethods (form) {
      axios.post(this.path, this.form)
        .then(response => {
          this.dialogFormVisible = false
          this.getRequest()
          this.$message({
            message: '恭喜您，添加成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
          this.$message({
            message: '不好意思，添加失败！',
            type: 'info'
          })
        })
    },

    // 编辑
    editorInformation (index, row) {
      this.form = Object.assign({}, row)
      this.dialogFormVisible = true
    },

    editorData (form) {
      axios.put(`${this.path}/${this.form._id}`, this.form)
        .then(response => {
          this.dialogFormVisible = false
          this.$message({
            message: '恭喜您，修改成功！',
            type: 'success'
          })
          this.getRequest()
        })
        .catch(error => {
          console.log(error)
          this.$message({
            message: '不好意思，修改失败！',
            type: 'info'
          })
        })
    },

    // 删除的方法
    deleteData (index, row) {
      let item = Object.assign({}, row)
      this.$confirm('此操作将永久删除该数据, 是否继续?', '警告', {
        type: 'warning'
      }).then(() => {
        axios.delete(`${this.path}/${item._id}`)
          .then(res => {
            this.$message({
              showClose: true,
              message: '恭喜你，删除成功！',
              type: 'success'
            })
            this.getRequest()
          }).catch(e => {
            console.log(e)
            this.$message({
              message: '抱歉，删除失败！',
              type: 'success'
            })
          })
      }).catch(e => {
        console.log(e)
        this.$message({
          message: '取消删除！',
          type: 'success'
        })
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
.el-button {
    padding: 4px 5px;
    margin: 0;
}
@media (max-width: 1100px) {
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
