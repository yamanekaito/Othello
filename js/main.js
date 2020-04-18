'use strict'
{
  let lines = [];
  document.querySelectorAll('tr').forEach((p,index) => {
    p.classList.add(`line${index}`);
    p = [];
    lines.push(p);
  })  
  console.log(lines);
  
  const line1 = document.querySelector('line1');

  document.getElementByClassName('box').forEach((p,index) => {
    p = 4;
    line1.push(p);
  })

  console.log(line1);
  
  // cosnt line1 = document.querySelector('line1')
  
  // document.querySelectorAll('line1' > 'th').forEach((p.index) => {
    
  // })

  // p.querySelectorAll('th').forEach((x,number) => {
  //   x = 'element' + number;
  //   p.push(x);
  // })
}