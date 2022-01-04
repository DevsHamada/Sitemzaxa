var mots = ['ÉTÉ', 'BALLON','HEURE','BLANC','COUP'];
var images = [    
				['A.jpg','B.jpg','C.jpg','ete3.jpg'],    
				['J.jpg','K.jpg','L.jpg','M.jpg'],    
				['N.jpeg','O.jpg','P.jpg','Q.jpg'],    
				['mariage.jpg','docteur.jpg','neige.jpg','voiture.jpg'],    
				['E.jpg','F.jpg','H.jpg','I.jpg'],];
var vartres = [    ['A', 'Z', 'T', 'É', 'R', 'H', 'S', 'É', 'B', 'U'],    
				   ['A', 'L', 'T', 'L', 'O', 'H', 'S', 'É', 'B', 'N'],    
				   ['R', 'L', 'T', 'E', 'O', 'H', 'S', 'E', 'B', 'U'],    
				   ['A', 'L', 'T', 'L', 'O', 'B', 'S', 'C', 'B', 'N'],    
				   ['U', 'L', '0', 'L', 'O', 'H', 'P', 'É', 'B', 'C'],];

 	initialiseNiveau(0);

function initialiseNiveau(x)
{    
	//Renvoie un objet de type tableau de tous les éléments enfants qui ont tous les noms de classe donnés.
	var img = document.getElementsByClassName("imageJeu");   
	for(var i=0; i<img.length; i++)    
		{   var chemin = "images/";        
			var image = chemin+images[x][i];   
			img[i].setAttribute('src',image);    
		}    				   				 

	// deuxième section
	// choix des vartres

	var cases = document.getElementsByClassName("choix");    
	for(var i=0; i<cases.length; i++)    
		{        cases[i].textContent = vartres[x][i];        
			cases[i].setAttribute('ok','1');    
		}

    // vider les cases et ajouter le nombre de case correspondant à chaque mot
    var divvartres = document.getElementsByClassName("divLettreReponse");    

    			    			divvartres.innerHTML ="";
    for(var i=0; i<mots[x].length; i++)    
    	{  
    		divvartres.innerHTML +='<a class="case" ok="0"></a>';    
    	}

 // troisième section
    nbrvartreSaisi = 0;
      var  arrayLigne  = document.getElementsByClassName("tableLettre");    

   let choix = document.getElementsByClassName("choix");    
   var choisi = document.getElementsByClassName("case");
          var arrayTd = document.getElementsByClassName("tableLettre2");
 console.log(arrayLigne[3]);
 console.log(choix[3]);
console.log(arrayTd[3]);
 console.log(choix[3]);

    for(var i=0; i<10; i++)    
    	{        choix[i].onclick = function()        
    		{         console.log(choix[i].getAttribute('ok'));

    			if(choix[i].getAttribute('ok') === '1')            
    			{                pos = -1; index.js              
  			for(var j=0; j<choisi.length; j++)              
  			{                   
  				if(choisi[j].getAttribute('ok') === '0')                    
  					{  pos = j;                       
  						break;                    
  						}                }                
  						if(pos !== -1)                
  						{                    
  							choisi[pos].textContent = choix[i].textContent;                    
  							choisi[pos].setAttribute('ok','1');                    
  							choix[i].setAttribute('ok','0');                    
  							choix[i].textContent = "";                    
  							nbrvartreSaisi++;                   
  							if(nbrvartreSaisi === mots[niveau].length)                   
  							 {  verifierMot();  }                
  						}            
  				}        
  			}    
  		}  
  	// dernière section
    for(var i=0; i<choisi.length; i++)    
    	{        
    		choisi[i].onclick = function()       
    		{            
    			if(choisi[i].getAttribute('ok') === '1')            
    				{ pos = -1;                for(var j=0; j<choix.length; j++)               
    					 {                    if(choix[j].getAttribute('ok') === '0')                  
    					   {                        pos = j;                        
    					   	break;                
    					       }                
    					   }               
    					    if(pos !== -1)               
    					    	{  choix[pos].textContent = choisi[i].textContent;                    
    					    		choix[pos].setAttribute('ok','1');                    
    					    		choisi[i].setAttribute('ok','0');                    
    					    		choisi[i].textContent = "";                    
    					    		nbrvartreSaisi--;                
    					    	}            
    				}        
    		}  
    	}
 }

  var niveau = -1;
 function nextlevel()
 {    
 	niveau++;    
 	if(niveau > 4)    
 	{        
 		niveau = 0;    
 	}    
 	initialiseNiveau(niveau);
 }
