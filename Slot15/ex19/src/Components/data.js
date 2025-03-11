const animals = [
    {
        image: 'https://static.vecteezy.com/system/resources/previews/026/525/162/non_2x/lion-animal-isolated-photo.jpg',
        name: "Lion",
        scientificName: "Panthera leo",
        size: "140",
        diet: ["meat"],

    },
    {
        image: 'https://4.bp.blogspot.com/-DlaPBMdLhEk/UQp2_aDhYcI/AAAAAAAADEw/d0mV5eDG54U/s1600/Gorilla.jpg',
        name: "Gorilla",
        scientificName: "Gorilla beringei",
        size: 205,
        diet: ["plants", "insects"],
        additional: {
            notes: "This is the eastern gorilla. There is also a western gorilla that is a different species.",
        },
    },
    {
        image: 'http://4.bp.blogspot.com/-jjOrjq42cwo/UzylPWLyfPI/AAAAAAAAA_A/FPtuRLYigHM/s1600/animais-zebra-345552.jpg',
        name: "Zebra",
        scientificName: "Equus quagga",
        size: 322,
        diet: ["plants"],
        additional: {
            notes: "There are three different species of zebra.",
            link: "https://en.wikipedia.org/wiki/Zebra",
        },
    },
];

export default animals;

