#coding:utf-8

import numpy as np

f = open(u"clusterv3.txt")
word_data = [line.strip("\n").split("\t") for line in f]

f = open("word_sum.txt", "a")

Clu_num = "4_4_4"

#個別カウント
def sort():
	for data in word_data:
		list_num = data
		if list_num[0] == Clu_num:
			count = list_num[1]
			yield count

count_list = [d for d in sort()]
count_float = np.array(count_list).astype(np.float)
#f.write(("\n") + Clu_num +  ("\t") + str(count_float.sum()))

#全体カウント
all_count = np.array(word_data)
all_count_sum = all_count[:,1].astype(np.float)
print all_count_sum.sum()