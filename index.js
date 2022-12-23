var navstatus = 0;

function openNav()
 {
  if (!navstatus) 
  {
    $('.maindiv').css('width', '20%');
    $('.fan').css('display', 'block');
    navstatus = 1;
  } 
  else {
    $('.maindiv').css('width','0')
    $('li').cas('display','none')
    navstatus=0
  }
}
