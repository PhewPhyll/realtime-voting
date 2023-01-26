#!/bin/sh
USER=root
TARGET=v.barcampsongkhla.org
CLIENT_PATH=/var/www/voting

echo "TARGET = ${TARGET}"

cd front-end
yarn install
yarn build
tar zcf my-app.tgz build/*
scp -r my-app.tgz ${USER}@${TARGET}:/tmp
ssh ${USER}@${TARGET} "rm -rf ${CLIENT_PATH}/*"
ssh ${USER}@${TARGET} "tar zxf /tmp/my-app.tgz --strip-components=1 -C ${CLIENT_PATH}"
rm my-app.tgz