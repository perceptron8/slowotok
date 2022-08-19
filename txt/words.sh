wget https://sjp.pl/sl/odmiany/sjp-odm-20220807.zip -O words.zip
unzip -p words.zip odm.txt \
	| tr -d '\r' \
	| grep -o -P '(?<=^)[aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż]{3,16}(?=,|$)' \
	| sort -u > words.txt
rm words.zip
