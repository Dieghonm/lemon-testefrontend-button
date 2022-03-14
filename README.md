Lemon - Teste Fronteend - Button

Projeto feito em React utilizando as bibliotecas
styled-components
fonts.googleapis.com/icon
RTL



Criação de componente Button de forma modular seguindo dois layout em dois padrões de cores
O primário em tons de verde e o secundário em tons de amarelo
Os botões contem um elemento de texto e podem receber um ícone
Seu tamanho minimo e fixo em 311px por 56px, não tendo máximo ele expande para preencher qualquer container em que esteja.


como instalar
clone o repositorio com a chave ssh - git@github.com:Dieghonm/lemon-testefrontend-button.git
isntale as dependencias com - npm install

publicado em - https://dieghonm.github.io/lemon-testefrontend-button/
para rodar na propria maquina va ate a pasta do projeto no terminal e de o comando - npm run
para rodar os restes - npm test

como funciona

importe o botão para a pagina e atribua a ele as propriedadaes desejadas

text={'Primary Button'} - tesxto a ser exibido no botão
dis={false} - indica se o botão estara habilitado ( se nao for preenchido o botão se mantem habilitado)
icon={'check'} - passe o nome do icone a ser mostrado no botão (fonts.googleapis.com/icon)
testid={'primaryButtonIcon'} - nome a ser buscado pelos testes
testidIcon={'check'} - nome do icone a ser buscado pelos testes
variant={'Secundary'} - quando preenchido com a string 'Secundary' o botão vira na cor amarela
............ - função a ser executada pelo botão


creditos 
Desenvolvido por Diegho Neves de Moraes, seguindo figma disponibilizado pela Lemon Energia

npm install --save-dev @testing-library/react 
npm i --save-dev @testing-library/jest-dom