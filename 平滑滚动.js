function getScrollOffsets(_w) {//获取页面的滚动位置
  _w = _w || window;
  //for all and IE9+
  if (_w.pageXOffset !== null) {
    return {
      x: _w.pageXOffset,
      y: _w.pageYOffset,
    };
  }
  //for IE678
  let _d = _w.document;
  if (document.compatMode === "CSS1Compat") {
    return { //for IE678
      x: _d.documentElement.scrollLeft,
      y: _d.documentElement.scrollTop,
    };
  }
  //for other mode
  return {
    x: _d.body.scrollLeft,
    y: _d.body.scrpllTop,
  };
}

function getViewPortSize(_w) {//获取页面的窗口大小
  _w = _w || window;
  //for all and IE9+
  if (_w.innerWidth !== null) {
    return {
      x: _w.innerWidth,
      y: _w.innerHeight,
    };
  }
  //for IE678
  let _d = _w.document;
  if (document.compatMode === "CSS1Compat") {
    return { //for IE678
      x: _d.documentElement.clientWidth,
      y: _d.documentElement.clientHeight,
    };
  }
  //for other mode
  return {
    x: _d.body.clientWidth,
    y: _d.body.clientHeight,
  };
}

/**
 * 平滑滚动（锚点等）
 * 使用方法： scrollPosition("itemId");
 * @param offsetY 偏移多少（比如顶部有固定定位的导航的距离）
 * @param _obj
 */
export function scrollPosition(_obj, offsetY = 0) {//参数_obj可以是任何页面上存在的元素的id，或者是指定元素本身
  let targetX, targetY;
  if (!_obj) { //如果不指定锚点元素，就跳到页面顶端0，0位置
    targetX = 0;
    targetY = 0;
  } else {
    if (typeof (_obj) === "string") {
      _obj = document.getElementById(_obj);
    }
    targetX = _obj.getBoundingClientRect().left + getScrollOffsets().x;
    targetY = _obj.getBoundingClientRect().top + getScrollOffsets().y - offsetY;
  }

  //如果目标元素的位置在最后一屏，那就指定目标位置为页面底部
  //如果目标元素的位置为负数，就指定目标位置为页面顶部
  const maxTargetX = document.body.scrollWidth - getViewPortSize().x;
  const maxTargetY = document.body.scrollHeight - getViewPortSize().y;
  if (targetX >= maxTargetX) {
    targetX = maxTargetX
  }
  if (targetX < 0) {
    targetX = 0
  }
  if (targetY >= maxTargetY) {
    targetY = maxTargetY
  }
  if (targetY < 0) {
    targetY = 0
  }
  let tempTimer = setInterval(() => {
    const currentY = getScrollOffsets().y;
    const currentX = getScrollOffsets().x;
    //跳转位置的缓冲公式
    let tempTargetY = currentY - (currentY - targetY) / 10;
    let tempTargetX = currentX - (currentX - targetX) / 10;
    //由于缓冲公式会生成小数，而scrollTo函数会省略小数点后面的数字，所以要对跳转的坐标做一些微调
    if (Math.abs(tempTargetY - currentY) < 1) {
      tempTargetY - currentY > 0 ? tempTargetY++ : tempTargetY--
    }
    if (Math.abs(tempTargetX - currentX) < 1) {
      tempTargetX - currentX > 0 ? tempTargetX++ : tempTargetX--
    }
    //页面跳转
    window.scrollTo(tempTargetX, tempTargetY);
    //到达指定位置后清除一下Interval
    if (Math.abs(getScrollOffsets().y - targetY) <= 2 && Math.abs(getScrollOffsets().x - targetX) <= 2) {
      clearInterval(tempTimer);
      window.scrollTo(targetX, targetY);
    }
  }, 10);
}