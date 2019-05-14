const PubSub = require('../helpers/pub_sub.js')

const InstrumentInfoView = function (container) {
  this.container = container;
}

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-family' (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentInfoView.prototype.render = function (instrumentFamily) {
  const infoHeader = document.createElement('h2');
  infoHeader.textContent = instrumentFamily.name;

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrumentFamily.description;

  this.container.innerHTML = '';

  this.container.appendChild(infoHeader);
  this.container.appendChild(infoParagraph);

};

module.exports = InstrumentInfoView;
