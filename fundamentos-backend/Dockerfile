FROM node:20

WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala Nest CLI global e dependências do projeto
RUN npm install -g @nestjs/cli
RUN npm install

# Copia o restante do projeto
COPY . .

# Gera o client do Prisma
RUN npx prisma generate

# Expõe a porta da aplicação NestJS
EXPOSE 3000

# Comando para rodar migrações e a aplicação
CMD sh -c "npx prisma migrate deploy && npm run start:dev"
