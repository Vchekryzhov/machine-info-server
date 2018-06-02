#!/bin/bash
# This is a comment
git pull origin develop
docker build -t vchekryzhov/machine-info-server .
docker push vchekryzhov/machine-info-server:raspberry
#sudo docker run --rm -it -p 8080:8080 vchekryzhov/machine-info-server
