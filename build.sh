#!/bin/bash
#nvm use 16.16
yarn build
cp -r build/* ../ecdocs/
