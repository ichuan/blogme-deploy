# blogme-deploy

## Downloading UI

Check `data/README.md`


## Adding api instance

For example, adding `api1`

- Create data dirs: `mkdir -p data/api1/{public/upload,logs/supervisord/childs}`
- Modify `docker-compose.yml`, copy-paste-and-modify `api1` service section
- Create db and tables:

    ```
    # Start db if not running
    docker-compose up -d db

    # Create a db: api1
    docker-compose exec db mysql -uroot -e "CREATE DATABASE api1 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

    # Restart all
    docker-compose down
    docker-compose up

    # Create tables
    docker-compose exec api1 python -m blogme.bin.cmd create tables
    ```

- Create a `api.template` copy in `data/nginx`, modify it. Change `volumes` section in ui
- Get SSL
  - `./certbot.sh issue xx.yy`
  - Modify `data/nginx/api1.conf`, `ssl_certificate` section
  - Add this to crontab `0 1 * * * /path/to/certbot.sh renew`


## Importing wordpress

```
cp WordPress.2019-12-31.xml data/api1/public/
docker-compose exec api1 python -m blogme.bin.cmd import wordpress /app/blogme/public/WordPress.2019-12-31.xml
```

Batch compress image:
```
docker-compose exec api1 bash
cd /app/blogme
for img in public/upload/*; do echo $img; convert "$img" -auto-orient -strip -interlace Plane -quality 80 -resize "1600>" "$img"; done
```


## Backuping
```
echo "Dumping mysql..."
ssh xinyi docker-compose exec db "mysqldump -uroot" > blogme/db.sql
echo "Downloading config and uploads..."
rsync -avhPH --delete --exclude=/data/mysql blogme:/home/admin/blogme/ blogme.me/
```
