$(document).on('ready', function(){
  var formulario=se('#envio > form');
	formulario.addEventListener('submit', function(ev){
            ev.preventDefault();
            cargaArchivo();
        });
});

var todo=new Array();

function cargaArchivo(){
	var input=se('#envio > form > span > input[type="file"]'), i = 0, len = input.files.length,file;
	for(; i<len; i++){
		file=input.files[i];
		todo.push({'file': file});
	}
	envios();
}

function envios(){
	if(window.FormData){
        var formdata = new FormData();
    }
    if (todo.length > 0){// va siminuyendo la cantidad de datos
        var proceso = todo.shift(), f=proceso.file;
        formdata.append('upload', f);
        envioDatos(formdata);
    }
}

function prigress(progreso){
	var p=$('#progressbar > div');
	p.css({'width': progreso+'%'}).html(progreso+'%');
}

var oReq;
function envioDatos(archivos){
	oReq=new XMLHttpRequest()
    var all=new Array(), a;
    oReq.upload.addEventListener('progress',function(e){
        var prog=parseInt(Math.round((e.loaded / e.total)*100));
        prigress(prog);
        
    }, false);
    oReq.open('POST', 'uploads/subirfoto.php', true);
    oReq.onreadystatechange = function(){ if(this.readyState===4){
        envios();
    }
    }
    oReq.send(archivos);
}

function se(a){
	return document.querySelector(a);
}
