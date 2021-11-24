FROM nikolaik/python-nodejs:latest

RUN apt update -y
RUN apt upgrade -y
RUN apt-get install -y --no-install-recommends \
  neofetch \
  ffmpeg \
  wget \
  sudo \
  tesseract-ocr \
  chromium \
  imagemagick

RUN npm install -g npm@7.20.5
WORKDIR /home/frmdev/frmdev
COPY package.json .
RUN npm install
RUN npm i yt-search
COPY . .
CMD ["node", "main.js"]