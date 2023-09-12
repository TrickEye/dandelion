import os
fw = open('./output.txt', 'w', encoding='utf-8')
with open('./input.txt', 'r', encoding='utf-8') as f:
    line = f.readline()
    while len(line.strip()) > 0 :
        fw.write(line + " <br> ")
        line = f.readline()