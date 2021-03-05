FROM node:14.16.0

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

ENV NODE_ENV=development
ENV CLARIFAI_API_KEY=15b2cf8874c841d6a3301c75acff9db9

RUN npm i
RUN npm i nodemon -g

CMD [ "/bin/bash" ]