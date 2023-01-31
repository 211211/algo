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

    iterateNodes() {
        if (this.isEmpty()) {
            return;
        }

        let queue = [this.root];
        while (queue.length > 0) {
            let node = queue.shift();

            console.log(node);

            if (node.size === 1) {
                for (let value of node.values()) {
                    queue.push(value);
                }
            }
        }
    }
}

// const trie = new Trie()
// trie.addWord('the')
// console.log(trie.findWord('there'))
// trie.addWord('then')
// console.log(trie.findWord('then'))
// trie.addWord('bigo')
// console.log(trie.findWord('the'))
// trie.addWord('there')
// console.log(trie.printWords())
// console.log(trie)

function longestCommonPrefix(words) {
    if (!Array.isArray(words) || words.length === 0) {
        return "";
    }

    let emptyStringIndex = words.findIndex((word) => word === "");
    if (emptyStringIndex >= 0) {
        return "";
    }

    words = words.filter((word) => word.length > 0); // Filter out empty strings
    if (!words.length) {
        return "";
    }
    if (words.length === 1) {
        return words[0];
    }

    let trie = new Trie();
    for (let word of words) {
        trie.addWord(word);
    }
    let commonPrefix = "";
    let current = trie.root;
    while (current.size === 1 && !current.endSymbol) {
        for (let key of current.keys()) {
            if (key !== trie.endSymbol) {
                commonPrefix += key;
            }

            current = current.get(key); // move to next child
        }
    }
    return commonPrefix;
}

console.log(longestCommonPrefix(["car", "cir"])); // => c
console.log(longestCommonPrefix([""])); // => ''
console.log(longestCommonPrefix(["a"])); // => a
console.log(longestCommonPrefix(["", "b"])); // => ''
console.log(longestCommonPrefix(["flower","flower","flower","flower"])) // => 'flower'
