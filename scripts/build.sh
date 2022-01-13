#!/bin/sh
set -e

rm -rf output dist node_modules

yarn install
npm run build

cp package.json output
cp -r dist output