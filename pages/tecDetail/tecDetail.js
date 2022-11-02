// pages/tecDetail/tecDetail.js
var httpUrl = "http://121.41.99.17"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tecInfo:{},
    imageUrl:"http://121.41.99.17/img/"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log("技师详情页面获取技师id",options.id);
    
  },
  order:function(even){
    console.log("点击预定,",even.currentTarget.dataset);
    //直接跳转页面  到预定页面   传产品id   和  技师id
    wx.navigateTo({
      url: '/pages/order/order?id='+even.currentTarget.dataset.id+'&tecid='+this.data.tecInfo.id, 
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