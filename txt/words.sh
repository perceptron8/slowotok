wget https://sjp.pl/slownik/odmiany/sjp-odm-20191211.zip -O words.zip
unzip -p words.zip odm.txt \
	| tr -d '\r' \
	| grep -o -P '(?<=^)[aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż]{3,16}(?=,|$)' \
	| sort -u > words.txt
rm words.zip
