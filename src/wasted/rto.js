process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
    inputString += inputStdin;
});

process.stdin.on("end", _ => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map(str => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function output(o) {
    return process.stdout.write(o + "\n");
}

const mod = 1000000007;

function rto(n) {
    let d = Array(n)
        .fill()
        .map((nothing, i) => i + 1);
    while (d.length != 1) {
        let x = d.pop();
        let y = d.pop();
        let z = (x + y + ((x * y) % mod)) % mod;
        d.push(z);
    }
    return d[0];
}

function main() {
    let t = Number(readLine());

    while (t--) {
        const n = Number(readLine());
        output(rto(n));
    }
}
