function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function asyncOperation() {
    return delay(1000).then(() => {
        console.log("Async operation completed");
        return "Result";
    });
}

async function main() {
    console.log("Starting async operation...");
    const result = await asyncOperation();
    console.log("Operation result:", result);
}

main();
