var num = 0;

$('body').on('click', '.m-a', (e) => {
  doAdd(e);
})

$('body').on('click', '.m-d', (e) => {
  doDel(e);
})

function doAdd(e) {
  let t = e.currentTarget;
  let item = `<div class="m-ct"><div class="m-n">${++num}</div><div class="m-if"></div><div class="m-d">Delete</div></div>`
  $(t).prev().append(item);
}

function doDel(e) {
  let t = e.currentTarget;
  $(t).parent().remove();
  num --;
  upload();
}

function upload() {
  let contentList = $('.m-dt').children();
  let i = num;
  contentList.map((index,item)=>{
  	$(item).find('.m-n').text(num - (--i));
  })
}