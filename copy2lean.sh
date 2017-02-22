#!/bin/bash
#!/bin/scp
#!/usr/bin/expect -f
echo "****************开始复制到leancloud文件夹********************"
cd dist
scp -r . ../../leanCloud/static/ 
cd ../
echo "****************scp 结束 ********************"Ï
