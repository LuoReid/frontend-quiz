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
    currentCat: null,
    showAdmin: true,
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
    },
    openAdmin: function() {
      model.showAdmin = true;
    },
    closeAdmin: function() {
      model.showAdmin = false;
    },
    isShowAdmin: function() {
      return model.showAdmin;
    }
  };

  var viewCat = {
    init: function() {
      this.catName = document.querySelector('.cat-name');
      this.catCount = document.querySelector('.cat-count');
      this.catImg = document.querySelector(".cat-img");

      this.inputName = document.querySelector('#input-name');
      this.inputSrc = document.querySelector('#input-src');
      this.inputClicks = document.querySelector('#input-clicks');

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

      this.inputName.value = currentCat.name;
      this.inputSrc.value = currentCat.src;
      this.inputClicks.value = currentCat.clicks;
    }
  };
  var viewCatList = {
    init: function() {
      this.catList = document.querySelector('.cat-list');
      this.adminSection = document.querySelector('#admin');
      this.buttonAdmin = document.querySelector('#btnOpen');
      this.formAdmin = document.querySelector('#formAdmin');

      this.buttonAdmin.addEventListener('click', function() {
        this.formAdmin = document.querySelector('#formAdmin');
        this.formAdmin.setAttribute("class", "");

        //viewCatList.render();
        viewCat.render();
      });

      this.buttonCancel = document.querySelector('#cancel');
      this.buttonCancel.addEventListener('click', function() {
        this.formAdmin = document.querySelector('#formAdmin');
        this.formAdmin.setAttribute("class", "hide");
      });

      this.buttonSave = document.querySelector('#save');
      this.buttonSave.addEventListener('click', function() {
        this.formAdmin = document.querySelector('#formAdmin');
        this.formAdmin.setAttribute("class", "hide");
        var cat = {};
        cat.name = document.querySelector('#input-name').value;
        cat.src = document.querySelector('#input-src').value;
        cat.clicks = document.querySelector('#input-clicks').value;
        octopus.setCurrentCat(cat);

        viewCat.render();
      });

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


      if (octopus.isShowAdmin) {
        this.adminSection.setAttribute("class", "");
      } else {
        this.adminSection.setAttribute("class", "hide");
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