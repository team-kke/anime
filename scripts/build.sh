#!/usr/bin/env bash
git config --global user.email "me@noraesae.net"
git config --global user.name "Anime Missionary"

npm run build
if git commit . -m "[CircleCI] Build"; then
  git push origin master
fi
