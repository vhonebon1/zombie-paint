function Canvas(element) {
  this.element = element;
  this.height = this.element.height;
  this.width = this.element.width;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  this.xAxis = [];
  this.yAxis = [];
};

Canvas.prototype.isDrawing = function () {
  return this._drawing
};

Canvas.prototype.startDrawing = function () {
  this._drawing = true;
};

Canvas.prototype.endDrawing = function () {
  this._drawing = false;
  this.ctx.beginPath();
};

Canvas.prototype.addCoordinates = function (x, y) {
  this.xAxis.push(x);
  this.yAxis.push(y);
};

Canvas.prototype.createDot = function (e) {
  this.ctx.beginPath();
  this.ctx.arc(e.clientX, e.clientY, 10, 0*Math.PI, Math.PI*2);
  this.ctx.fill();
};

Canvas.prototype.drawLine = function (e) {
  this.ctx.lineTo(e.clientX, e.clientY);
  this.ctx.stroke();
  this.ctx.beginPath();
  this.ctx.moveTo(e.clientX, e.clientY);
};
