/**
 * 导航栏路由
 */
const navigator = () =>
  import ('@/components/navigatorBar/navigatorBar')
const index = () =>
  import ('@/components/index/index')
const wisdomSite = () =>
  import ('@/components/wisdomSite/wisdomSite')
const dataOverView = () =>
  import ('@/components/wisdomSite/dataOverView/dataOverView')
const laborRealName = () =>
  import ('@/components/wisdomSite/laborRealName/laborRealName')
const monitoring = () =>
  import ('@/components/wisdomSite/monitoring/monitoring')
const environmentalMonitoring = () =>
  import ('@/components/wisdomSite/environmentalMonitoring/environmentalMonitoring')
const towerCrane = () =>
  import ('@/components/wisdomSite/towerCrane/towerCrane')
const elevator = () =>
  import ('@/components/wisdomSite/elevator/elevator')

const uploadModel = () =>
  import ('@/components/virtualConstruction/uploadModel/uploadModel')
const information = () =>
  import ('@/components/virtualConstruction/information/information')
const collaborativeSetting = () =>
  import ('@/components/virtualConstruction/collaborativeSetting/collaborativeSetting')
const schedulePlanning = () =>
  import ('@/components/virtualConstruction/schedulePlanning/schedulePlanning')
const listingImport = () =>
  import ('@/components/virtualConstruction/listingImport/listingImport')
const artifactsAssociated = () =>
  import ('@/components/virtualConstruction/artifactsAssociated/artifactsAssociated')
const qingDrab = () =>
  import ('@/components/virtualConstruction/qingDrab/qingDrab')
const SetAuthentication = () =>
  import ('@/components/virtualConstruction/SetAuthentication/SetAuthentication')

const threedView = () =>
  import ('@/components/3dView/3dView')
const PMnode = () =>
  import ('@/components/PMnode/PMnode')
const integration = () =>
  import ('@/components/PMnode/integration/integration')
const time = () =>
  import ('@/components/PMnode/time/time')
const scope = () =>
  import ('@/components/PMnode/scope/scope-change/index')
const InitiateChange = () => //发起变更
  import ('@/components/PMnode/scope/initiateChange')
const ChangeDetail = () => //变更详情
  import ('@/components/PMnode/scope/changeDetail')

const procurement = () =>
  import ('@/components/PMnode/procurement/list')
const putStorage = () =>
  import ('@/components/PMnode/procurement/putStorage') //材料入库
const returnStorage = () =>
  import ('@/components/PMnode/procurement/returnStorage') //材料退还
const outStorage = () =>
  import ('@/components/PMnode/procurement/outStorage') //材料出库
const cost = () =>
  import ('@/components/PMnode/cost/cost')
const quality = () =>
  import ('@/components/PMnode/quality/quality')
const risk = () =>
  import ('@/components/PMnode/risk/risk')
const newQuestion = () =>
  import ('@/components/PMnode/risk/newQuestion')
const questionDetail = () =>
  import ('@/components/PMnode/risk/questionDetail')
const human = () =>
  import ('@/components/PMnode/human/human')
const communication = () =>
  import ('@/components/PMnode/communication/communication')
const communication1 = () =>
  import ('@/components/PMnode/communication/communication1')
const communication2 = () =>
  import ('@/components/PMnode/communication/communication2')
const fiveDsimulation = () =>
  import ('@/components/fiveDsimulation/fiveDsimulation')
const intelligenceReports = () =>
  import ('@/components/intelligenceReports/intelligenceReports')
const configuration = () =>
  import ('@/components/configuration/configuration')
const progress = () =>
  import ('@/components/configuration/progress/progress')
const dataDictionary = () =>
  import ('@/components/configuration/dataDictionary/dataDictionary')
const timeSetting = () =>
  import ('@/components/configuration/timeSetting/timeSetting')
const modelstyle = () =>
  import ('@/components/configuration/modelStyle/modelStyle')
const project = () =>
  import ('@/components/configuration/project/project')
const organization = () =>
  import ('@/components/configuration/organization/organization')
const systemlog = () =>
  import ('@/components/configuration/systemlog/systemlog')
const attendance = () =>
  import ('@/components/configuration/attendance/attendance')

const allModel = () =>
  import ('@/components/virtualConstruction/uploadModel/components/allModel')
const history = () =>
  import ('@/components/virtualConstruction/uploadModel/components/history')

