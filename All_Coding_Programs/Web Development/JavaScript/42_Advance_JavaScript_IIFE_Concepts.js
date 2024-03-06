let fn1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Teacher to me : Do You Know What IIFE is..?");
        }, 2000);
    })
}
let fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Me to Teacher : Let me ask the Chat GPT ...");
        }, 2000);
    })
}
let fn3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Me to Chat GPT : Hey chat GPT what is IIFE?");
        }, 2000);
    })
}
let fn4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Chat GPT to Me : IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern where a function is defined and executed immediately after its creation. The primary purpose of an IIFE is to create a new scope for variables, helping to avoid variable hoisting and potential naming conflicts.");
        }, 5000);
    })
}

(async function () {
    await fn1().then((data) => {
        console.log(data);
    });
    await fn2().then((data) => {
        console.log(data);
    });
    await fn3().then((data) => {
        console.log(data);
    });
    await fn4().then((data) => {
        console.log(data);
    });
})();

