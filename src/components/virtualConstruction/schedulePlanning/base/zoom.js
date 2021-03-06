const configs = {
  // 天
  1: function () {
    gantt.config.scale_unit = "month";
    gantt.config.step = 1;
    gantt.config.date_scale = "%Y-%M";
    gantt.config.min_column_width = 50;
    gantt.config.scale_height = 60;
    gantt.config.subscales = [{ unit: "day", step: 1, date: "%d" }];
  },
  // 周
  2: function () {
    gantt.config.scale_unit = "month";
    gantt.config.date_scale = "%Y-%M";
    gantt.config.step = 1;
    gantt.config.min_column_width = 50;
    gantt.config.scale_height = 60;
    gantt.config.subscales = [
      { unit: "week", step: 1, date: "%d" }
    ];
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
    gantt.config.date_scale = "%Y";
    gantt.config.step = 1;
    gantt.config.scale_height = 60;
    gantt.config.min_column_width = 50;
    gantt.config.subscales = [{ unit: "month", step: 1, date: "%M" }];
    // 允许将任务的开始和结束日期舍入到最近的刻度标记
    // gantt.config.round_dnd_dates = false;
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
    // 防止滚动冒泡
    gantt.config.prevent_default_scroll = false;

    // err提示
    gantt.config.show_errors = false;

    // 多选
    gantt.config.multiselect = true;

    // 允许级联删除嵌套任务和链接
    gantt.config.cascade_delete = false;

    // 启用/禁用在甘特图中显示链接
    gantt.config.show_links = true;

    // 左侧只允许放到父节点下面 实现拖插  // true
    // gantt.config.order_branch = "marker";

    // 激活“分支”模式，允许在整个甘特图中重新排序任务
    gantt.config.order_branch_free = true;

    gantt.config.drag_move = false;

    // 撤销
    gantt.config.undo = true;

    // 智能渲染
    gantt.config.smart_rendering = true;

    // 开启滚动 // 定义从当前浏览器屏幕拖出任务或链接时自动滚动的速度（以毫秒为单位）
    gantt.config.autoscroll = true;

    // 速度
    gantt.config.autoscroll_speed = 50;

    // 设置时间轴区域中任务栏的高度
    gantt.config.task_height = 16;

    // 设置表格行的默认高度
    gantt.config.row_height = 40;

    // 启动排序
    gantt.config.sort = false;

    // 在表的“开始时间”列中设置日期的格式
    gantt.config.date_grid = "%Y.%m.%d";

    // 自动调整图表坐标轴区间用于适配task的长度
    gantt.config.fit_tasks = true;

    // 双击任务后打开灯箱
    gantt.config.details_on_dblclick = true;

    // 通过点击'+'按钮创建新事件时打开灯箱
    gantt.config.details_on_create = true;

    // 通过拖动进度旋钮，可以更改任务进度
    gantt.config.drag_progress = false;

    // 通过拖放创建依赖关系链接
    gantt.config.drag_links = true;

    // 通过拖放可以调整任务大小
    gantt.config.drag_resize = false;


    // 在将数据发送到服务器时，可以将服务器端日期从UTC转换为本地时区（和向后）
    gantt.config.server_utc = true;

    // duration单位--> hour day month
    // gantt.config.duration_unit = "D";

    // 自动延长时间尺度以适应所有显示的任务
    gantt.config.fit_tasks = true;

    // 定义任务表单是从屏幕的左/右侧出现还是出现在所选任务附近
    // gantt.config.quick_info_detached = false;


    // 模板可用于更改日期和标签的显示
    gantt.templates.task_text = function (start, end, task) {
      return '';
    };

    // gantt.templates.grid_date_format = function (date) {
    //   console.log(date)
    //   return gantt.date.date_to_str(gantt.config.date_grid)(date);
    // };

    // 指定用户创建新依赖关系链接时显示的工具提示的文本
    gantt.templates.drag_link = function (from, from_start, to, to_start) {
      from = gantt.getTask(from);

      var text = "From:<b> " + from.text + "</b> " + (from_start ? "Start" : "End") + "<br/>";
      if (to) {
        to = gantt.getTask(to);
        text += "To:<b> " + to.text + "</b> " + (to_start ? "Start" : "End") + "<br/>";
      }
      return text;
    };

    gantt.templates.scale_row_class = function (scale) {
      return "day_scale";
    };

    gantt.templates.task_cell_class = function (item, date) {
      if (date.getDay() == 0 || date.getDay() == 6) {
        return "weekend"
      }
    };

    // 指定在树列中子项的标签之前插入的自定义内容（或任何其他HTML内容）
    // gantt.templates.grid_blank = function (task) {
    //   // return gantt.getWBSCode(gantt.getTask(task.id)) + "<input id='ch1' type='checkbox' onClick='someFunc(" + task.id + ")'></input>"
    //   return '<label class="my_protocol">' +
    //     '<input class="input_agreement_protocol" type="checkbox" />' +
    //     '<span></span>' +
    //     '</label>'
    // };

    //要在分支中设置子任务的缩进
    gantt.templates.grid_indent = function (task) {
      return "<div style='width:10px; float:left; height:100%'></div>"
    };

    // 变色
    // gantt.templates.grid_row_class = function (start, end, task) {
    //   if (task.$level > 0) {
    //     return "bgcolor"
    //   }
    // };


    // gantt.templates.task_class = gantt.templates.grid_row_class = gantt.templates.task_row_class = function (start, end, task) {
    //   if (gantt.isSelectedTask(task.id))
    //     return "gantt_selected";
    // };

    // 左边标题设置
    gantt.config.columns = [
      {
        name: "wbs",
        align: "left",
        label: "序号",
        width: 60,
        template: gantt.getWBSCode,
        template: (task) => {
          let num = 5;
          if (task.parent) {
            num += num;
            if (gantt.getTask(task.parent).parent) {
              num += num;
            }
          }
          return `<div style='width:${num}px; float:left; height:100%'></div>` + gantt.getWBSCode(gantt.getTask(task.id))
        }
      },
      {
        name: "text",
        align: "left",
        label: "任务列表",
        tree: true,
        width: 190,
      },
      {
        name: "start_date",
        label: "开始时间",
        align: "center",
        width: 100,
      },
      {
        name: "end_date",
        label: "结束时间",
        align: "center",
        width: 100,
      },
      {
        name: "duration",
        align: "center",
        label: "工期",
        width: 80,
      },
      //'<div class="gantt_grid_head_cell gantt_grid_head_add" onclick="gantt.createTask()"></div>'
      {
        name: "buttons",
        label: "操作",
        width: 110,
        template: function (task) {
          return (
            '<i class="bnt-warp"><img src="' + require('../../../../assets/imgs/gantt-add.png') + '" class="fa gantt_button_grid gantt_grid_edit fa-pencil" onclick="clickGridButton(' + 1 + ")\"></img></i>" +
            '<i class="bnt-warp"><img src="' + require('../../../../assets/imgs/gantt-move-up.png') + '" class="fa gantt_button_grid gantt_grid_add fa-plus" onclick="clickGridButton(' + 2 + ")\"></img></i>" +
            '<i class="bnt-warp"><img src="' + require('../../../../assets/imgs/gantt-move-down.png') + '" class="fa gantt_button_grid gantt_grid_delete fa-times" onclick="clickGridButton(' + 3 + ")\"></img></i>"
          );
        }
      }
    ];

    // 页面布局设置
    gantt.config.layout = {
      css: "gantt_container",
      cols: [
        {
          width: 640,
          rows: [
            { view: "grid", scrollX: "gridScroll", scrollable: true, scrollY: "scrollVer" },
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

    // 指定在树列中子项的标签之前插入的自定义内容（或任何其他HTML内容）
    // gantt.templates.grid_blank = function (task) {
    //   // return gantt.getWBSCode(gantt.getTask(task.id)) + "<input id='ch1' type='checkbox' onClick='someFunc(" + task.id + ")'></input>"
    //   return '<label class="my_protocol">' +
    //     '<input class="input_agreement_protocol" type="checkbox" />' +
    //     '<span></span>' +
    //     '</label>'
    // };

    // 变色
    // gantt.templates.grid_row_class = function (start, end, task) {
    //   if (task.$level > 0) {
    //     return "bgcolor"
    //   }
    // };


    // gantt.templates.task_class = gantt.templates.grid_row_class = gantt.templates.task_row_class = function (start, end, task) {
    //   if (gantt.isSelectedTask(task.id))
    //     return "gantt_selected";
    // };



    // 灯箱时间处理
    // gantt.templates.lightbox_header = function (start_date, end_date, task) {
    //   return (
    //     gantt.templates.task_time(task.start_date, task.end_date, task) +
    //     "&nbsp;" +
    //     (
    //       gantt.templates.task_text(task.start_date, task.end_date, task) || ""
    //     ).substr(0, 70)
    //   );
    // };
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
