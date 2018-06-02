#!/bin/bash
git -C ~/machine-info-server pull origin develop
docker build -t vchekryzhov/machine-info-server ~/machine-info-server
sudo docker run --rm -it --restart=always -p 8080:8080 vchekryzhov/machine-info-server
