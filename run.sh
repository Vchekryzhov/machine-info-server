#!/bin/bash
# This is a comment
git -C ~/machine-server-info pull origin develop
docker build -t vchekryzhov/machine-info-server ~/machine-server-info
#sudo docker run --rm -it -p 8080:8080 vchekryzhov/machine-info-server
