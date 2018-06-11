#!/bin/bash
docker build -t vchekryzhov/machine-info-server .
sudo docker run  -it --restart=always -p 8080:8080 vchekryzhov/machine-info-server
