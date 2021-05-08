drop database if exists nights_in_users;
create database nights_in_users;
use mysql;
ALTER USER 'root'@‘localhost’ IDENTIFIED WITH mysql_native_password BY 'rootqwer';
flush privileges;