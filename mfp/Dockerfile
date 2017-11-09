FROM node:9.1.0-alpine

#Python3 needed for own code, python3-dev not checked, g++, gcc, not checked, libxslt-dev not checked
#Vim for convenience

RUN apk add --update \
    git \
    python3 \
    python3-dev \
    gcc \
    g++ \
    libxslt-dev \
    vim 

#workdir creates non-existent directories for you
WORKDIR /usr/local/src
RUN git clone https://github.com/shylabs/infrastructure

WORKDIR /usr/local/src/infrastructure

RUN pip3 install myfitnesspal

CMD ["/bin/sh"]
