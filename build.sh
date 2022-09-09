#!/bin/bash
DEST='/Users/wangbx/git_wysource/fd/ec-cloud/easyclick-devtools/src/main/resources/newdocs'
SRC='/Users/wangbx/GitHub/newecdocs'
cd $SRC
echo `pwd`
export PATH=/Users/wangbx/.nvm/versions/node/v16.16.0/bin/:$PATH
/Users/wangbx/.nvm/versions/node/v16.16.0/bin/npm run build

cd $DEST
echo `pwd`
rm -r *
cp -r $SRC/build/* ./
rm -r en/
