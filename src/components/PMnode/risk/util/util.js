
const projectid = localStorage.getItem("projectid");
/**
 * @name 风险管理-拒收、接收、认证操作
 * @param {*} that
 * @param {function} DoRiskWork 风险管理问题提交工作流操作接口
 * @param {integer} ID 风险ID
 */
export const dotoRiskWork = (that, DoRiskWork, status) => {
    that.load();
    let params = {
            Risk: {
                ID: that.riskid
            },
            Receiver: {
                ID: that.receiverID,
                Status: status,
                AuthTime: that.riskForm.AuthTime == "" ? require('moment')(new Date()).format('YYYY-MM-DD') : require('moment')(that.riskForm.AuthTime).format('YYYY-MM-DD')
            },
            AuthFiles: that.authPhotoList.length == 0 ? [] : that.authPhotoList
        }
    DoRiskWork(params).then(res => {
        if(res.StatusCode === 200){
            that.$message({
                type: "success",
                message: "操作成功！",
                center: "true"
            });
            that.$router.go(-1)
        }else{
            that.$message({
                type: "error",
                message: "操作失败",
                center: "true"
            });
        }
        that.riskForm.AuthTime = ""
        that.$toast.clear();
    });
}

export const pubInterface = (that, pubInterfaceName, param) => {
    return new Promise((resolve,reject)=>{
        // that.load()
        that.Request(pubInterfaceName(param)).then(res=>{
            if(res.StatusCode === 200){
                resolve(res)
            }else{
                reject(new Error(res.Message))
            }
            // that.$toast.clear()
        })
    })

    // switch (status) {
    //     case 0:
    //         that.load();
    //         GetRiskTotal({projectId: projectid, status: status}).then(res => {
    //             if(res.StatusCode === 200){
    //                 if(res.Detiel.length > 0){
    //                     res.Detiel.forEach(element => {
    //                         let initiateTime = element.Risk.InitiateTime == "" ? "" : element.Risk.InitiateTime.substring(0, element.Risk.InitiateTime.indexOf("T"))
    //                         if(element.listViewpoints.length > 0){
    //                             element.listViewpoints.forEach(ele => {
    //                                 that.noMarkers.push({
    //                                     imgTag: require("../img/img2.png"),
    //                                     position: JSON.parse(ele.State).camera.position,
    //                                     markerState: status,
    //                                     tooltip: "问题：" + element.Risk.Problem + " 发起人：" + element.Risk.Initiator + " 发起时间：" + initiateTime
    //                                 })
    //                             })
    //                         }
    //                     })
    //                     console.log("=====util.js noMarkers=====", that.noMarkers)
    //                 }else{
    //                     that.noMarkers = []
    //                 }
    //             }else{
    //                 that.$message({
    //                     type: "error",
    //                     message: res.Message,
    //                     center: "true"
    //                 });
    //             }
    //             that.$toast.clear();
    //         })
    //         break;
    
    //     default:
    //         break;
    // }

    // that.markers = []
    // that.load();
    // GetRiskTotal({projectId: projectid, status: status}).then(res => {
    //     if(res.StatusCode === 200){
    //         if(res.Detiel.length > 0){
    //             // let markersTag = ""
    //             // let markerPosition = []
    //             switch (status) {
    //                 case 0:
    //                     {
    //                         that.noMarkers = []
    //                         that.noModelID = []
    //                         res.Detiel.forEach(element => {
    //                             let initiateTime = element.Risk.InitiateTime == "" ? "" : element.Risk.InitiateTime.substring(0, element.Risk.InitiateTime.indexOf("T"))
    //                             let markerTag = require("moment")(new Date(initiateTime)).format("YYYY-MM") == require("moment")(new Date()).format("YYYY-MM") ? require("../img/img5.png") : require("../img/img2.png")
    //                             if(element.listViewpoints.length > 0){
    //                                 that.noModelID.push(element.Risk.ID)
    //                                 element.listViewpoints.forEach(ele => {
    //                                     that.noMarkers.push({
    //                                         imgTag: markerTag,
    //                                         position: JSON.parse(ele.State).camera.position,
    //                                         markerID: element.Risk.ID,
    //                                         tooltips: "【问题】：" + element.Risk.Problem + " 【发起人】：" + element.Risk.Initiator + " 【发起时间】：" + initiateTime
    //                                     })
    //                                 })
    //                             }
    //                         })
    //                     }
    //                     // console.log("=====util.js noMarkers=====", that.noMarkers)
    //                     break;
    //                 case 1:
    //                     {
    //                         that.ingMarkers = []
    //                         that.ingModelID = []
    //                         res.Detiel.forEach(element => {
    //                             let initiateTime = element.Risk.InitiateTime == "" ? "" : element.Risk.InitiateTime.substring(0, element.Risk.InitiateTime.indexOf("T"))
    //                             let markerTag = require("moment")(new Date(initiateTime)).format("YYYY-MM") == require("moment")(new Date()).format("YYYY-MM") ? require("../img/img5.png") : require("../img/img3.png")
    //                             if(element.listViewpoints.length > 0){
    //                                 that.ingModelID.push(element.Risk.ID)
    //                                 element.listViewpoints.forEach(ele => {
    //                                     that.ingMarkers.push({
    //                                         imgTag: markerTag,
    //                                         position: JSON.parse(ele.State).camera.position,
    //                                         markerID: element.Risk.ID,
    //                                         tooltips: "【问题】：" + element.Risk.Problem + " 【发起人】：" + element.Risk.Initiator + " 【发起时间】：" + initiateTime
    //                                     })
    //                                 })
    //                             }
    //                         })
    //                     }
    //                     // console.log("=====util.js ingMarkers=====", that.ingMarkers)
    //                     break;
    //                 case 2:
    //                     {
    //                         that.overModelID = []
    //                         that.overMarkers = []
    //                         res.Detiel.forEach(element => {
    //                             let initiateTime = element.Risk.InitiateTime == "" ? "" : element.Risk.InitiateTime.substring(0, element.Risk.InitiateTime.indexOf("T"))
    //                             let markerTag = require("moment")(new Date(initiateTime)).format("YYYY-MM") == require("moment")(new Date()).format("YYYY-MM") ? require("../img/img5.png") : require("../img/img4.png")
    //                             if(element.listViewpoints.length > 0){
    //                                 that.overModelID.push(element.Risk.ID)
    //                                 element.listViewpoints.forEach(ele => {
    //                                     that.overMarkers.push({
    //                                         imgTag: markerTag,
    //                                         position: JSON.parse(ele.State).camera.position,
    //                                         markerID: element.Risk.ID,
    //                                         tooltips: "【问题】：" + element.Risk.Problem + " 【发起人】：" + element.Risk.Initiator + " 【发起时间】：" + initiateTime
    //                                     })
    //                                 })
    //                             }
    //                         })
    //                     }
    //                     // console.log("=====util.js overMarkers=====", that.overMarkers)
    //                     break;
    //                 default:
    //                     break;
    //             }
    //             // res.Detiel.forEach(element => {
    //             //     let initiateTime = element.Risk.InitiateTime == "" ? "" : element.Risk.InitiateTime.substring(0, element.Risk.InitiateTime.indexOf("T"))
    //             //     if(element.listViewpoints.length > 0){
    //             //         element.listViewpoints.forEach(ele => {
    //             //             that.noMarkers.push({
    //             //                 imgTag: markersTag,
    //             //                 position: JSON.parse(ele.State).camera.position,
    //             //                 markerState: status,
    //             //                 tooltip: "问题：" + element.Risk.Problem + " 发起人：" + element.Risk.Initiator + " 发起时间：" + initiateTime
    //             //             })
    //             //         })
    //             //     }
    //             // })
    //             // console.log("=====util.js=====", that.noMarkers)
    //         }else{
    //             that.noMarkers = []
    //             that.ingMarkers = []
    //             that.overMarkers = []

    //             that.noModelID = []
    //             that.ingModelID = []
    //             that.overModelID= []
    //         }
    //     }else{
    //         that.$message({
    //             type: "error",
    //             message: res.Message,
    //             center: "true"
    //         });
    //     }
    //     that.$toast.clear();
    // });
}