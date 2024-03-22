                                                                                                                     
FROM node:18.19.1-alpine3.19 as dependencies
WORKDIR /news_katsan_backoffice_V1
COPY package.json  ./
RUN yarn install --frozen-lockfile



FROM node:18.19.1-alpine3.19 as builder
WORKDIR /news_katsan_backoffice_V1
COPY . .

COPY ./.env /news_katsan_backoffice_V1/.env


COPY --from=dependencies /news_katsan_backoffice_V1/node_modules ./node_modules


RUN yarn build 


FROM node:18.19.1-alpine3.19  as runner
WORKDIR /news_katsan_backoffice_V1
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /news_katsan_backoffice_V1/public ./public
COPY --from=builder /news_katsan_backoffice_V1/.next ./.next
COPY --from=builder /news_katsan_backoffice_V1/node_modules ./node_modules
COPY --from=builder /news_katsan_backoffice_V1/.env ./.env
#COPY --from=builder /backoffice/.env.local ./.env.local
COPY --from=builder /news_katsan_backoffice_V1/package.json ./package.json
COPY --from=builder /news_katsan_backoffice_V1/next.config.js ./next.config.js


EXPOSE 80

# CMD ["yarn", "start"]





