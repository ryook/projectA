#coding:utf-8

f = open("dmm_feature_word.txt")
feature_word = f.readlines()
f.close


f = open("feature_word.txt", "w")

for line in feature_word:
	if len(line) < 30:
		continue
	lista = line.split("\t")
	converted =  "{" + "\""+ "cluster" + "\"" + ":" "\"" + lista[0] + "\"" + "," + "\"" + "word" + "\"" + ":" "\"" + lista[1] + "\"" + "}" + "," + "\n"
	#print converted
	f.write(converted)

f.close()



