.DEFAULT_GOAL := build

build:
	go build -C ./lib/src/dif -o dif dif.go; mv ./lib/src/dif/dif ./lib/dif
	go build -C ./lib/src/sum -o sum sum.go; mv ./lib/src/sum/sum ./lib/sum
