create table if not exists cidades (
    id INT UNSIGNED not null AUTO_INCREMENT,
    nome varchar(255) not null,
    estado_id int UNSIGNED not null,
    area decimal (10,2),
    primary key (id),
    foreign key (estado_id) references estados (id)
);

drop table if exists nome_tabela;