// TS-Playground link
//https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgCIQgBwDYE8ByEAzpACbIDeAUMrcjMFCQDIQBuE2AggFzIlRQAcwA0NOgyZhWHbACE+AIwD2y7BDggxdeoxbtOAYT4gArgFtF0bXTDKAyhATKQpGZz7UdOok5duDbj4ACgBKZABeAD5kM0trcW9+P1d3eU9kAGsIXD4BYWQAXxskuwAVAAtGANlPRKTbKqgazl5kFTUNEABtAF0ShtowJpb05AAiAAlObGVx5AAfCblcFEVV8fqdQvqdnapnEBJkUgxMNvQsPEISCHIIynrJfVk28eewZHVZcYGPtIUyDAUFMED+emkgWMyAALAAmAZ2RyHUZ1Qa+FFpNphSIxADMADoAIwwgY+FKjQEULI5PjjADupiZFSZrNM82KW1sykq1TSaMGjT5gTa3WBoJE9Dg2F8kvFEH6XNKIwBdOm2Fmm0GO22VEKAG4qFQAPTG5D2ODmFBwIgnM5cSWKUyfYbC2RyZDAW3jFZrDYHFzHU5YQGXHAEYhkSLIU3IMoAeVQ8aNhyInQJsyEwXGwfOPF+dqwXFChtT6cz2dzCgLVZLQA

interface DeeplyNested {
    firstLevelA: string,
    firstLevelB: boolean,
    firstLevelC: number,
    toSecondLevel: {
        secondLevelA: () => number,
        secondLevelB: { key: string },
        toThirdLevel: {
            thirdLevelA: boolean[],
            thirdLevelB: "Hello" | "Bye bye"
        }
    }
}

const deepA: DeeplyNested = {
    firstLevelA: "first level",
    firstLevelB: true,
    firstLevelC: 42,
    toSecondLevel: {
        secondLevelA: () => 3.14,
        secondLevelB: {key: "wuuuhuuuuuu"},
        toThirdLevel: {
            thirdLevelA: [true, false, true],
            thirdLevelB: "Hello"
        }
    }
};

// Same as deepA, but thirdLevelB is "Bye bye"
const deepB: DeeplyNested =;// TODO

console.log("deepA:", deepA);
console.log("deepB:", deepB);
