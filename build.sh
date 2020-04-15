 #!/bin/bash

echo $1
echo "$1"
if [ $1 = "master" ]
then
echo "我是master环境打包!"
npm run build --online
elif [ $1 = "test" ]
then
npm run build --testing
elif [ $1 = "dev" ]
then
npm run build --dev
elif [ $1 = "refactor-deploy" ]
then
echo "我是测试环境打包!"
else
echo "Please, choose a CIEnv for build!"
fi
