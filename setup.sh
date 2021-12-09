#!/bin/bash

function makeAliases() {
    ip_address="127.0.0.1"
    host_name="local.psychoschool.ru"

    matches_in_hosts="$(grep -n "$host_name" /etc/hosts | cut -f1 -d:)"
    host_entry="${ip_address} ${host_name}"

    echo "Пожалуйста введите пароль."

    if [ -n "$matches_in_hosts" ]
    then
        echo "Обновляем существующую запись."
        while read -r line_number; do
            sudo sed -i '' "${line_number}s/.*/${host_entry} /" /etc/hosts
        done <<< "$matches_in_hosts"
    else
        echo "Добавляем новую запись."
        echo "$host_entry" | sudo tee -a /etc/hosts > /dev/null
    fi
}

function makeCerts() {
    brew install mkcert
    mkcert -install

    mkdir certificate
    mkcert -key-file key.pem -cert-file cert.pem "local.psychoschool.ru"
    mv key.pem cert.pem certificate
}

makeAliases
makeCerts
yarn install
