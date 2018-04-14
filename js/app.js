(function() {

  var data = {
    cats: [],
    current: {}
  };

  var octopus = {
    init: function() {
      data.cats.push(new cat('back-cat', 'image/back-cat.jpg'));
      data.cats.push(new cat('hug-cat', 'image/hug-cat.jpg'));
      data.cats.push(new cat('peeking-cat', 'image/peeking-cat.jpg'));
      data.cats.push(new cat('smiling tiger', 'image/smiling-tiger.jpg'));
      data.cats.push(new cat('Tassie', 'image/Tassie.jpg'));

      view.init();
    },
    getCats: function() {
      return data.cats;
    },
    setCurrentCat: function(cat) {
      data.current = cat;
    },
    getCurrentCat: function() {
      return data.current;
    }
  };

  var view = {
    init: function() {
      document.body.innerHTML = '';
      const ul = document.createElement('ul');
      const main = document.createElement('main');
      octopus.getCats().forEach(function(cat) {
        const li = document.createElement('li');
        li.textContent = cat.name;
        li.addEventListener('click', (function(eCopy) {
          return function() {
            eCopy.click();
            octopus.setCurrentCat(eCopy);
            view.render();
          };
        })(cat));
        ul.appendChild(li);
      });
      document.body.appendChild(ul).appendChild(main);
    },
    render: function() {
      const cat = octopus.getCurrentCat();
      let main = document.querySelector('main');
      main.innerHTML = '';
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = `${cat.name} : ${cat.clicks}`;
      const img = document.createElement('img');
      img.src = cat.url;
      img.alt = cat.name;
      const figure = document.createElement('figure');
      figure.appendChild(figcaption);
      figure.appendChild(img);
      main.appendChild(figure);
    }
  };

  octopus.init();
})();