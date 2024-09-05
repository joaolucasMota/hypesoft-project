# Docker Setup

Este projeto contém a dinâmica de **build** e **execução** dos ambientes de **desenvolvimento** e **produção** usando **Docker** e **Docker Compose**.

## Requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Variáveis de Ambiente

A aplicação requer as seguintes variáveis de ambiente:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Essas variáveis já estão configuradas no `docker-compose.yml`.

## Como Buildar e Executar

### 1. Build e Execução em Desenvolvimento

Para rodar a aplicação em modo de desenvolvimento (com hot-reload):

```bash
docker-compose up app
```

Isso vai:

- Buildar a imagem de desenvolvimento a partir do Dockerfile.dev.
- Rodar a aplicação na porta 3000.

Se quiser rodar o contêiner em segundo plano (detached):

```bash
docker-compose up -d app
```

### 2. Build e Execução em Produção

Para rodar a aplicação em modo de produção (otimizado e sem hot-reload):

```bash
docker-compose up app-prod
```

Isso vai:

- Buildar a imagem de produção a partir do Dockerfile.prod.
- Rodar a aplicação na porta 3000.
- Se quiser rodar o contêiner em segundo plano (detached):

Para rodar detached, mesma coisa:

```bash
docker-compose up -d app-prod
```

### 3. Parar a Aplicação

Para parar a execução dos contêineres:

```bash
docker-compose down
```

### 4. Rebuild das Imagens

Se precisar fazer mudanças no Dockerfile ou nas dependências, você pode forçar o rebuild da imagem:

Para desenvolvimento:

``` bash
docker-compose up --build app
```

Para produção:

```bash
docker-compose up --build app-prod
```

### 5. Limpeza de Contêineres e Volumes

Caso queira remover contêineres, volumes e imagens não utilizados:

``` bash
docker-compose down --volumes
docker system prune --volumes
```
