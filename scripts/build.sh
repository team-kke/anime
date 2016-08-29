#!/usr/bin/env bash
npm run build
if git commit . -m "[CircleCI] Build"; then
  git push origin master
fi
