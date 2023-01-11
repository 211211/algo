class Trie {
    constructor() {
        this.root = new Map();
        this.endSymbol = "*";
    }

    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.has(char)) {
                node.set(char, new Map());
            }
            node = node.get(char);
        }
        node.set(this.endSymbol, word);
    }

    findWord(word) {
        let node = this.root;
        for (let char of word) {
            if (node.has(char)) {
                node = node.get(char);
            } else {
                return null;
            }
        }

        return node;
    }

    isWord(word) {
        let lastNode = this.findWord(word);
        return lastNode !== null && lastNode.has(this.endSymbol);
    }

    isEmpty() {
        return this.root.size === 0;
    }

    removeWord(word) {
        if (this.isEmpty() || !this.isWord(word)) {
            return;
        }
        let current = this.root;
        let nodes = [];
        for (let char of word) {
            nodes.push(current);
            current = current.get(char);
        }
        nodes.push(current);
        for (let i = nodes.length - 1; i >= 0; i--) {
            let node = nodes[i];
            if (node.size > 1 || i === 0) {
                node.delete(this.endSymbol);
                break;
            } else {
                let char = word[i - 1];
                nodes[i - 1].delete(char);
            }
        }
    }

    printWords() {
        if (this.isEmpty()) {
            return;
        }
        let words = new Set();
        function DFS(node, str) {
            // key - value
            for (let [char, trieNode] of node) {
                if (char === '*') {
                    words.add(trieNode)
                } else {
                    DFS(trieNode, str + char);
                }
            }
        }
        DFS(this.root, "");
        return words;
    }
}


const trie = new Trie()
trie.addWord('the')
console.log(trie.findWord('there'))
trie.addWord('then')
console.log(trie.findWord('then'))
trie.addWord('bigo')
console.log(trie.findWord('the'))
trie.addWord('there')
console.log(trie.printWords())
// console.log(trie)