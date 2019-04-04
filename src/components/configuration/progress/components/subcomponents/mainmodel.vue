
<template>
  <div class='main-container'>
    <div
      class="list_4"
      v-if="dataNameList.length === 4"
    >
      <div class="table-header">
        <span
          v-for="(item, index) in dataNameList"
          :key="index"
        >{{item}}</span>
      </div>
      <div class="table-body">
        <ul @dblclick="isChange($event)">
          <li
            v-for="(item) in dataList"
            :key="item.id"
          >
            <span>{{item.itemName}}</span>
            <span>
              <input
                type="text"
                :value="item.limitTime"
                disabled="disabled"
              />
            </span>
            <span>
              <input
                type="text"
                :value="item.time"
                disabled="disabled"
              />
            </span>
            <span
              class="del-btn"
              @click="delData(item.id)"
            >删除</span>
          </li>
          <!-- <li>
          <span>天然地基基础</span>
          <span>
            <input type="text" value="——" disabled="disabled"/>
          </span>
          <span>
            <input type="text" value="25天" disabled="disabled"/>
          </span>
          <span>删除</span>
        </li>
        <li>
           <span>天然地基基础</span>
          <span>
            <input type="text" value="——" disabled="disabled"/>
          </span>
          <span>
            <input type="text" value="25天" disabled="disabled"/>
          </span>
          <span>删除</span>
        </li> -->

        </ul>
      </div>

      <!-- <span>施工+静载工期</span>
      <span>桩身检测及垫底工期</span>
      <span>操作</span> -->
    </div>

    <div
      class="list_3"
      v-else-if="dataNameList.length === 3"
    >
      <div class="table-header">
        <span
          v-for="(item, index) in dataNameList"
          :key="index"
        >{{item}}</span>
      </div>
      <div class="table-body">
        <ul @dblclick="isChange($event)">
          <li
            v-for="(item) in dataList"
            :key="item.id"
          >
            <span>{{item.itemName}}</span>
            <span>
              <input
                type="text"
                :value="item.time"
                disabled="disabled"
              />
            </span>
            <span
              class="del-btn"
              @click="delData(item.id)"
            >删除</span>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
export default {
  data() {
    return {};
  },
  props: {
    dataNameList: {
      type: Array,
      default: function() {
        return ["", "", "", ""];
      }
    },
    list: {
      type: Object,
      default: function() {
        return null;
      }
    },
    dataList: {
      type: Array,
      default: function() {
        return [
          { id: 0, itemName: "天然地基基础", limitTime: "——", time: "25天" },
          { id: 1, itemName: "管桩", limitTime: "20天", time: "25天" },
          {
            id: 2,
            itemName: "长螺旋灌注桩（不配筋）",
            limitTime: "60天",
            time: "25天"
          },
          {
            id: 3,
            itemName: "长螺旋灌注桩（配筋）",
            limitTime: "70天",
            time: "25天"
          },
          {
            id: 4,
            itemName: "非熔岩地区灌注桩",
            limitTime: "70天",
            time: "25天"
          },
          {
            id: 5,
            itemName: "熔岩地区灌注桩",
            limitTime: "100天",
            time: "25天"
          },
          {
            id: 6,
            itemName: "熔岩地区灌注桩",
            limitTime: "100天",
            time: "25天"
          },
          {
            id: 7,
            itemName: "熔岩地区灌注桩",
            limitTime: "100天",
            time: "25天"
          },
          {
            id: 8,
            itemName: "熔岩地区灌注桩",
            limitTime: "100天",
            time: "25天"
          },
          {
            id: 9,
            itemName: "熔岩地区灌注桩",
            limitTime: "100天",
            time: "25天"
          }
        ];
      }
    }
  },
  watch: {
    list(val) {
      console.log(val);
      if (val) {
        this.dataList.push(val);
      }
    }
  },
  methods: {
    //双击修改数值
    isChange(e) {
      let attDisabled = e.target.attributes.disabled;
      if (attDisabled) {
        e.target.removeAttribute("disabled");
      }
    },
    delData(id) {
      console.log(id);
      let arr = [];
      arr = this.dataList.filter(i => {
        return i.id !== id;
      });
      console.log(arr);
      this.dataList = arr;
      // return
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>

@import '../../../../../assets/stylus/variable.styl';

.main-container {
  width: 100%;
  height: 100%;
  padding-left: 20px;

  .list_4 {
    .table-header {
      margin-top: 20px;
      background-color: #435089;

      span {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        color: #FFFEFE;
        border-right: 1px solid #E5E5E5;
      }

      span:first-child {
        width: 335px;
      }

      span:nth-child(2) {
        width: 260px;
      }

      span:nth-child(3) {
        width: 260px;
      }

      span:last-child {
        width: 143px;
      }
    }

    .table-body {
      height: 100%;
      background-color: #fff;

      ul {
        li {
          span {
            display: inline-block;
            height: 39px;
            line-height: 39px;
            text-align: center;
            font-size: $font-size-18;
            color: $font-color-10;
            border-right: 1px solid #fff;
            border-bottom: 1px solid #E5E5E5;

            input {
              display: inline-block;
              width: 100%;
              height: 39px;
              line-height: 39px;
              text-align: center;
              vertical-align: top;
              background-color: #fff;
            }
          }

          span:first-child {
            width: 335px;
          }

          span:nth-child(2) {
            width: 260px;
          }

          span:nth-child(3) {
            width: 260px;
          }

          span:last-child {
            width: 143px;
          }

          .del-btn {
            color: $font-color-13;
          }
        }
      }
    }
  }

  .list_3 {
     .table-header {
      margin-top: 20px;
      background-color: #435089;

       span {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 18px;
      color: #FFFEFE;
      border-right: 1px solid #E5E5E5;
    }

    span:first-child {
      width: 595px;
    }

    span:nth-child(2) {
      width: 260px;
    }

    span:last-child {
      width: 143px;
    }
    }

    .table-body {
      height: 100%;
      background-color: #fff;

      ul {
        li {
          span {
            display: inline-block;
            height: 39px;
            line-height: 39px;
            text-align: center;
            font-size: $font-size-18;
            color: $font-color-10;
            border-right: 1px solid #fff;
            border-bottom: 1px solid #E5E5E5;

            input {
              display: inline-block;
              width: 100%;
              height: 39px;
              line-height: 39px;
              text-align: center;
              vertical-align: top;
              background-color: #fff;
            }
          }

          span:first-child {
            width: 595px;
          }

          span:nth-child(2) {
            width: 260px;
          }

       
          span:last-child {
            width: 143px;
          }

          .del-btn {
            color: $font-color-13;
          }
        }
      }
    }


  
  }
}
</style>
<style >
</style>
