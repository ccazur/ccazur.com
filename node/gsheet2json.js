const gsjson  = require('google-spreadsheet-to-json');
const fs = require('fs');
const hashFiles = require('hash-files');


let versions = require('../assets/locales/versions.json');
const gsheetID_fr = '13gsTHvcOvwIT0EQzhS71wP6fUlm6gYghB9At555JUjc';
// const gsheetID_en = '1kF3fKJ1sfkqGv4yZ07V1jLgO_cjWHaF66vfrUO3U9IM';


getContent = function(gsheetID, filename)
{

	gsjson({
	    spreadsheetId: gsheetID,
	    allWorksheets: true,
	    vertical: true
	})
	.then(function(result) {
	    fs.writeFile('../assets/locales/'+filename+'.json', JSON.stringify(result), 'utf8', function()
    	{
    		console.log('Google Spreadsheet imported. ID: '+gsheetID);
    		console.log('File : '+filename);
    		updateVersion();
    	});  
	})
	.catch(function(err) {
	    console.log(err.message);
	    console.log(err.stack);
	});
};

updateVersion = function()
{
	hashFiles(
	{
		files : ['../assets/locales/i18n.json']
	},
	function(error, hash)
	{
		versions.texts = hash;

	    fs.writeFile('../assets/locales/versions.json', JSON.stringify(versions), 'utf8', function()
    	{
    		console.log('Texts version updated. HASH: '+hash);
    	});

	});
};

getContent(gsheetID_fr, 'i18n');
// getContent(gsheetID_en, 'en');
