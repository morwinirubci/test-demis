FROM php:8.2-fpm-alpine3.16

RUN apk update

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql
