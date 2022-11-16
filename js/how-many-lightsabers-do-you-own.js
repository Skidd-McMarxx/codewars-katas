//// DESCRIPTION:
// Inspired by the development team at Vooza, write the function that accepts the name of a programmer, 
// and returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. 
// Anyone else owns 0.

// Examples (Input ==> Output):
// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0
}
