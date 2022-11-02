// pages/order/order.js
var httpUrl = "http://121.41.99.17"
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */

  data: {
    imageUrl:"http://121.41.99.17/img/",
    proinfo:{},
    curentData:util.formatD(new Date()),
    curentTime:"9:00",
    tecid:"0"
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    //console.log(date);
    this.setData({
      curentData: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      curentTime: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //接收上一个页面传递的数据
    console.log("接收详情页面点击的产品id = ",options.id)
    console.log("技师id = ",options.tecid);
     
  },
  //表单提交
  submit:function(even){
    var that = this;
    console.log(even.detail.value);
    //校验微信登录时候过期，不用管怎校验，
    wx.checkSession({
      success () {
        //session_key 未过期，并且在本生命周期一直有效
        //拿到技师id，如果是undefined，那么赋值 0
        var tecid = that.data.tecid;
        console.log("=======",typeof(tecid));
        if(typeof(tecid)=="undefined"){
          console.log("=====================")
          tecid = "0";
        }
        //获取本地缓存的token
        wx.getStorage({
          key: 'token',
          success (res) {
            console.log("token = ",res.data)
            wx.request({
              url: httpUrl+"/order/addOrder",
              method:"POST",
              header: {
                "content-Type": "application/x-www-form-urlencoded"
              },
              data: {
                token:res.data,
                proname:that.data.proinfo.project.proname,
                makedate:that.data.curentData+" "+that.data.curentTime,
                username:even.detail.value.username,
                usertell:even.detail.value.usertell,
                information:even.detail.value.information,
                busid:that.data.proinfo.id,
                proid:that.data.proinfo.project.id,
                tecid:tecid
              },
              success:function(result){
                 if(result.data.code=="0"){
                    //1.跳转页面  首页
                    wx.switchTab({
                      url: '/pages/index/index'
                    })
                 }else{
                   //2.显示错误信息
                   wx.showToast({
                    title: result.data.msg,
                    icon: 'error',
                    duration: 2000
                  })
                 }
        
              }
            })  

          },
          fail(){
            //跳转页面
            wx.navigateTo({
              url: "/pages/login/login"
            })
          }
        })


       
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        //跳转到登录页面
      }
    })




   

   

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})