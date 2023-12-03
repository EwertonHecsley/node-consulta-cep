# Sistema de Consulta de CEPs


## Descrição


Este projeto consiste em um sistema multiplataforma que permite aos usuários logados realizar consultas de CEPs com base em um raio de distância específico. Além disso, o sistema possui uma página de histórico para visualização das consultas realizadas.

## Funcionalidades Principais


- **Autenticação de Usuário:**
Os usuários podem se autenticar para acessar o sistema.
Após o login, eles terão acesso à funcionalidade de consulta de CEPs.


- **Consulta de CEPs por Raio de KM:**
Após o login, o usuário pode inserir um CEP e um valor em km.
O sistema retorna todos os CEPs dentro do raio especificado em uma tabela.


- **Página de Histórico de Consultas:**
O sistema exibe um histórico das consultas realizadas por cada usuário.
A página de histórico apresenta as consultas anteriores em forma de lista ou tabela, incluindo detalhes como data e hora da consulta, CEP e raio especificados.

## Organização e Estrutura do Código


- Estrutura de pastas e arquivos bem definida, seguindo boas práticas de desenvolvimento.

- Nomenclatura significativa para variáveis, funções e arquivos.

- Utilização do padrão MSC (Model, Service, Controller).


## Exemplos de uso

- **Cadastrar Usuário**

```POST: /usuario```


```
{
    "nome":"usuario nome",
    "email":"email@email.com",
    "senha":"senha123"
}
```
**Resposta requisição**

```
{
    "id": 6,
    "nome": "usuario nome",
    "email": "emailk@email.com"
}
```
- **Login de Usuário**

```POST /login```

```
{
    "email":"emailk@email.com",
    "senha":"senha123"
}
```
**Resposta requisição**

```
{
    "mensagem": "Usuário logado com sucesso.",
    "dados_usuario": {
        "id": 6,
        "nome": "usuario nome",
        "email": "emailk@email.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzAxNTY1MjcxfQ._mbeZby5a48TjCJLcKkaUOjvG2Oq7DqQx-oSE2vA_rg"
}
```
- **Cadastrar Localização**

*A requisição devera ser feita com parâmentro query, passando o número do cep*

```POST /http://localhost:3000/localizacao?cep=58700070```

**Resposta requisição**

```
{
    "id": 6,
    "cep": "58700070",
    "estado": "PB",
    "cidade": "Patos",
    "bairro": "Centro",
    "rua": "Rua Doutor Pedro Firmino",
    "lat": "-7.0260162",
    "long": "-37.2767076",
    "usuario_id": 1,
    "data_criacao": "2023-12-03T01:05:12.611Z",
    "data_atualizacao": "2023-12-03T01:05:12.611Z"
}
```

-**Buscar localização**

*A requisição devera ser feita com parâmentro query, passando o número do cep, o estado do cep e o raio de busca. Caso não seja passado nenhuma query, todos os endereços seram listados*

```GET /http://localhost:3000/localizacao?cep=58701403&estado=paraiba&raio=10```

**Resposta requisição**

```
[
    {
        "id": 4,
        "cep": "58700004",
        "estado": "PB",
        "cidade": "Patos",
        "bairro": "Centro",
        "rua": "Avenida Solon de Lucena",
        "lat": "31.9624309",
        "long": "34.8947374",
        "usuario_id": 1,
        "data_criacao": "2023-11-30T02:17:09.194Z",
        "data_atualizacao": "2023-11-30T02:17:09.194Z"
    }
]
```

-**Listar histórico de busca**

*Será listado apenas o histórico do usuário que está logado*

```GET /historico```

**Resposta requisição**

```
[
    {
        "id": 2,
        "usuario_id": 3,
        "data_consulta": "02/12/2023",
        "hora_consulta": "21:14:31",
        "cep": "58700030",
        "raio_especificado": "50"
    },
    {
        "id": 3,
        "usuario_id": 3,
        "data_consulta": "02/12/2023",
        "hora_consulta": "21:34:41",
        "cep": "58701403",
        "raio_especificado": "99"
    },
    {
        "id": 4,
        "usuario_id": 3,
        "data_consulta": "02/12/2023",
        "hora_consulta": "22:07:48",
        "cep": "58701403",
        "raio_especificado": "99"
    },
    {
        "id": 5,
        "usuario_id": 3,
        "data_consulta": "02/12/2023",
        "hora_consulta": "22:08:03",
        "cep": "58701403",
        "raio_especificado": "10"
    }
]
```



