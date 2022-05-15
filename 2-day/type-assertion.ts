// type-assertion.ts

class ApiError extends Error {
    code: number = 0;
}

class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    // if (typeof (error.code === 'number') { // 类型“Error”上不存在属性“code”。ts(2339)
    //     return true;
    // }
    console.log((error as ApiError).code )
    if (typeof (error as ApiError).code === 'number') { // 通过as断言它类型为ApiError
        return true;
    }
    return false;
}

let apiError = new ApiError();
let httpError = new HttpError();
console.log(isApiError(apiError))
console.log(isApiError(httpError)) // 欺骗了编译器，编译时不会判断HttpError有没有code，值为undefined
console.log('=======================')
// 如果是用的话用instanceof会更好，无需断言
function InstanceofisApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
console.log(InstanceofisApiError(apiError))
console.log(InstanceofisApiError(httpError)) 