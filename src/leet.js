/*
Input:
    s = "barfoothefoobarman",
        words = ["foo","bar"]
Output: [0,9]

 */


var findSubstring = function(s, words) {
    const results = [];
    words.sort()
    const wordsLength = words.length;
    if (wordsLength === 0) {
        return results;
    }
    const wordLength = words[0].length;
    const nCharsSplit = new RegExp(`.{1,${wordLength}}`, "g");
    const sWords = s.match(nCharsSplit);
    //console.log(sWords)
    const endCheck = sWords.length - wordsLength + 1;
    for (let i = 0; i < endCheck; i++) {
        const sWordsSlice = sWords.slice(i, i + wordsLength).sort();
        console.log(words, sWords.slice(i, i + wordsLength))
        if (words.equals(sWordsSlice)) {
            results.push(i * wordLength);
        }
    }
    return results;

};

Array.prototype.equals = function (other, callback = (x, y) => (x === y)) {
    // Check the other object is of the same type
    if (Object.getPrototypeOf(this) !== Object.getPrototypeOf(other)) {
        return false;
    }
    if (this.length === undefined || this.length !== other.length) {
        return false;
    }
    return Array.prototype.every.call(this, (x, i) => callback(x, other[i]));
};

export default findSubstring;
/*
"wordgoodgoodgoodbestword"
["word","good","best","good"]
 */