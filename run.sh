#!/bin/bash
sudo service docker restart
git -C ~/machine-info-server pull origin develop
docker build -t vchekryzhov/machine-info-server ~/machine-info-server
sudo docker run  -it --restart=always -p 8080:8080 vchekryzhov/machine-info-server
