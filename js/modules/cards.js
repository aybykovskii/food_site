module.exports = function cards() {
  //Menu Csrds
  class MenuItem {
    constructor(
      src,
      alt,
      title,
      descr,
      totalCoast,
      parentSelector,
      ...classes
    ) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.totalCoast = totalCoast;
      this.classes = classes;
      this.transfer = 27;
      this.changeToUAH();
      this.parent = document.querySelector(parentSelector);
    }
    changeToUAH() {
      this.totalCoast *= this.transfer;
    }
    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.totalCoast}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }
  }
  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} status: ${status}`);
    }

    return await res.json();
  };

  // getResource('http://localhost:3000/menu')
  //     .then(data => {
  //         data.forEach(({img, altimg, title, descr, price}) => {
  //             new MenuItem(img, altimg, title, descr, price, '.menu .container').render();
  //         });
  //     });

  //getting data from .json

  axios.get("http://localhost:3000/menu").then((object) => {
    object.data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      new MenuItem(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });

  //getting data from database
  //   axios.get("http://dist/server.php").then(({ data: res }) => {
  //     if (res.status === 200) {
  //       res.data.forEach(({ img, title, descr, price }) => {
  //         new MenuItem(img, "", title, descr, price, ".menu .container").render();
  //       });
  //     }
  //   });

};