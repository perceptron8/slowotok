wget http://sjp.pl/slownik/odmiany/sjp-odm-20141029.zip -O words.zip
unzip -p words.zip odm.txt | iconv -f iso8859-2 -t utf-8 > words.tmp
grep -o -P '^[a-ząćęłńóśźż]{3,16}(?=,|$)' words.tmp | sort -u > words.txt
rm words.tmp
rm words.zip
