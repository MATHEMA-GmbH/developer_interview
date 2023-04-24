// TS-Playground link
// https://www.typescriptlang.org/play?#code/PTAEBUAsEsGdQMYHsAmBTUB3JAnA1rAFAigB05AtkrAC6hIBmoNkGN0FaxYAypEplABXeP0EBPJEKxSANilAcADjiQA3DNBqlC3UAAloAOxoAuCDHhwjAcjpoAHmgRCaAQwBGstABpQbqzokI1lxUHQGYzR4RyVcGiJCWPjmcSUMACEhaHljAHNQAF5QACJ9KVg0EtAAH1KANRzZN2q6kqyjPLdZAVbS8AE0HD6SgGEAmm8RjJxoFDyqgG5dZJw6ZCNaUAyAVQBJABkAET2AOQBxHnMsnJR8gG0AXSLQe7KKqr8Sxtlmkq+Ol0eph-v1BsMvuNaFMAbN5lVHsskg44mtQAwhEYEOxgqAFjQeD0ukYAGK4G65ToACg82UpeXMtFmnQAlIyaMyCgBvQigPmgbx0WBEtxGdmc5b80CwTBaBCQUA0ul3VmgHlSqUIAIYd4iKqmXkao3CpDEl4lACiGhw4g8qDCmFFCWYSAF0A0iiMoEs9EwXv4epKkqNGo8ODQbjwwaNWsqDSaLQNIY1JrNxRKAHVIGFKjRJhgGLh-N6PoomJJpFr-W4PW5QGoEwB+IOG5N8sMRqOtjWxnUDTBDEpJtt81Oi80HdT5ZisUAUOYobz+BawRugACCLoHODn0DykDoHgw47cShUSBU0DcNAw-E4tAjCkLO4rAEIWyP2+HI9Ge9rSlCsg3kO3bJmOXrpnsJiuiwGDzigi7Hiu-hGAoeRIHQVBGGg4hrucrp4PksDQAAXmg76-smHY-qB-K9qUMxzAsIGftKIoQaU+F0EYrpYThoC0nQjomC60ruGEKA2mu4A2vQ2H0EwUg7o4HJuAAtLK6ACXCK6kCUtFGtRXbJhEbhCEBw4juB5ofvyAC+uhSuGNBCDgXolJOSCEZ06JFnW2GCLStz5Gu1QANRsaaorLHZQA

// This code works
// ...most of the time
// Show us how you would improve it.

// Hint: This isn't executable, as it only defines exports

export type Building = "House" | "Villa" | "Bungalow" | "Tower" | "Castle" | "Bridge";

export const BUILDINGS: Building[] = ["House", "Villa", "Bungalow", "Tower", "Castle", "Bridge"];

export function getSloganForBuilding(building: string): string {
    let slogan: string;
    switch (building) {
        case "House":
            slogan = "Everybody wants to live in his own house";
            break;
        case "Villa":
            slogan = "Why settle for a house if you can have a villa?";
            break;
        case "Tower":
            slogan = "Loving the middle ages? A tower might be an appropriate homestead for you!";
            break;
        case "Caslte":
            slogan = "Into the middle ages and got money? Go kingsize!";
            break;
        case "Bridge":
            slogan = "Got no money but want to stay dry? Try one of our extra-wide bridges."
            break;
        default:
            slogan = "";
    }

    return "Looking for a new building? " + slogan;
}
