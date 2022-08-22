#!usr/bin/env bash

echo "Starting Build..."
mkdir -p _build
mkdir -p _build/css
mkdir -p _build/icons/default
mkdir -p _build/sass/default

sass -I _build/sass/default/ dappspec/dappspec.sass > _build/css/dappspec.css
cp _build/css/dappspec.css test/dappspec.css
