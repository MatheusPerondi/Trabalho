# Imagem base
FROM node:20

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install -g @nestjs/cli
RUN npm install

# Copia os arquivos do projeto
COPY . .

# Prisma CLI para gerar client
RUN npx prisma generate

# Porta exposta
EXPOSE 3000

# Comando padrão
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:dev"]

