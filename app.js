function animateValue(obj, start, end, duration,text) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    
  }
  
  let obj1 = document.getElementById("value");
  setInterval(() => {
    animateValue(obj1, 0, 7, 1000);
  }, 5000);
  //animateValue(obj1, 0, 100, 1000);

  let obj2 = document.getElementById("valuee");
  setInterval(() => {
    animateValue(obj2, 0, 7, 1000);
  }, 5000);
  //animateValue(obj2, 0, 100, 1000);