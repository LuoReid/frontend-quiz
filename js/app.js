(function() {

  var model = {
    cats: [{
      name: 'back man',
      src: 'image/back-cat.jpg',
      clicks: 0
    }, {
      name: 'hug-cat',
      src: 'image/hug-cat.jpg',
      clicks: 0
    }, {
      name: 'peeking man',
      src: 'image/peeking-cat.jpg',
      clicks: 0
    }, {
      name: 'smiling tiger',
      src: 'image/smiling-tiger.jpg',
      clicks: 0
    }, {
      name: 'Tassie',
      src: 'image/Tassie.jpg',
      clicks: 0
    }],
    currentCat: null
  };

  var octopus = {
    init: function() {
      model.currentCat = model.cats[0];

      viewCatList.init();
      viewCat.init();
    },
    getCats: function() {
      return model.cats;
    },
    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },
    getCurrentCat: function() {
      return model.currentCat;
    },
    incrementCounter: function() {
      model.currentCat.clicks++;
      viewCat.render();
    }
  };

  var viewCat = {
    init: function() {
      this.catName = document.querySelector('.cat-name');
      this.catCount = document.querySelector('.cat-count');
      this.catImg = document.querySelector(".cat-img");

      this.catImg.addEventListener('click', function() {
        octopus.incrementCounter();
      });

      this.render();
    },
    render: function() {
      var currentCat = octopus.getCurrentCat();

      this.catName.textContent = currentCat.name;
      this.catCount.textContent = currentCat.clicks;
      this.catImg.src = currentCat.src;
    }
  };
  var viewCatList = {
    init: function() {
      this.catList = document.querySelector('.cat-list');

      this.render();
    },
    render: function() {
      this.catList.innerHTML = '';

      var elem;
      const cats = octopus.getCats();

      for (const cat of cats) {
        elem = document.createElement('li');
        elem.textContent = cat.name;

        elem.addEventListener('click', (function(catCopy) {
          return function() {
            octopus.setCurrentCat(catCopy);
            viewCat.render();
          };
        })(cat));

        this.catList.appendChild(elem);
      }

      //octopus.getCats()
      /* cats.forEach(function(cat) {
         elem = document.createElement('li');
         elem.textContent = cat.name;

         elem.addEventListener('click', (function(catCopy) {
           return function() {
             octopus.setCurrentCat(catCopy);
             viewCat.render();
           }
         })(cat));

         this.catList.appendChild(elem);
       });*/
    }
  };

  octopus.init();
})();