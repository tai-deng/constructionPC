const configs = {
  // 天
  1: function () {
    gantt.config.scale_unit = "day";
    gantt.config.step = 1;
    gantt.config.date_scale = "%d %M";
    gantt.config.min_column_width = 30;
    gantt.config.subscales = [{ unit: "hour", step: 1, date: "%h" }];
    gantt.config.round_dnd_dates = true;

    gantt.config.scale_height = 60;
    gantt.templates.date_scale = null;
  },
  // 周
  2: function () {
    gantt.config.scale_unit = "week";
    gantt.config.date_scale = "%W";
    gantt.config.step = 1;
    gantt.templates.date_scale = null;
    gantt.config.min_column_width = 60;
    gantt.config.subscales = [
      { unit: "month", step: 1, date: "%M" },
      { unit: "day", step: 1, date: "%D" }
    ];
    gantt.config.round_dnd_dates = true;
    gantt.config.scale_height = 60;
    gantt.templates.date_scale = null;
  },
  // 年月日/周
  4: function () {
    gantt.config.scale_unit = "year";
    gantt.config.date_scale = "%Y";
    gantt.config.min_column_width = 60;
    gantt.config.subscales = [
      { unit: "month", step: 1, date: "%M" },
      { unit: "week", step: 1, date: "%W" }
    ];
    gantt.config.round_dnd_dates = false;
    gantt.config.scale_height = 60;
    gantt.templates.date_scale = null;
  },
  // 月
  3: function () {
    gantt.config.scale_unit = "year";
    gantt.config.step = 1;
    gantt.config.date_scale = "%Y";
    gantt.config.min_column_width = 50;
    gantt.config.round_dnd_dates = false;
    gantt.config.scale_height = 60;
    gantt.templates.date_scale = null;

    gantt.config.subscales = [{ unit: "month", step: 1, date: "%M" }];
  },
  // 年 季度
  5: function () {
    gantt.config.scale_unit = "year";
    gantt.config.step = 1;
    gantt.config.date_scale = "%Y";
    gantt.config.min_column_width = 50;
    gantt.config.round_dnd_dates = false;
    gantt.config.scale_height = 60;
    gantt.templates.date_scale = null;

    function quarterLabel(date) {
      var month = date.getMonth();
      var q_num;

      if (month >= 9) {
        q_num = 4;
      } else if (month >= 6) {
        q_num = 3;
      } else if (month >= 3) {
        q_num = 2;
      } else {
        q_num = 1;
      }

      return "Q" + q_num;
    }

    gantt.config.subscales = [
      { unit: "quarter", step: 1, template: quarterLabel },
      { unit: "month", step: 1, date: "%M" }
    ];
  },
  // 年
  6: function () {
    gantt.config.scale_unit = "year";
    gantt.config.round_dnd_dates = false;
    gantt.config.step = 1;
    gantt.config.date_scale = "%Y";
    gantt.config.min_column_width = 50;

    gantt.config.scale_height = 60;
    gantt.templates.date_scale = null;

    gantt.config.subscales = [];
  },
  7: function () {
    // 模板可用于更改日期和标签的显示
    gantt.templates.task_text = function (start, end, task) {
      return task.text;
    };

    gantt.config.order_branch = true; //实现拖插

    gantt.config.order_branch_free = true;

    // 左侧只允许放到父节点下面
    // gantt.config.order_branch = true;

    gantt.config.order_branch = "marker";

    // 只能渲染
    gantt.config.smart_rendering = true;

    gantt.templates.scale_row_class = function (scale) {
      return "day_scale";
    };

    // 开启滚动
    gantt.config.autoscroll = true;

    // 速度
    gantt.config.autoscroll_speed = 50;

    gantt.config.task_height = 16;

    gantt.config.row_height = 40;

    // 启动排序
    gantt.config.sort = true;

    // 指定在树列中子项的标签之前插入的自定义内容（或任何其他HTML内容）
    // gantt.templates.grid_blank = function (task) {
    //   // return gantt.getWBSCode(gantt.getTask(task.id)) + "<input id='ch1' type='checkbox' onClick='someFunc(" + task.id + ")'></input>"
    //   return '<label class="my_protocol">' +
    //     '<input class="input_agreement_protocol" type="checkbox" />' +
    //     '<span></span>' +
    //     '</label>'
    // };

    //要在分支中设置子任务的缩进
    // gantt.templates.grid_indent = function (task) {
    //   return "<div style='width:20px; float:left; height:100%'></div>"
    // };

    // 变色
    gantt.templates.grid_row_class = function (start, end, task) {
      if (task.$level > 0) {
        return "bgcolor"
      }
    };

    // 列的时间格式
    gantt.config.date_grid = "%Y.%m.%d";

    //自动调整图表坐标轴区间用于适配task的长度
    gantt.config.fit_tasks = true;

    // 防止滚动冒泡
    gantt.config.prevent_default_scroll = false;

    // err提示
    gantt.config.show_errors = true;

    // 多选
    gantt.config.multiselect = false;


    // gantt.form_blocks['checkbox'] = {
    //   render: function (config) {
    //     return "";
    //   },
    //   set_value: function (node, value, ev, config) {
    //     node.checked = !!value;
    //   },
    //   get_value: function (node, ev, config) {
    //     return !!node.checked;
    //   },
    //   focus: function (node) {
    //   }
    // };



    // 页面布局设置
    gantt.config.layout = {
      css: "gantt_container",
      cols: [
        {
          width: 640,
          rows: [
            {
              view: "grid",
              scrollX: "gridScroll",
              scrollable: true,
              scrollY: "scrollVer"
            },
            { view: "scrollbar", id: "gridScroll", group: "horizontal" }
          ]
        },
        { resizer: true, width: 1 },
        {
          rows: [
            { view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer" },
            { view: "scrollbar", id: "scrollHor", group: "horizontal" }
          ]
        },
        { view: "scrollbar", id: "scrollVer" }
      ]
    };

    // 左边标题设置
    gantt.config.columns = [
      // {
      //   name: "text", label: "Checked", template: function (task) {
      //     // var checked = !!task.checked ? " checked" : "";
      //     console.log(task)
      //     // return "<input class='gantt-checkbox-column' type='checkbox' " + checked + "/>";
      //     return '<label class="my_protocol">' +
      //       '<input class="input_agreement_protocol" type="checkbox" />' +
      //       '<span></span>' +
      //       '</label>'

      //   }
      // },
      {
        name: "wbs",
        align: "left",
        label: "序号",
        width: 80,
        // template: gantt.getWBSCode,
        template: function (task) {
          // return gantt.getWBSCode(gantt.getTask(task.id));
          // return "<input id='ch1' type='checkbox' onClick='someFunc(" + task.id + ")'></input>" + gantt.getWBSCode(gantt.getTask(task.id));
          // return "<input type='checkbox' id='scale1' class='gantt_radio' name='scale' value='1'/><label for='scale1'><i class='material-icons'>"+gantt.getWBSCode(gantt.getTask(task.id))+"</i></label>"
          return '<label class="my_protocol">' +
            '<input class="input_agreement_protocol" type="checkbox" />' +
            '<span></span>' +
            '</label>' + gantt.getWBSCode(gantt.getTask(task.id));
        },
        resize: true
      },
      {
        name: "text",
        align: "left",
        label: "任务列表",
        tree: true,
        width: 180,
        resize: true
      },
      {
        name: "start_date",
        label: "计划开始时间",
        align: "center",
        width: 100,
        resize: true
      },
      {
        name: "end_date",
        label: "计划结束时间",
        align: "center",
        width: 100,
        template: function (task) {
          return gantt.templates.date_grid(task.end_date, task);
        },
        resize: true
      },
      {
        name: "duration",
        align: "center",
        label: "工期",
        width: 80,
        resize: true
      },
      //'<div class="gantt_grid_head_cell gantt_grid_head_add" onclick="gantt.createTask()"></div>'
      {
        name: "buttons",
        label: "操作",
        width: 100,
        template: function (task) {
          let direction = false;
          return (
            '<i class="bnt-warp"><img src="' + require('../../../../assets/imgs/gantt-add.png') + '" class="fa gantt_button_grid gantt_grid_edit fa-pencil" onclick="clickGridButton(' + task.id + ", 'edit')\"></img></i>" +
            '<i class="bnt-warp"><img src="' + require('../../../../assets/imgs/gantt-move-up.png') + '" class="fa gantt_button_grid gantt_grid_add fa-plus" onclick="clickGridButton(' + task.id + ", 'up'," + direction + ")\"></img></i>" +
            '<i class="bnt-warp"><img src="' + require('../../../../assets/imgs/gantt-move-down.png') + '" class="fa gantt_button_grid gantt_grid_delete fa-times" onclick="clickGridButton(' + task.id + ", 'down'," + direction + ")\"></img></i>"
          );
        }
      }
    ];

    // 灯箱时间处理
    gantt.templates.lightbox_header = function (start_date, end_date, task) {
      return (
        gantt.templates.task_time(task.start_date, task.end_date, task) +
        "&nbsp;" +
        (
          gantt.templates.task_text(task.start_date, task.end_date, task) || ""
        ).substr(0, 70)
      );
    };
  }
};
const init = v => {
  for (const key in configs) {
    if (key == v) {
      return configs[key]();
    }
  }
};
export default {
  init,
  layout: configs["7"]
};
