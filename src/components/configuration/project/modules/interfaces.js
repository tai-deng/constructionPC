
/**
 * 
 * @param {this} that 
 * @param {接口名} infaceName 
 * @param {参数} param 
 */
export const infaces= (that,infaceName,param) =>{
  return new Promise((resolve,reject)=>{
    //   that.load()
      that.Request(infaceName(param)).then(res=>{
          if(res.StatusCode==200){
              resolve(res)
          }else{
              reject(new Error(res.Message))
          }
        //   that.$toast.clear()
      })
  })
}