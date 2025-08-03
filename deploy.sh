#!/bin/sh

SERVER=hetzner-server
DIR=/var/www/html/fire-framework.info/

rsync -avz --delete public/ ${SERVER}:${DIR}

exit 0