#coding:utf-8

import csv

csvfile = "clust_64_16_img.csv"
f = open(csvfile, "rb")
reader = csv.reader(f)

for row in reader:
	print row