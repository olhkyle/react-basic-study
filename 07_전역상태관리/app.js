let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('성공!')
    }, 1000)
})


myFirstPromise.then((success) => {
    console.log(`${success} 입니다.`)
    alert(`${success}`)
})


// 대표적인 http 요청은 API 호출일것

// fetch API
