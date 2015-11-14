#coding:utf-8

import xlrd

book = xlrd.open_workbook(u"title_words.xlsx")

sheet_1 = book.sheet_by_index(0)

word = []
for row in range(1, sheet_1.nrows):
	value1 = sheet_1.cell(row, 2).value
	word.append(value1)

cluster = []
for row in range(1, sheet_1.nrows):
	value2 = sheet_1.cell(row, 0).value
	cluster.append(value2)

type_w = []
for row in range(1, sheet_1.nrows):
	value3 = sheet_1.cell(row, 1).value
	type_w.append(value3)

f = open("av_word.txt", "w")

i = 0
for data in cluster:
	converted =  "{" + "\"" + "cluster" + "\"" + ":" +  "\"" +cluster[i] + "\"" + "," + "\"" + "type_w" + "\"" + ":" "\"" + str(type_w[i]) + "\"" + "," + "\"" + "word" + "\"" + ":" + "\"" + word[i] + "\"" + "}" + "," + "\n"
	f.write(converted.encode('utf-8'))
	#print converted
	i += 1
#converted =  "{" + "\""+ "cluster" + "\"" + ":" "\"" + lista[0] + "\"" + "," + "\"" + "word" + "\"" + ":" "\"" + lista[1] + "\"" + "}" + "," + "\n"
f.close()