// const watchModel = () =>
//     import ('@/components/virtualConstruction/uploadModel/components/watchModel')
export default [{
  path: '/',
  redirect: '/nav/to/index'
},
  {
    path: '/nav/:id',
    component: navigator,
    children: [{
      path: 'index',
      name: '首页',
      component: index,
      meta: {
        keepAlive: false
      }
    },
      {
        path: 'wisdomSite',
        name: '智慧工地',
        component: wisdomSite,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'dataOverView',
        name: '数据总览',
        component: dataOverView,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'laborRealName',
        name: '劳务实名制',
        component: laborRealName,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'monitoring',
        name: '视频监控',
        component: monitoring,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'environmentalMonitoring',
        name: '环境监测',
        component: environmentalMonitoring,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'towerCrane',
        name: '塔吊监测',
        component: towerCrane,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'elevator',
        name: '升降机监测',
        component: elevator,
        meta: {
          keepAlive: false
        }
      },

      {
        path: 'uploadModel',
        name: '模型上传',
        component: uploadModel,
        meta: {
          keepAlive: false
        }
      },
      // {
      //     path: 'components/watchModel',
      //     name: '模型上传-查看模型',
      //     component: watchModel,
      //     meta: {
      //         keepAlive: false
      //     },
      // },
      {
        path: 'components/allModel',
        name: '模型上传-子页面',
        component: allModel,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'components/history',
        name: '模型上传-历史模型',
        component: history,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'information',
        name: '信息配置',
        component: information,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'collaborativeSetting',
        name: '协同设定',
        component: collaborativeSetting,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'schedulePlanning',
        name: '进度规划',
        component: schedulePlanning,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'listingImport',
        name: '清单导入',
        component: listingImport,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'artifactsAssociated',
        name: '构件关联',
        component: artifactsAssociated,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'qingDrab',
        name: '清单调优',
        component: qingDrab,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'SetAuthentication',
        name: '认证设定',
        component: SetAuthentication,
        meta: {
          keepAlive: false
        }
      },

      {
        path: 'threedView',
        name: '三维浏览',
        component: threedView,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'PMnode',
        name: 'PM节点',
        component: PMnode,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'integration',
        name: '集成管理-工作台',
        component: integration,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'time',
        name: '时间管理-施工员',
        component: time,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'scope',
        name: '范围管理-施工员',
        component: scope,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'InitiateChange',
        name: '范围管理-发起变更',
        component: InitiateChange,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'ChangeDetail',
        name: '范围管理-变更详情',
        component: ChangeDetail,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'material-need',
        name: '物资需求',
        component: () =>
          import ('@/components/PMnode/scope/material-Speed/material-speed'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'scope-detail',
        name: '采购详情',
        component: () =>
          import ('@/components/PMnode/scope/scope-change/components/scope-detail'),
        meta: {
          keepAlive: false
        }
      },
      // {
      //     path: 'scope-change-detail',
      //     name: '变更详情',
      //     component: () =>
      //         import ('@/components/PMnode/scope/scope-change/index'),
      //     meta: {
      //         keepAlive: false
      //     },
      // },
      {
        path: 'procurement',
        name: '采购管理-材料员',
        component: procurement,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'scopeList',
        name: '采购管理-物资需求',
        component: () => import('@/components/PMnode/procurement/scopeList'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'scopeListDetail',
        name: '采购管理-物资需求详情',
        component: () => import('@/components/PMnode/procurement/scopeListDetail'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'putStorage',
        name: '采购管理-材料入库',
        component: putStorage,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'outStorage',
        name: '采购管理-材料出库',
        component: outStorage,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'returnStorage',
        name: '采购管理-材料出库',
        component: returnStorage,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'cost',
        name: '成本管理cost',
        component: cost,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'costdetail',
        name: '成本管理详情costdetail',
        component: () =>
          import ('@/components/PMnode/cost/detail'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'risk',
        name: '风险管理-质安员',
        component: risk,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'newQuestion',
        name: '风险管理-新建问题',
        component: newQuestion,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'questionDetail',
        name: '风险管理-问题详情',
        component: questionDetail,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'quality',
        name: '质量管理-质量员',
        component: quality,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'human',
        name: '人力资源-劳资员',
        component: human,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'communication',
        name: '沟通管理-资料员',
        component: communication,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'communication2',
        name: '沟通管理-协调沟通',
        component: communication2,
        meta: {
          keepAlive: false
        }
      }, {
        path: 'communication1',
        name: '沟通管理-详情',
        component: communication1,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'fiveDsimulation',
        name: '5D模拟',
        component: fiveDsimulation,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'intelligenceReports',
        name: '智能报表-资料员',
        component: intelligenceReports,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'configuration',
        name: '功能配置',
        component: configuration,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'progress',
        name: '进度配置',
        component: progress,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'dataDictionary',
        name: '数据字典',
        component: dataDictionary,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'timeSetting',
        name: '周期管理',
        component: timeSetting,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'modelstyle',
        name: '模型样式',
        component: modelstyle,
        meta: {
          keepAlive: false
        }
      },

      {
        path: 'project',
        name: '项目开通',
        component: project,
        meta: {
          keepAlive: false
        }
      },
      
      {
        path: 'organization',
        name: '组织管理',
        component: organization,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'systemlog',
        name: '系统日志',
        component: systemlog,
        meta: {
          keepAlive: false
        }
      },
      {
        path: 'attendance',
        name: '考勤设置',
        component: attendance,
        meta: {
          keepAlive: false
        }
      }

    ]
  }
]
