export const http = (url, method, data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: method,
			url: getApp().globalData.baseUrl + url,
			data: data,
			header: {
				"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
				Authorization: uni.getStorageSync('token') ? uni.getStorageSync('token') : null
			},
			success: (res) => {
				if (res.statusCode == 200) {
					let result = res.data
					if (result.code == 200) {
						resolve(res.data)
					}else if (result.code == 401) {
						resolve(res.data)
						uni.clearStorageSync()
						uni.redirectTo({
							url: '/pages/login/loginPhone'
						})
					}else{
						uni.$u.toast(result.msg)
					}
				} else {
					uni.$u.toast()
				}
			},
			fail: (err) => {
				// console.log(err.data)
			}
		})
	})
}