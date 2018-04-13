(function() {

  var data = {
    cats: []
  };

  var octopus = {
    init: function() {

    }
  };

  var view = {
    init: function() {

    },
    render: function() {

    }
  };

  octopus.init();
  const cats = [];
  cats.push(new cat('back-cat', 'image/back-cat.jpg'));
  cats.push(new cat('hug-cat', 'image/hug-cat.jpg'));
  cats.push(new cat('peeking-cat', 'image/peeking-cat.jpg'));

  document.body.innerHTML = '';
  const ul = document.createElement('ul');
  const main = document.createElement('main');
  console.log(cats);
  cats.forEach(function(e, i, a) {
    const li = document.createElement('li');
    console.log(li);
    console.log(e.name);
    li.textContent = e.name;
    li.addEventListener('click', (function(eCopy) {
      return function() {
        eCopy.click();
        eCopy.show(main);
      };
    })(e));

    ul.appendChild(li);
  });
  document.body.appendChild(ul).appendChild(main);
})();