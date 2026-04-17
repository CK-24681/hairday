#💇‍♂️ Hair Day

📖 Sobre o Projeto

O Hair Day é uma aplicação web desenvolvida para o agendamento de cortes de cabelo. A interface permite que os usuários marquem novos atendimentos e consultem a lista de clientes previstos para o dia, divididos por turnos.

✨ Funcionalidades

Criação de agendamentos selecionando a data, o horário disponível e informando o nome do cliente.

Organização dos horários em três períodos do dia: Manhã (09h-12h), Tarde (13h-18h) e Noite (19h-21h).

Visualização dinâmica dos agendamentos na lateral da tela de acordo com o dia escolhido.

Opção de cancelar marcações existentes diretamente pela interface.

🛠️ Tecnologias Utilizadas

HTML & CSS: Estruturação semântica e estilização da interface.

JavaScript: Implementação da lógica de interação, validação de horários e manipulação do DOM.

Day.js: Biblioteca utilizada para a formatação e validação das datas no agendamento.

JSON Server: Utilizado para simular uma API REST de backend, salvando os dados dos agendamentos no arquivo server.json.

Webpack & Babel: Ferramentas configuradas para o empacotamento (bundling) do projeto, compilação de assets e compatibilidade do código JavaScript.

🚀 Como Executar o Projeto

Para rodar este projeto na sua máquina local, é necessário ter o Node.js instalado.

Clone este repositório e acesse a pasta do projeto no seu terminal:

git clone https://github.com/CK-24681/hairday
cd hairday


Instale todas as dependências do projeto executando:

npm install


Inicie o servidor da API simulada (JSON Server), que rodará na porta 3333:

npm run server


Em um outro terminal, inicie o servidor de desenvolvimento do frontend (Webpack), que rodará na porta 3000:

npm run dev


(Opcional) Caso queira gerar a versão otimizada de produção (build), você pode utilizar o comando:

npm run build


👨‍💻 Autor

Desenvolvido por Charles Kauã Santana Barbosa.
