Install docker raspberry PI
1
sudo apt-get update
2
Install packages to allow apt to use a repository over HTTPS
sudo apt-get install apt-transport-https \
                       ca-certificates \
                       software-properties-common
3
curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add -

apt-key fingerprint 58118E89F3A912897C070ADBF76221572C52609D


sudo add-apt-repository \
       "deb https://apt.dockerproject.org/repo/ \
       raspbian-$(lsb_release -cs) \
       main"

Append the following:

https://apt.dockerproject.org/repo/ raspbian-jessie main
4
sudo apt-get update

sudo apt-get -y install docker-engine
5
docker run hello-world


ЗАПУСК КОНТЕЙНЕРА НА РАЗБЕРИ
docker pull vchekryzhov/machine-info-server
docker run --rm -it -p 8080:8080 vchekryzhov/machine-info-server
