select
    *
from
    cidades;

insert into
    prefeitos (nome, cidade_id)
values
    ('Rodrigo Neves', 3),
    ('Raquel Lyra', 4),
    ('Zenaldo Coutinho', null);

insert into
    prefeitos (nome, cidade_id)
values
    ('Rafael Greca', null)