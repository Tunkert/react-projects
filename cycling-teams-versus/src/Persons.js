const persons = [
    {
      "name": "Tim",
      "image": "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/242722718_109315768174578_3676109798407391539_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_2v5V-1Kt6AAX9o_FnR&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-XSdcIixr5Qpbfe5xcusrl5UzpB_4RX88MyLSS_pEhHg&oe=62B65882",
      "talents": {
        "cycling": 7,
        "skiing": 10,
        "coding": 10,
        "math": 10,
      }
    },
    {
      "name": "Sean",
      "image": "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.18169-9/398912_10150485855043711_606760387_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=QhCFJeeTv3QAX_hCGfi&tn=OAr3xZ1-eEVNfOZ3&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-uqEVtqAEJlzXSwzGIh1uK8wA31K0pJJFG3QqloL4Vyg&oe=62D5448C",
      "talents": {
        "cycling": 7,
        "skiing": 3,
        "coding": 7,
        "math": 7,
      }
    },
    {
      "name": "Joe",
      "image": "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/206341772_358899628984479_6918304384917362433_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ziizkOtPh3AAX9xBkU-&tn=OAr3xZ1-eEVNfOZ3&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_NvXU1nwbtt9FkVB6wkNB8Smz3zWKrIYRpmzOtOxuURg&oe=62D5B141",
      "talents": {
        "cycling": 9,
        "skiing": 9,
        "coding": 8,
        "math": 8,
      }
    },
    {
      "name": "Aaron",
      "image": "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/195608828_10226400788985404_2971398640770985558_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fOvtcXG6YR0AX_rBssz&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_Gym1kKy4LQw2f35JzXVIljJ6xQbGS6nXj2ZRxpM09HQ&oe=62D77C2B",
      "talents": {
        "cycling": 10,
        "skiing": 3,
        "coding": 2,
        "math": 5,
      },
    },
    {
      "name": "Sarah",
      "image": "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-6/240968066_10159740345667990_4297354154739191285_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=HbT1A629uCUAX8tA_Yv&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_5peGMOyZBvVEUKfW4kwiBJ04T0hbV0vSq4AEThBuLLw&oe=62B589C3",
      "talents": {
        "cycling": 8,
        "skiing": 10,
        "coding": 6,
        "math": 2,
      },
    },
    {
      "name": "Wildcard bonus!",
      "image": "https://images.pexels.com/photos/3052651/pexels-photo-3052651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "talents": {
        "cycling": 10,
        "skiing": 10,
        "coding": 10,
        "math": 10,
      }
    },
    {
      "name": "Wildcard Bummer!",
      "image": "https://images.pexels.com/photos/3812739/pexels-photo-3812739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "talents": {
        "cycling": 0,
        "skiing": 0,
        "coding": 0,
        "math": 0,
      }
    },
    {
      "name": "Wildcard Bummer!",
      "image": "https://images.pexels.com/photos/3812739/pexels-photo-3812739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "talents": {
        "cycling": 0,
        "skiing": 0,
        "coding": 0,
        "math": 0,
      }
    },
]

// create random number function
const randomNumber = (persons) => {
  return Math.floor(Math.random() * persons.length);
}

// get random values for the indices that don't match
let idx1 = randomNumber(persons);
let idx2 = randomNumber(persons);
let idx3 = randomNumber(persons);
let idx4 = randomNumber(persons);
let idx5 = randomNumber(persons);
let idx6 = randomNumber(persons);

while (idx1 === idx2) {
  idx2 = randomNumber(persons);
} 

while (idx1 === idx3 || idx2 === idx3) {
  idx3 = randomNumber(persons);
} 

while (idx1 === idx4 || idx2 === idx4 || idx3 === idx4) {
  idx4 = randomNumber(persons);
} 

while (idx1 === idx5 || idx2 === idx5 || idx3 === idx5 || idx4 === idx5) {
  idx5 = randomNumber(persons);
}

while (idx1 === idx6 || idx2 === idx6 || idx3 === idx6 || idx4 === idx6 || idx5 === idx6) {
  idx6 = randomNumber(persons);
}

export { persons, idx1, idx2, idx3, idx4, idx5, idx6 };