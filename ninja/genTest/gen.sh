#!/bin/bash

git clone git@github.com:jquery/jquery.git $1

cp $2.html $1/index.html

cd $1 && sudo npm install -g grunt-cli && npm install && grunt
