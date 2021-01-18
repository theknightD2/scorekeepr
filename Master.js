//Thanks to Geeks For Geeks for this time saver!
function include(file) { 

var script = document.createElement('script'); 
script.src = file; 
script.type = 'text/javascript'; 
script.defer = true; 

document.getElementsByTagName('Body').item(0).appendChild(script); 

} 

/* Include Many js files */
include('Js Folder/ Core.js'); 
include('Js Folder/ Changelog.js');
include('Js Folder/ node.js');
include('Js Folder/ EasterEgg.js');
include('Js Folder/ Modal.js');