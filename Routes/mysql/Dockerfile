FROM mysql:latest
COPY ./sql.sql /tmp
CMD [ "mysqld", "--init-file=/tmp/sql.sql" ]
