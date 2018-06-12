#!/bin/bash
# Собирает и запускает докер контейнер
git pull origin develop
docker rm $(docker stop $(docker ps -a -q --filter publish=8080 --format="{{.ID}}"))
docker build -t vchekryzhov/machine-info-server .
docker run -it --restart=always -p 8080:8080 vchekryzhov/machine-info-server
