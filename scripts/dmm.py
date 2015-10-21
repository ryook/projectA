#coding:utf-8

import csv
from collections import Counter
from math import log

import MeCab

import time
class Dmm():

	def __init__(self):
		print "dmm"

	def extract_clusterid(self, data, cluster):
		#clusterに属するid取得
		return [d["id"] for d in data if d["cluster"] == cluster]

	def mkds_cluster(self, data, ids):
		#渡したリストに含まれるidのreviewデータ取得
		return [d for d in data if d["id"].encode("utf-8") in ids]

	def extract_reviews(self, data):
		#reviewデータからタイトルと本文を抜き出して１文にする
		reviews = [d["title"] + d["text"] for d in data]
		return " ".join(reviews)

	def wakati(self, text):
		#わかちがき結果をリストで返す
		tagger = MeCab.Tagger("-Owakati")
		result = tagger.parse(text)
		return result.split(" ")

	def cnt_words(self, _list):
		#リスト内の単語のカウント {word: count}
		return { w:c for  w, c in Counter(_list).most_common() }

	def tf(self, data):
		#in {"hoge": 1, "aaa": 2}
		#out {"hoge": 0.5, "aaa", 0.2}
		if type(data) != dict:
			raise "type is not dict!!!"
		t_sum = sum(data.values())
		tf_dict = {w: c* 1.0/ t_sum for w, c in data.items()}
		return tf_dict

	def idf(self, data):
		#in [{"cluster": "1_1_1", "word_counts": {"hoge": 1, ...}}, ... ]
		#out {"hoge": 0.5, "aaa", 0.2}
		start = time.time()
		print "idf start"
		aw = []
		for _list in [d["word_counts"].keys() for d in data]:
			aw += _list
		all_words = set(aw)
		doc_cnt = len(data)
		idf = {}
		for w in all_words:
			cnt = 0
			for d in data:
				try:
					chk = d["word_counts"][w]
					cnt += 1
				except:
					continue
			idf.update({w: log(doc_cnt*1.0 / cnt)})
		f = time.time() - start
		print "END"
		print f
		return idf

	def tf_idf(self, data):
		fw = open("dmm_feature_word.txt", "w")
		#in [{"cluster": "1_1_1", "word_counts": {"hoge": 1, ...}}, ... ]
		#out [{cluster, word, tfidf}]
		tfidf_list= []
		idf = self.idf(data)
		for d in data:
			cluster = d["cluster"]
			print "tfidf"+ cluster
			tf = self.tf(d["word_counts"])
			for w in d["word_counts"].keys():
				tfidf = idf[w] * tf[w]
				row = "{}\t{}\t{}\t{}\t{}\n".format(
					cluster,
					w,
					tfidf,
					idf[w],
					tf[w],
					)
				fw.write(row)
				sub = {}
				sub["cluster"] = cluster
				sub["word"] = w
				sub["tfidf"] = tfidf
				tfidf_list.append(sub)

	def main(self):
		st = time.time()
		cn = ["1", "2", "3", "4"]
		cl_words = []
		for c1 in cn:
			for c2 in cn:
				for c3 in cn:
					#cluster ex. 1_1_1
					cluster = "{}_{}_{}".format(c1, c2, c3)
					ids = self.extract_clusterid(clusters, cluster)
					datas = self.mkds_cluster(reviews, ids)
					review = self.extract_reviews(datas)
					words = self.wakati(review)
					cnt_words = self.cnt_words(words)
					#stopword除去(集合計算A - B)
					no_sw = list(set(words) - set(stopwords))
					#stopword以外の単語のカウントを再取得
					uniqu_words = {d:cnt_words[d] for d in no_sw}
					sub = {}
					sub["cluster"] = cluster
					sub["word_counts"] = uniqu_words
					cl_words.append(sub)
		print time.time() - st
		self.tf_idf(cl_words)


if __name__ == "__main__":
	#dataディレクトリから読み込み
	f_clu = open("../data/64clust_img.csv", "r")
	#csv読み込み
	reader = csv.reader(f_clu)
	#一行目のヘッダースキップ
	header = next(reader)
	clusters = [{"id": row[0], "cluster": row[1]} for row in reader]
	f_clu.close()

	f_rev = open("../data/dmm_review.txt", "r")
	reviews = []
	for line in f_rev:
		l = line.strip("\n").split("\t")
		sub = {}
		sub["id"] = l[0]
		sub["name"] = l[1]
		sub["title"] = l[2]
		sub["text"] = l[3]
		reviews.append(sub)
	f_rev.close()

	#このファイルと同じディレクトリから読み込み
	f_stp = open("stopword.txt", "r")
	stopwords = [d.strip("\n") for d in f_stp]
	f_stp.close()

	Dmm().main()
