
/* global GameCtrl */

(function(){
'use strict';

GameCtrl.Preloader = function () {
	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

GameCtrl.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar		
		this.background = this.add.sprite(this.game.width / 2 - 250, this.game.height / 2 - 70, 'preloaderBackground');
		this.preloadBar = this.add.sprite(this.game.width / 2 - 250, this.game.height / 2 - 70, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//this.load.tilemap('main', 'assets/demo-mariano.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('main', 'assets/l1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('kenney32x32', 'assets/images/tiles_spritesheet.png');
        
        this.load.image('background', 'assets/images/bg.jpg');

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {
		this.game.state.start('Arena');
	}

};

})();