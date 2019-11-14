const api2 = {
  checkImgExists(imgurl){
    var ImgObj = new Image();
    ImgObj.src = imgurl;
    console.log(ImgObj._size);
    if(ImgObj.size() > 0 || (ImgObj.width > 0 && ImgObj.height > 0))
      return true;
    else
      return false;
  },
};
export { api2 }

