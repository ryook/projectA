#coding:utf-8

import xlrd

book = xlrd.open_workbook(u"eropic_excel_new.xlsx")

sheet_1 = book.sheet_by_index(0)

#id_dmm = []
#for row in range(1, sheet_1.nrows):
#	value1 = sheet_1.cell(row, 0).value
#	id_dmm.append(value1)id_av

cluster = []
for row in range(1, sheet_1.nrows):
	value2 = sheet_1.cell(row, 0).value
	cluster.append(value2)

url = []
for row in range(1, sheet_1.nrows):
	value3 = sheet_1.cell(row, 2).value
	url.append(value3)

f = open("id_av.txt", "w")

i = 0
for data in cluster:
	converted =  "{" + "\"" + "id" + "\"" + ":" + str(i) + "," + "\"" + "cluster" + "\"" + ":" "\"" + cluster[i] + "\"" + "," + "\"" + "url" + "\"" + ":" + "\"" + url[i] + "\"" + "}" + "," + "\n"
	f.write(converted.encode('utf-8'))
	#print converted
	i += 1
#converted =  "{" + "\""+ "cluster" + "\"" + ":" "\"" + lista[0] + "\"" + "," + "\"" + "word" + "\"" + ":" "\"" + lista[1] + "\"" + "}" + "," + "\n"
f.close()