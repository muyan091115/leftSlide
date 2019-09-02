const App = getApp();

Page({
  data: {
    items: [
      {
        name: "1"
      },
      {
        name: "2"
      },
      {
        name: "3"
      }
    ]
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    let data = App.touch._touchstart(e, this.data.items)
    this.setData({
      items: data
    })
  },

  //滑动事件处理
  touchmove: function (e) {
    let data = App.touch._touchmove(e, this.data.items)
    this.setData({
      items: data
    })
  },

  //删除事件
  del: function (e) {
    wx.showModal({
      title: '提示',
      content: '确认要删除此条信息么？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.data.items.splice(e.currentTarget.dataset.index, 1)
          that.setData({
            items: that.data.items
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //修改
  edit: function (e) {
    wx.showToast({
      title: '编辑',
      icon: 'success',
      duration: 2000
    })


  },

  onLoad: function () {
  },
})
