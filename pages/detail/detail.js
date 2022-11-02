// pages/detail/detail.js

var httpUrl = "http://121.41.99.17"
Page({

  /**
   * 页面的初始数据
   */
  data: {

    proInfo:{},
    imageUrl:"http://121.41.99.17/img/"
  },
  yuding:function(even){
   
    //1.页面跳转，只传递产品id值
    wx.navigateTo({
      // url: '/pages/order/order?id='+this.data.proInfo.id,   
      url: '/pages/order/order?id='+1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

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