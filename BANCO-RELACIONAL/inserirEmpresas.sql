insert into
    empresa (nome, cnpj)
values
    ('Bradesco', 1111111111111),
    ('Vale', 222222222222222),
    ('Cielo', 33333333333333);

alter table
    empresa
modify
    cnpj varchar(30);

--alterrar tabela
desc empresa;

--descrever tabela
insert into
    empresas_unidades (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);