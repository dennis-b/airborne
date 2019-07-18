FROM node:carbon

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY . /usr/src/app

EXPOSE 5000

ENTRYPOINT ["sh", "./entrypoint.sh"]

CMD ["yarn", "start:prod"]

