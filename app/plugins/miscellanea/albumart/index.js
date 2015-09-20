var libQ = require('kew');
var libFast = require('fast.js');
var fs=require('fs-extra');
var config= new (require('v-conf'))();
var exec = require('child_process').exec;

// Define the AlbumArt class
module.exports = AlbumArt;

function AlbumArt(context) {
	var self = this;

	config.loadFile(__dirname+'/config.json');

	// Save a reference to the parent commandRouter
	self.context=context;
	self.commandRouter = self.context.coreCommand;

}

AlbumArt.prototype.onVolumioStart = function() {
	var self = this;

	//Starting server
	exec('/usr/local/bin/node '+__dirname+'/serverStartup.js '+config.get('port')+' '+config.get('folder'),
		function (error, stdout, stderr) {

			if (error !== null) {
				console.log('Got an error: '+error);
			}
			else console.log('Album art server started up');

		});
}

AlbumArt.prototype.onStart = function() {
	var self = this;
	//Perform startup tasks here
}

AlbumArt.prototype.onStop = function() {
	var self = this;
	//Perform startup tasks here
}

AlbumArt.prototype.onRestart = function() {
	var self = this;
	//Perform startup tasks here
}

AlbumArt.prototype.onInstall = function()
{
	var self = this;
	//Perform your installation tasks here
}

AlbumArt.prototype.onUninstall = function()
{
	var self = this;
	//Perform your installation tasks here
}