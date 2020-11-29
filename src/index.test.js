function a(str) {
    return str.split("").map(c => c)
}

test('hoge', () => {
    expect(a("abc")).toEqual(["a", "b", "c"]);
});
