'use strict'
{

  var fig = [];
  for (let i = 0; i < 8 ; i ++ ) {
    fig[i] = [];
  }

  fig[4][4] = '○';
  fig[6][2] = '●';

  for (let row = 0;row < 8; row ++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 8 ; col ++ ) {
      const td = document.createElement('td');
      td.textContent = fig[col][row];
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }
  

  var turn = true;

}