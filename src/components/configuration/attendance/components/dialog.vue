<template>
    <div class="dialog">
        <el-dialog
                top='10vh'
                title="提示"
                :visible.sync="dialogVisible"
                width="52%"
                :show-close='false'
                :before-close="handleClose">
            <div slot="title" class="dialog-title">
                <span>{{!dialogType?"新增班次":(dialogType === 1?"编辑执行人":"修改班次时间")}}</span>
                <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="close"><i class="el-dialog__close el-icon el-icon-close"></i></button>
            </div>
            <div class='dialog-body'>
                <div class='set-box' :class='{noborder: dialogType === 2}' v-show='dialogType === 0 || dialogType === 2'>
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-form-item prop="Name" label="班次名称" v-show='dialogType !== 2'
                                      :rules="[{ required: true, message: '请输入班次名称', trigger: 'blur' }]">
                            <el-input placeholder='请输入班次名称' v-model="form.Name"></el-input>
                        </el-form-item>
                        <el-form-item prop="WorkStartTime" label="上班时间" :rules="[{ required: true, message: '请选择上班时间', trigger: 'blur' }]">
                            <el-time-select
                                    v-model="form.WorkStartTime"
                                    :picker-options="{start: '08:00',step: '00:30',end: '21:30'}"
                                    placeholder="选择上班时间">
                            </el-time-select>
                        </el-form-item>
                        <el-form-item prop="WorkEndTime" label="下班时间" :rules="[{ required: true, message: '请选择下班时间', trigger: 'blur' }]">
                            <el-time-select
                                    v-model="form.WorkEndTime"
                                    :picker-options="{start: '08:00',step: '00:30',end: '21:30'}"
                                    placeholder="选择下班时间">
                            </el-time-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class='check-box' v-show='dialogType !== 2'>
                    <el-form label-width="120px">
                        <el-form-item :label="dialogType ? '管理人员:': '选择执行人:'">
                            <el-checkbox-group v-model="PersonIDs">
                                <el-row>
                                    <el-col :span="6" v-for='(item, i) in userList' :key='i'>
                                        <el-checkbox :label="item.id" name="type">{{item.text}}</el-checkbox>
                                    </el-col>
                                </el-row>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { GetAllUserList, AddClockSet, EditClockSet, EditClockSetPerson } from '@/api/api'
  export default {
    name: 'attenDanceDialog',
    props: {
      dialogVisible:{
        default: false,
        type: Boolean
      },
      dialogType: {
        default: 0,
        type: Number
      }
    },
    data() {
      return {
        userList: [],
        form: {
          ID: '',
          Name: '',
          WorkStartTime: '',
          WorkEndTime: '',
          ProjectID: localStorage.getItem('projectid')
        },
        PersonIDs: []
      }
    },
    created() {
      this.init()
    },
    mounted() {
    },
    methods: {
      async init () {
        let res = await GetAllUserList({ projectId: localStorage.getItem("projectid") })
        this.userList = res.Detiel
      },
      handleClose () {

      },
      save () {
        this.$refs['form'].validate(async valid => {
          if (valid) {
            let res = ''
            if (this.dialogType === 0) {
              res = await AddClockSet({model: this.form, listperson: this.PersonIDs.map(v => { return {PersonID: v} })})
            } else if (this.dialogType === 1) {
              res = await EditClockSetPerson({model: this.form, listperson: this.PersonIDs.map(v => { return {PersonID: v} })})
            } else {
              res = await EditClockSet(Object.assign({ID: this.ID},this.form))
            }
            if (res.StatusCode === 200) {
              this.$emit('addSuccess')
            }
          }
        })
      },
      close () {
        this.$emit('closeDialog')
      },
      transmit (i, data) {
        this.form.ID = data.ID
        this.form.Name = data.Name
        this.form.WorkStartTime = data.WorkStartTime
        this.form.WorkEndTime = data.WorkEndTime
        this.PersonIDs = data.listWorkSetPerson.map(v => v.PersonID + '')
      }
    }
  }
</script>

<style lang='stylus' scoped>
.dialog /deep/
    .el-dialog__header
        position relative
        padding 8px 0
        background:linear-gradient(225deg,rgba(105,86,255,1) 0%,rgba(84,138,255,1) 100%)
        .dialog-title
            color white
            text-align center
            font-size 18px
        .el-dialog__headerbtn
            top 50%
            transform translateY(-50%)
            .el-dialog__close
                color white
    .el-dialog__body
        padding 28px 70px 0
        .set-box
            margin 0 55px
            padding 0 96px 18px
            border-bottom 1px solid #E5E5E5
            .el-date-editor--time-select
                width 100%
        .set-box.noborder
            border 0
        .check-box
            margin-top 10px
            min-height 260px
            .el-form-item__label
                color #0C0C0C
                font-weight 600
            .el-checkbox-group
                margin-left 30px
                .el-checkbox__input.is-checked .el-checkbox__inner
                    background #FDA143
                    border-color #FDA143
                .el-checkbox__input.is-checked+.el-checkbox__label
                    color #333
    .el-dialog__footer
        padding 0 0 70px
        .dialog-footer
            text-align center
            .el-button+.el-button
                margin-left: 30px
                background:rgba(71,117,202,1);
                box-shadow:0px 2px 4px 0px rgba(161,192,250,1);
            .el-button
                border 0
                color white
                padding 12px 40px
                background:rgba(153,153,153,1);
                box-shadow:0px 2px 4px 0px rgba(81,81,81,0.5);
                border-radius:4px;
</style>

