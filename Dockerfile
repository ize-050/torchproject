FROM node:16.14.0 as builder

RUN mkdir -p /var/www/nuxt-app_1
WORKDIR /var/www/nuxt-app_1

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run build



ENV NUXT_HOST=0.0.0.0






FROM node:16.14.0  as runner
WORKDIR /var/www/nuxt-app_1
ENV NODE_ENV production

COPY --from=builder /var/www/nuxt-app_1/ ./
COPY --from=builder /var/www/nuxt-app_1/.nuxt ./.nuxt
COPY --from=builder  /var/www/nuxt-app_1/node_modules ./node_modules
COPY --from=builder /var/www/nuxt-app_1/package.json ./package.json
EXPOSE 80


CMD [ "npm", "start" ]