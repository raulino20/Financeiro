

// COLOCAR CÓDIGO DENTRO DO "DO{}"

function Interactive(){
Soma = 0
do{
 Escolha = window.prompt("escolha uma opção:\n opção :  A   \n opcão :  B   \n opção :  C  \n opção :  D   \n opção:  E (ENCERRAMENTO !) " )


    switch(Escolha){
    case "A":
        alert("voce escolheu a opção : " + Escolha)
        Soma++
        alert("vezes interagidas :" + Soma)
    
break
    case "B":
       alert("voce escolheu a opção : " + Escolha)
       Soma++
       alert("vezes interagidas :" + Soma)
    
break
    
    case "C":
       alert("voce escolheu a opção : " + Escolha)
       Soma++
       alert("vezes interagidas :" + Soma)

break
    case "D":
      alert("voce escolheu a opção : " + Escolha)
      Soma++
      alert("vezes interagidas :" + Soma)
break             
    
    case "E":
      alert("voce escolheu a opção : " + Escolha)
      Soma++
      alert("vezes interagidas :" + Soma)
break
     
    default :
    alert("Opção indisponivel !")
    
    } 
  


}while(Escolha != "E"){
    alert("fechando programa, flwss") 
    alert("Numero de interações : " + Soma )
    }
}