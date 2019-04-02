/**
 * Created by Administrator on 2018/4/27.
 */
window.onload = function () {

  function show(A, B) {
    var btn = document.getElementById(A),
      table = document.getElementById(B);

    btn.onclick = function () {

      if (this.style.backgroundImage === 'url("images/drop_down.png")') {
        this.style.backgroundImage = 'url(images/pup_down.png)';
        table.style.display = 'block';

      } else {
        this.style.backgroundImage = 'url(images/drop_down.png)';
        table.style.display = 'none';
      }

    }
  }

  show('btn1', 'table1');
  show('btn2', 'table2');
  // show('btn3');
  show('btn4', 'detail1');
  show('btn5', 'detail2');
  show('facilityInfoBtn_1', 'facilityInfoTable_1');
  show('facilityInfoBtn_2', 'facilityInfoTable_2');


  // 数据切换
  var switchBtn = document.getElementById('cutover');
  var switchConts = document.getElementById('switchConts');
  var switchItem = switchConts.children;
  var currentStatus = 0;
  switchBtn.onclick = function () {

    if (this.style.backgroundImage === 'url("images/icon_6.png")') {
      this.style.backgroundImage = 'url(images/menu.png)';
    } else {
      this.style.backgroundImage = 'url(images/icon_6.png)';
    }

    if (currentStatus === 0) {
      currentStatus = 1;
      switchItem[0].style.display = 'none';
      switchItem[1].style.display = 'block';
    } else if (currentStatus === 1) {
      currentStatus = 0;
      switchItem[0].style.display = 'block';
      switchItem[1].style.display = 'none';
    }

  }


};


