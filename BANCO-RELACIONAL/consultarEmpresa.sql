select e.nome, c.nome
from empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.estado_id
and c.id = eu.estado_id
and sede
