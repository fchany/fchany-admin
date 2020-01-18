import Cookies from 'js-cookie'

const TokenKey = 'token'
const UserType = "userType"
const UserInfo = "userInfo"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function loginOut(call) {
    Cookies.remove(TokenKey);
    Cookies.remove(UserType);
    Cookies.remove(UserInfo);
    call();
}

export function getUserType() {
    return Cookies.get(UserType);
}

export function setUserType(val) {
    return Cookies.set(UserType, val);
}

export function setUserInfo(val) {
    var v = JSON.stringify(val);
    return Cookies.set(UserInfo, v);
}

export function getUserInfo() {
    return JSON.parse(Cookies.get(UserInfo));
}

export function removeUserInfo() {
    return Cookies.remove(UserInfo);
}
