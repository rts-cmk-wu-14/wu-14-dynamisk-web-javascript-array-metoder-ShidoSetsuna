document.addEventListener("DOMContentLoaded", function () {
  let catsArray = [
    "Ollie",
    "Sophie",
    "Salem",
    "Tiger",
    "Binx",
    "Pumpkin",
    "Penny",
    "Lenny",
  ];
  let dogsArray = [
    "Barney",
    "Molly",
    "Baxter",
    "Polly",
    "Buddy",
    "Suki",
    "Watson",
  ];
  let fruitsArray = [
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Plum",
    "Apricot",
  ];
  let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

  // --- Løs opgaverne herunder ---
  //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
  let filteredArray = numbersArray.filter((number) => number > 20);
  console.log("Opgave 1", filteredArray);

  // Opgave 2
  // Tilføj katten "Sniffles" til catsArray.
  // Udskriv arrayet i konsollen.
  // console.log("Opgave 2", ...)
  catsArray.push("Sniffles");
  console.log("Opgave 2", catsArray);

  // Opgave 3a
  // Check om der i dogsArray er en hund som hedder "Trixie".
  // Udskriv "true" eller "false" i konsollen afhængig af svaret.
  // console.log("Opgave 3a", ...)
  let isTrixieReal = false;
  if (dogsArray.includes("Trixie")) {
    isTrixieReal = true;
  } else {
    isTrixieReal = false;
  }
  console.log("Opgave 3a", isTrixieReal);

  // Opgave 3b
  // Check om der i dogsArray er en hund som hedder "Baxter".
  // Udskriv "true" eller "false" i konsollen afhængig af svaret.
  // console.log("Opgave 3b", ...)
  let isBaxterReal;
  if (dogsArray.includes("Baxter")) {
    isBaxterReal = true;
  } else {
    isBaxterReal = false;
  }
  console.log("Opgave 3b", isBaxterReal);

  //     Opgave 4a
  // Check om der i catsArray er en kat som hedder "Bagheera".
  // Udskriv katten i konsollen hvis den findes og ellers "undefined".
  // console.log("Opgave 4a", ...)
  let Bagheera;
  if (catsArray.includes("Bagheera")) {
    Bagheera = "Bagheera";
  } else {
    Bagheera = undefined;
  }
  console.log("Opgave 4a", Bagheera);

  // Opgave 4b
  // Check om der i catsArray er en kat som hedder "Salem".
  // Udskriv katten i konsollen hvis den findes og ellers "undefined".
  // console.log("Opgave 4b", ...)
  let Salem;
  if (catsArray.includes("Salem")) {
    Salem = "Salem";
  } else {
    Salem = undefined;
  }
  console.log("Opgave 4b", Salem);

  //     Opgave 5
  // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
  // Udskriv det nye array i konsollen:
  // console.log("Opgave 5", ...)
  let multipliedArray = numbersArray.map((number) => number * 3);
  console.log("Opgave 5", multipliedArray);

  //     Opgave 6
  // Udskriv alle hundene i dogsArray i én lang streng.
  // (Sådan her: BarneyMollyBaxter...)
  // Udskriv strengen konsollen:
  // console.log("Opgave 6", ...)
  let longString = dogsArray.join("");
  console.log("Opgave 6", longString);

  //     Opgave 7a
  // Find ud af hvilket index "Mango" har i fruitsArray.
  // Udskriv indexet i konsollen.
  console.log("Opgave 7a", fruitsArray.indexOf("Mango"));

  //Mango har index 3, men, det er kun fordi index starter fra, så man kunne gøre det sådan her:
  //console.log("Opgave 7ab", fruitsArray.indexOf("Mango" + 1));
  //På denne måde ville mango få index 4, hvilket er det rigtige nummer i rækken, når man tæller fra 1 og ikke 0.

  // Opgave 7b
  // Find ud af hvilket index "Blåbær" har i fruitsArray.
  // Udskriv indexet i konsollen.
  let blueberryIndex = fruitsArray.indexOf("Blåbær");
  if (blueberryIndex === -1) {
    console.log("Opgave 7b", "Blåbær findes ikke i arrayet");
  } else {
    console.log("Opgave 7b", blueberryIndex);
  }

  // Opgave 8
  // Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
  // Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
  // Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
  //  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
  dogsArray.splice(dogsArray.indexOf("Polly"), 1);
  console.log("Opgave 8", dogsArray);
}); // ends DOMContentLoaded
