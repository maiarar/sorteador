# Sorteador

## O que esse repositório possui
- Apresentação usada para a rifa dos doguinhos realizada no dia 17/06/2020
- Código em JS com a função usada para o sorteio

## Pré-requisitos para usar esse projeto
Ter o arquivo `sorteador.js` na sua máquina.

## Como usar

### Em um terminal linux
Para seguir esse passo-a-passo abaixo, é preciso ter o [node](https://nodejs.org/en/) em sua máquina.
- Navegue até a pasta do projeto
- Execute os comandos `node sorteador.js $min $max`, onde `$min` é o número **mínimo** do range e `$max` é o número **máximo** do range 
- Veja o número sorteado aparecer

### Em um navegador 
- Abra o [console](https://developers.google.com/web/tools/chrome-devtools/console?hl=pt-br) de seu navegador (no Chrome, isso é feito pelo atalho F12)
- Certifique-se que a aba chamada *console* está aberta
- Crie uma função com o código do arquivo `sorteador.js` **a partir da 6ª linha**
  - Vai ficar deste jeito:
   ```
   function sorteio(minimo, maximo){
      minimo = Math.ceil(minimo);
      maximo = Math.floor(maximo);

      let resultado = Math.floor(
          Math.random() * (maximo - minimo + 1)) 
          + minimo;

      console.log(resultado?resultado:"passe os números mínimo e máximo");
   }
   ```
- Invoque a função (neste mesmo local) através do comando `sorteio(%$min, $max)`, onde `$min` é o número **mínimo** do range e `$max` é o número **máximo** do range 
- Veja o número sorteado aparecer

## Feito por:
[OVELHA Campinas](http://instagram.com/ovelhacps)
