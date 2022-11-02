// pages/technician/technician.js
var httpUrl = "http://121.41.99.17"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    technicianInfo:[],
    imageUrl:"http://121.41.99.17/img/",
    page:1,
    limit:6,
    isData:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
  },
  
  lower:function(){
    var that = this;
    //当前第几页新增  page
    that.data.page++;
    //发送请求
    this.getData(that.data.page,that.data.limit);
  },

  getData:function(page,limit){
    var that = this;
    if(that.data.isData==true){
      wx.request({
        url: httpUrl+'/technician/queryTecInfo',
        data:{
          page:page,
          limit:limit
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log("技师信息",res.data.data);  //that.data.technicianInfo
          var tecList = [...that.data.technicianInfo,...res.data.data]
          that.setData({
            technicianInfo:tecList,
            isData:res.data.count>tecList.length
          })
        }
      })
    }

   
  },


  tecDetail:function(even){
    console.log("点击技师",even.currentTarget.dataset.id);
    //跳转到技师详情页面
    wx.navigateTo({
      url: "/pages/tecDetail/tecDetail?id="+even.currentTarget.dataset.id
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