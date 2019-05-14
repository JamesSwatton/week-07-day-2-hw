const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:all-instrument-families', this.data)

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishInstrumentDetail(selectedIndex);
  })
};

InstrumentFamilies.prototype.publishInstrumentDetail = function (instrumentIndex) {
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('InstrumentFamilies:selected-instrument-family', selectedInstrument)
};

module.exports = InstrumentFamilies;
