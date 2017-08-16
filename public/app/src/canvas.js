function Canvas(element) {
  this.element = element;
  this.height = 100;
  this.width = 200;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  this.xAxis = [];
  this.yAxis = [];
}

Canvas.prototype.isDrawing = function () {
  return this._drawing
};

Canvas.prototype.startDrawing = function () {
  this._drawing = true;
};

Canvas.prototype.endDrawing = function () {
  this._drawing = false;
};

Canvas.prototype.createDot = function (x, y) {
  this.xAxis.push(x);
  this.yAxis.push(y);
};
// Canvas.prototype.drawRect = function() {
//   this.ctx.fillRect(10, 10, 100, 200)
// }
