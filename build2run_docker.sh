#!/bin/bash
# Собирает и запускает докер контейнер

docker build -t vchekryzhov/machine-info-server .
docker rm $(docker stop $(docker ps -a -q --filter publish=8080 --format="{{.ID}}"))
sudo reboot
