#! /bin/bash
ls *.mp3 | sed -r 's/.{4}$//;p' > demo.js
sed 's/^/{name:"/g;n' demo.js > temp.js
sed 's/$/",/g;n' temp.js > demo.js
sed 'n;s/^/path:"..\/song\/ethan\//g' demo.js > temp.js
sed 'n;s/$/.mp3",},/g' temp.js > demo.js
sed 'N;s/\n//g' demo.js > temp.js && rm demo.js
sed -i '1i\let All_song = [' temp.js && echo "];" >> temp.js
mv -f temp.js ../../assets/js/list/ethan.js

