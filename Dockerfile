FROM node:18-alpine3.17 as build

# update and install the latest dependencies for the alpine version
RUN apk update && apk upgrade

# set work dir as app
WORKDIR /app
# copy the nuxt project package json and package json lock if available
COPY package* ./
# install all the project npm dependencies
RUN  yarn install
# copy all other project files to working directory
COPY . ./
# build the nuxt project to generate the artifacts in .output directory
RUN yarn nuxt build

# we are using multi stage build process to keep the image size as small as possible
FROM node:18-alpine3.17
# update and install latest dependencies, add dumb-init package
# add a non root user
RUN adduser -D nuxtuser
# set non root user
USER nuxtuser

# set work dir as app
WORKDIR /app
# copy the output directory to the /app directory from
# build stage with proper permissions for user nuxt user
COPY --chown=nuxtuser:nuxtuser --from=build /app/.output ./
# expose 8080 on container
EXPOSE 8080


ENV HOST=0.0.0.0 PORT=8080 NODE_ENV=production
CMD ["node","/app/server/index.mjs"]