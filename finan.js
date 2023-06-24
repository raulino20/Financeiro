function Financeiro(){

let Soma = parseFloat(prompt("Adicione fundos a sua conta !"));
if (Soma ===""){
    Soma++
}

let Money = ""
do{
   
     Money = prompt("olá cliente, você tem : " + Soma +"R$ , deseja : " +
   " \n  1  (Adicionar)" +
   " \n  2  (Remover)" +
   " \n  3  (Sair) ");

   switch(Money){

     case "1" :
        const Mais = parseFloat(prompt("quanto quer adicionar ?"));
        Soma += Mais;
        alert("você agora tem : " + Soma +"R$. ");


break;

    case "2" :
        const Menos = parseFloat(prompt("quanto quer Subtrair ?"));
    
        if(Soma < Menos){
           
            alert('Você não tem dinheiro suficiente para ser retirado !');
            alert("Você continua com : " + Soma );

        }else{
             Soma -= Menos;
            alert("você agora tem : " + Soma + "R$");
    }

break;

    case "3" :
         alert("Obrigado cliente.");
         alert("o programa será fechado!");

break;

    default :
         alert(" Opção Invalida ! ");

    }


} while ( Money !== "3" )
}

