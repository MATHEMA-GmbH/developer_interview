// TS-Playground link
// https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgCIQgBwDYE8ByEAzpACbIDeAUMrcjMFCQDIQBuE2AggFzIlRQAcwA0NOgyZhWHbACE+AIwD2y7BDggxdeoxbtOAYT4gArgFtF0bXTDKAyhATKQpGZz7UdOok5duDbj4ACgBKZABeAD5kM0trcW9+P1d3eU9kAGsIXD4BYWQAXxskuwAVAAtGANlPRKTbKqgazl5kFTUNEABtAF0ShtowJpb05AAiAAlObGVx5AAfCblcFEVV8fqdQvqdnapnEBJkUgxMNvQsPEISCHIIynrJfVk28eewZHVZcYGPtIUyDAUFMED+emkgWMyAALAAmAZ2RyHUZ1Qa+FFpNphSIxADMADoAIwwgY+FKjQEUbK5CYAd1MjIqjJZpnGxS2tmUlWqaTRg0avMCbW6wNBInocGwvglYog-U5pRGAL4Uxmc0VRV2VEKAG4qFQYKYQAgwMAXMg6cBhjzmgCuERgvVhkLZIDLjgCMQyN0AORIilpX29P3lZWBYOh8Nu4MDZSCISgKV8D3Xb13KjhLx0KAQMCmKAgZC65AAelLyDKAHlUFWdQby8h7HBzCg4EQTmcuBLFKZPi67YE5MhgB3xis1hsDi5jqcsMOHlabdHOHIHcFx6t2hsJXPzqF9dOjp0CbMhBu97xfp2sFwD0eiCezxezgpr3u5AegA

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

function withThirdLevelBAs(
    thirdLevelB: DeeplyNested['toSecondLevel']['toThirdLevel']['thirdLevelB'],
    original: DeeplyNested
) {
    return ; // TODO
}

// Same as deepA, but thirdLevelB is "Bye bye"
const deepB = withThirdLevelBAs("Bye bye", deepA);

console.log("deepA:", deepA);
console.log("deepB:", deepB);
