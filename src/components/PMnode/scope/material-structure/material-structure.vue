<template>
  <div class="material-need-container flex-between material-structure">
    <div class="model-wrapper">模型</div>
    <div class="form-wrapper">
      <div class="title">
        物资需求
        <span class="hiden-material el-icon-close" @click="closeMaterial"></span>
      </div>
      <div class="content">
        <el-form :model="form" label-width="100px">
          <el-form-item label-width="40px">
            <el-radio-group v-model="type">
              <el-radio label="progress">按进度计划</el-radio>
              <el-radio label="model">按模型购件</el-radio>
              <el-radio label="form">按清单</el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="flex">
            <el-form-item label-width="40px">
              <el-button icon="el-icon-refresh" type="text">同步模型</el-button>
            </el-form-item>
          </div>
          <el-form-item label-width="40px">
            <div class="teble-wrapper">
              <el-table :data="tableData" border :span-method="arraySpanMethod">
                <el-table-column label="任务名称" prop="task_name"></el-table-column>
                <el-table-column label="物资名称" prop="name"></el-table-column>
                <el-table-column label="规格型号" prop="type"></el-table-column>
                <el-table-column label="施工预算量" prop="budget"></el-table-column>
                <el-table-column label="已采购量" prop="yet_purchasing"></el-table-column>
                <el-table-column label="本次采购量">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.buy"></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-form-item>
          <el-form-item label="需求时间">
            <el-date-picker v-model="form.need_time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="采购审核">
            <Timeline v-model="audit"/>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="success" @click="onSubmit">提交</el-button>
            <el-button type="info" @click="closeMaterial">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" src="./index.styl">
</style>

<script type='textecmascript-6'>
import Timeline from "@/common/timeline/index";

export default {
  components: {
    Timeline
  },
  data() {
    return {
      /**[表单类型]
       *  @progress   按进度计划
       *  @model      按模型购件
       *  @form       按清单
       */
      typeOptions: {
        progress: "progress",
        model: "model",
        form: "form"
      },
      type: "progress",
      /**[采购审核] */
      audit: [
        {
          bottom: [{ text: "发起" }],
          icoClassName: "el-icon-success"
        },
        {
          bottom: [{ text: "审核" }]
        },
        {
          bottom: [{ text: "审批" }]
        },
        {
          bottom: [{ text: "采购" }]
        }
      ],
      /**[时间快捷选项] */
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      /**[表单] */
      form: {
        check: "",
        purchase: "采购批次",
        people: "1"
      },
      /**[表格数据]
       *  @mergeTwoRow  {合并第二列}
       */
      tableData: [
        {
          task_name: "主体结构",
          name: "物资名称",
          type: "规格型号",
          budget: "施工预算量",
          yet_purchasing: "已采购量",
          buy: 100,
          isOk: false
        },
        {
          task_name: "主体结构",
          name: "物资名称",
          type: "规格型号",
          budget: "施工预算量",
          yet_purchasing: "已采购量",
          buy: 100,
          isOk: false
        },
        {
          task_name: "主体结构",
          name: "物资名称",
          type: "规格型号",
          budget: "施工预算量",
          yet_purchasing: "已采购量",
          buy: 100,
          isOk: false
        },
        {
          mergeTwoRow: true,
          task_name: "主体结构",
          name: "物资名称",
          type: "规格型号",
          budget: "施工预算量",
          yet_purchasing: "已采购量",
          buy: 100,
          isOk: false
        },
        {
          mergeTwoRow: true,
          task_name: "主体结构",
          name: "物资名称",
          type: "规格型号",
          budget: "施工预算量",
          yet_purchasing: "已采购量",
          buy: 100,
          isOk: false
        },
        {
          mergeTwoRow: true,
          task_name: "主体结构",
          name: "物资名称",
          type: "规格型号",
          budget: "施工预算量",
          yet_purchasing: "已采购量",
          buy: 100,
          isOk: false
        }
      ]
    };
  },
  methods: {
    /**关闭 物资需求 */
    closeMaterial() {},
    /**[表格合并方法] */
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || (row.mergeTwoRow && columnIndex === 1)) {
        if (rowIndex % 3 === 0) {
          return [3, 1];
        } else if (
          rowIndex % 3 === 1 ||
          rowIndex % 3 === 2 ||
          rowIndex % 3 === 3
        ) {
          return [0, 0];
        } else {
          return [1, 1];
        }
      }
    }
  }
};
</script>