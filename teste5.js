function inverterString(str) {
    let o = '';
    for (let i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}

console.log(inverterString("Testando"));