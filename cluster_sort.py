#coding:utf-8

#hoghoge

f = open(u"review_clusterv2.txt")
review_data = f.readlines()
f.close()

f = open("ero_words.txt", "r")
av_del = [line.strip("\n") for line in f]
f.close()

f = open("Clusterv3.txt", "a")

CL_num = "3_2_1"

def Review_get():
	for data in review_data:
		list_review = data.strip("\n").split("\t")
		review_dict = {"review":list_review[0], "cluster":list_review[1]}
		if review_dict['cluster'] ==  CL_num:
			review = review_dict["review"].split()
			av_clean = [d for d in review if d not in av_del]
			yield av_clean
		
def Flatten(nested_list):
	return [e for inner_list in nested_list for e in inner_list]

def Count_sort():
	av_review = [d for d in Review_get()]
	flat_list = Flatten(av_review)
	words = {}
	for word in flat_list:
		words[word] = words.get(word, 0) + 1
	d = [(v,k) for k,v in words.items()]
	d.sort()
	d.reverse()
	for count, word in d:
		w = word
		c = count
		#yield c
		#print c, w
		#f.write
		print (CL_num + "\t" + str(c) + "\t" + w)

#num = [d for d in Count_sort()]
#print Cluster_number + "\t" + str(sum(num))


if __name__ == "__main__":
	Count_sort()
