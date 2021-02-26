#!/bin/sh
set -e

rm -rf output dist

# npm install
npm run build

cp package.json output
cp -r dist output/app/public
cp -r app/view output/app/view