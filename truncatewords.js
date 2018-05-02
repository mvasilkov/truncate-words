function truncateWords(string, count, end) {
    string = string.trim()
    if (!string) return string

    end = end || ' [...]'
    if (!count) return end.trim()

    const words = string.split(/[\s\uFEFF\xA0]+/)
    if (words.length <= count) {
        return words.join(' ')
    }
    return words.slice(0, count).join(' ') + end
}

if (typeof module == 'object') {
    module.exports = truncateWords
}
