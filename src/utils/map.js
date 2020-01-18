/**
* @为增加代码主逻辑的可读性，所有主逻辑代码中的循环需要抽离出来
* @以下为常用方法
* @更多方法请自行补充
*
*/

/**
* @作用: 遍历数组/对象
* @param: obj	需要遍历的数组/对象/数字
* @param: call 回调函数，返回当前的key和value，如果是数字类型，只返回当前的key
*/
export function map(obj, call) {
    if (typeof obj === "number") {
        for (var i = 0; i < obj; i++) {
            call(i);
        }
        return;
    }
    for (var index in obj) {
        call(index, obj[index]);
    }
}

/**
* @作用: 将当前的对象集合转变成id的数组集合，用于信息列表的批量交互
* @param: obj 需要遍历的数组/对象
* @param: key 需要提取id的key
*/
export function getIdList(obj, key) {
    var list = [];
    for (var index in obj) {
        list.push(obj[index][key])
    }
    return list;
}