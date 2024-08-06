package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
    a, err := strconv.Atoi(os.Args[1])
    if err != nil {
        panic(err)
    }

    b, err := strconv.Atoi(os.Args[2])
    if err != nil {
        panic(err)
    }

    fmt.Print(a-b)
}
