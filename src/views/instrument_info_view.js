const PubSub = require('../helpers/pub_sub.js')

const InstrumentInfoView = function (container) {
  this.container = container;
}

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-family', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentInfoView.prototype.render = function (instrumentFamily) {
  const infoHeader = document.createElement('h2');
  infoHeader.textContent = instrumentFamily.name;

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrumentFamily.description;

  const listHeader = document.createElement('h3');
  listHeader.textContent = "Instruments include:"

  const list = document.createElement('ul');

  instrumentFamily.instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  })


  this.container.innerHTML = '';

  this.container.appendChild(infoHeader);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(listHeader);
  this.container.appendChild(list);


};

module.exports = InstrumentInfoView;
