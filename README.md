Versões padrões
  pg: ^7.9.0,
  pg-hstore: "^2.3.2",
  restify: ^8.2.0,
  sequelize: ^5.2.9".
  
Comandos utilizados:
Instalação -

npm init
npm install restify — save
npm install — save sequelize
npm install — save pg pg-hstore


Serviço -

Node{
sudo apt-get update
sudo apt-get install build-essential libssl-dev
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
bash install_nvm.sh
nvm ls-remote
nvm install LATEST_VERSION
nvm use LATEST_VERSION
node -v
}

Postgresql{
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
create role USER_NAME;
CREATE ROLE
postgres= alter role USER_NAME with superuser login createdb;
''          ''          stop
''          ''          status
}