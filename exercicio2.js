let separarParimpar = (nums) => {
    let pares = []
    let impares = []
    let indicePar = 0
    let indiceImpar = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            pares[indicePar] = nums[i]
            indicePar++
        } else {
            impares[indiceImpar] = nums[i]
            indiceImpar++
        }
    };
    return `Os números Pares são ${[pares]} e os Impares são ${[impares]} `
};

console.log(separarParimpar([1, 2, 3, 4, 5, 6]));