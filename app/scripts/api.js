// var API_URL = 'http://localhost:3000';
var DEV_ENV = '//dev.api.aiyaopai.com/';
var PRODUCTION_ENV = '//api.aiyaopai.com/';


var DOMAIN = DEV_ENV;

//获取当前网站的根目录
var Local_Host = window.location.host;

//根据local host切换api
function hasHost(host) {
  return host.length > 0;
}

function isDevHost(host) {
  var re = /dev\.|192\.|localhost|0\./i;
  var founds = host.match(re);
  if (founds != null) {
    return true;
  } else {
    return false;
  }
}

function isProdHost(host) {
  return !isDevHost(host);
}

if (hasHost(Local_Host) && isProdHost(Local_Host)) {
  DOMAIN = PRODUCTION_ENV;
}

var API_URL = DOMAIN + '?api=';

var API_CONST = {
  USER : {
    login : API_URL + 'User.Login',
    login_with_token : API_URL + 'User.LoginWithToken',
    register : API_URL + 'User.ReceiveTelRegister',
    sendTelRegister : API_URL + "User.SendTelRegister",
    modify_password : API_URL + 'User.ChangePassword',
    logout : API_URL + "User.Logout",
    open_login : API_URL + "openuser.login&serviceid=openweixin&redirecturl="+Local_Host,
    current_user : API_URL + 'User.CurrentUser',
    currentUserDetail : API_URL + 'User.CurrentUserDetail',
    changeAvatar : API_URL + 'User.ChangeAvatar',
    updateInfo : API_URL + 'User.ChangeInfo',
  },
  PHOTOGRAPHER :{
    submitAudit : API_URL + 'Photographer.SubmitAudit',
    viewAudit : API_URL + 'Photographer.ViewAudit',
    get : API_URL + 'Photographer.Get',
    current : API_URL + 'Photographer.CurrentPhotographer',
    change : API_URL + 'Photographer.ChangePhotographer',
    currentStudio : API_URL + 'PhotographerStudio.CurrentStudio',
    changeStudio : API_URL + 'PhotographerStudio.ChangeStudio',
  },
  ALBUMS : {
    add : API_URL + 'Albums.Add',
    update : API_URL + 'Albums.Update',
    delete : API_URL + 'Albums.Delete',
    get : API_URL + 'Albums.Get',
    search : API_URL + 'Albums.Search',
    categories : API_URL + 'AlbumsCategory.Search',
    offSale : API_URL + 'Albums.SalesOff',
    onSale : API_URL + 'Albums.SalesOn'
  },
  ORDER : {
    outSearch : API_URL + 'Order.OutSearch',
    inSearch : API_URL + 'Order.InSearch',
    get : API_URL + 'Order.Get',
    confirm : API_URL + 'Order.Confirm',
    add : API_URL + 'Order.Add',
    close : API_URL + 'Order.Close',
  },
  FILE : {
    getToken : API_URL + 'File.Token',
    user_token_url : DOMAIN + 'file/token?type=user',
    work_token_url : DOMAIN + 'file/token?type=work',
  },
  COMMON : {
    area_list : API_URL + 'Area.List',
  }
}

function getRootPath_web() {
    var strFullPath=window.document.location.href; 
    var strPath=window.document.location.pathname; 
    var pos=strFullPath.indexOf(strPath); 
    var prePath=strFullPath.substring(0,pos); 
    var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1); 
    return(prePath+postPath); 
}

module.exports = API_CONST;