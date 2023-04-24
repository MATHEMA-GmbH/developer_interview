// This code works
// ...most of the time
// Show us how you would improve it.

// Hint: This isn't executable, as it only defines exports

export const BUILDINGS = ["House", "Villa", "Bungalow", "Tower", "Castle", "Bridge"] as const; // tuple type

export type Building = typeof BUILDINGS[number]; // single source of truth for building types

export function getSloganForBuilding(building: Building): string {
    let slogan = "Looking for a new building? ";
    switch (building) {
        case "House":
            slogan += "Everybody wants to live in his own house";
            break;
        case "Villa":
            slogan += "Why settle for a house if you can have a villa?";
            break;
        case "Tower":
            slogan += "Loving the middle ages? A tower might be an appropriate homestead for you!";
            break;
        case "Castle": // Typo fixed
            slogan += "Into the middle ages and got money? Go kingsize!";
            break;
        case "Bridge":
            slogan += "Got no money but want to stay dry? Try one of our extra-wide bridges."
            break;
        case "Bungalow": // Added because otherwise exhaustiveness check fails
            slogan += "Want to live comfortably by the beach? A bungalow is the way to go."
            break;
        default:
            const errorHereIfCaseMissed: never = building; // exhaustiveness-check
    }

    return slogan;
}
