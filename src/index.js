(function(app) {
  console.log(app);
  var elm = document.createElement('p');
  elm.innerText = 'Vue Project';
  app.appendChild(elm);
})(document.querySelector('#app'));