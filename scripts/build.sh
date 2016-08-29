#!/usr/bin/env bash
git config --global user.email "anime@yuiazu.net"
git config --global user.name "anime"

npm run build
if git commit . -m "참 잘했어요"; then
  git push origin master
fi
