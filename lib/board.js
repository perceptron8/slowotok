define(["underscore"], function(_) {
	var Board = function(N) {
		this.N = N;
	};
	
	Board.prototype._hasUp = function(i) { return i >= this.N; }
	Board.prototype._hasRight = function(i) { return i % this.N < this.N - 1 }
	Board.prototype._hasLeft = function(i) { return i % this.N > 0; }
	Board.prototype._hasDown = function(i) { return i < this.N * (this.N - 1); }
	
	Board.prototype._up = function(i) { return this._hasUp(i) ? i - this.N : Number.NaN; }
	Board.prototype._right = function(i) { return this._hasRight(i) ? i + 1 : Number.NaN; }
	Board.prototype._left = function(i) { return this._hasLeft(i) ? i - 1 : Number.NaN; }
	Board.prototype._down = function(i) { return this._hasDown(i) ? i + this.N : Number.NaN; }
	
	Board.prototype._neighbours = function(i) {
		var _neighbours = [
			this._left(this._up(i)), this._up(i), this._right(this._up(i)),
			this._left(i), this._right(i),
			this._left(this._down(i)), this._down(i), this._right(this._down(i))
		];
		return _neighbours.filter(Number.isFinite);
	};
	
	Board.prototype._search = function(array, callback) {
		var self = this;
		if (callback(array)) {
			var neighbours = self._neighbours(_.last(array));
			neighbours.forEach(function(neighbour) {
				if (!_.contains(array, neighbour)) {
					self._search(array.concat([neighbour]), callback);
				}
			});
		}
	};
	
	Board.prototype.search = function(callback) {
		var N2 = Math.pow(this.N, 2);
		for (var i = 0; i < N2; i++) {
			this._search([i], callback);
		}
	};
	
	return Board;
});
