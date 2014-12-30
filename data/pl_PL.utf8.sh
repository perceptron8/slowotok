wget http://sjp.pl/slownik/odmiany/sjp-odm-20141029.zip -O pl_PL.zip
unzip -p pl_PL.zip odm.txt | iconv -f iso8859-2 -t utf-8 > pl_PL.utf8.tmp
grep -o -E '^[[:lower:]]{3,16}(?=,|$)' pl_PL.utf8.tmp | sort -u > pl_PL.utf8.txt
rm pl_PL.utf8.tmp
rm pl_PL.zip
