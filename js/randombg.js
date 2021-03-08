//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(/img/bg1.jpg)",
  "url(/img/bg2.jpg)",
  "url(/img/bg3.jpg)",
  "url(/img/bg4.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
  "url(/img/bg1.jpg)",
  "url(/img/bg2.jpg)",
  "url(/img/bg3.jpg)",
  "url(/img/bg4.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];