'use strict'
{
  var turn = true;


  var fig = [];
  for (let i = 0; i < 8 ; i ++ ) {
    fig[i] = [];
  }

  fig

  for (let row = 0;row < 8; row ++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 8 ; col ++ ) {
      const td = document.createElement('td');
      td.textContent = fig[col][row];
      // 以下関数にしたい

      td.addEventListener('click',() => {
        if (turn === true) {
          td.textContent = '●';
          turn = false;
        }
      })
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }

  if (turn === false ) {

  }
 
  // for (let row = 0;row < 8; row ++) {
  //   for (let col = 0; col < 8 ; col ++ ) {
  //     const a = fig[col][row]
  //     a.addEventListener('click',() => {
  //       if (turn === true) {
  //         fig[col][row].textContent = '●';
  //         turn = false;
  //       }
  //     })
  //   }
  // }
  
  


}