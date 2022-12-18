var Links = {
  setColor : function(color){
    $('a').css('color', color);
  }  
};

var Body = {
  setColor : function(color){
    $('body').css('color', color);
  }, 
  setBackgroundColor : function(color){
    $('body').css('backgroundColor', color);
  }
};

function nightDayHandler(self){
  if(self.value == 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue')   
  } else {
    Body.setBackgroundColor('white')
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('black');    

  } 
}

function changeImg(self){
  var img_list = ["https://cdn-icons-png.flaticon.com/512/6701/6701400.png", "https://cdn-icons-png.flaticon.com/512/8810/8810527.png", "https://cdn-icons-png.flaticon.com/512/6411/6411727.png","https://cdn-icons-png.flaticon.com/512/408/408472.png","https://cdn-icons-png.flaticon.com/512/6411/6411802.png","https://cdn-icons-png.flaticon.com/512/4751/4751124.png","https://cdn-icons-png.flaticon.com/512/2546/2546715.png","https://cdn-icons-png.flaticon.com/512/6411/6411720.png","https://cdn-icons-png.flaticon.com/512/3142/3142055.png","https://cdn-icons-png.flaticon.com/512/6839/6839129.png","https://cdn-icons-png.flaticon.com/512/6701/6701513.png","https://cdn-icons-png.flaticon.com/512/6701/6701540.png"]
  var i;

  if(i>=12){
    i = 0;
    document.querySelector('#birthStone_img').src = img_list[i];
    // $('#birthStone_img').attr("src", img_list[i]);
  }
  else{
    i++;
    document.querySelector('#birthStone_img').src = img_list[i];
    // $('#birthStone_img').attr("src", img_list[i]);
  }
}
