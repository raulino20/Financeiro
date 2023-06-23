

// COLOCAR CÓDIGO DENTRO DO "DO{}"

function Interactive(){
Soma = 0
do{
 Escolha = window.prompt("escolha uma opção:\n opção :  A   \n opcão :  B   \n opção :  C  \n opção :  D   \n opção:  E (ENCERRAMENTO !) " )


   alert("voce escolheu a opção : " + Escolha)
    Soma++
    alert("vezes interagidas :" + Soma)

}while(Escolha != "E"){
    alert("fechando programa, flwss") 
    alert("Numero de interações : " + Soma )
    }
}