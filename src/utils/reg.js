/*/
*
*---公用的验证方法---
*
/*/

// 验证手机号码
export function phone (rule, value, callback) {
    if(!(/^1[34578]\d{9}$/.test(value))){ 
        return callback(new Error('请输入正确的手机号码'));
    } else {
        callback();
    }
}

// 验证价格(保留两位)
export function price (rule, value, callback) {
    var value = String(value).split(".");
    if (value[1]) {
        if (value[1].length >= 3) {
            return callback(new Error('请输入正确价格'));
        }
    }
    callback();
}