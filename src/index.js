(app => {
  const elm = document.createElement('p');
  elm.innerText = 'Vue Project';
  app.appendChild(elm);
})(document.querySelector('#app'));