#!/bin/bash


SCRIPT_DIR="$(cd "`dirname "${BASH_SOURCE[0]}"`">/dev/null 2>&1 && pwd)"


issue() {
  domain=$1
  docker run -it --rm --name certbot -v ${SCRIPT_DIR}/data/ui:/www \
    -v ${SCRIPT_DIR}/data/letsencrypt:/etc/letsencrypt certbot/certbot certonly \
    --agree-tos --webroot --webroot-path /www --email root@$domain -n -d $domain
}

renew() {
  docker run -it --rm --name certbot -v ${SCRIPT_DIR}/data/ui:/www \
    -v ${SCRIPT_DIR}/data/letsencrypt:/etc/letsencrypt certbot/certbot renew \
    --agree-tos --webroot --webroot-path /www -n
  reload_nginx
}

reload_nginx() {
    docker-compose exec ui nginx -s reload
}


case "$1" in
  issue)
    issue $2
    ;;
  renew)
    renew
    ;;
  reload-nginx)
    reload_nginx
    ;;
  *)
    echo "Usage: $0 <issue|renew|reload-nginx>"
    ;;
esac
