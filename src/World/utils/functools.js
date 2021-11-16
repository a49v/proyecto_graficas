const none = (arr, p) => !arr.some(p)

const zip = (a1, a2) =>
      a1.map((e, i) => [e, a2[i]])
        .filter(p => none(p, e => e == undefined))

const iota = (n) => [...Array(n).keys()]

export { zip, iota, none };
