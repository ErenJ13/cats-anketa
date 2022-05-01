class Cat {
    constructor(petname, name, phone, adress, breed, food, sex) {
        this.petname = petname;
        this.name = name;
        this.phone = phone;
        this.adress = adress;
        this.breed = breed;
        this.food = food;
        this.sex = sex;

    }
}

function cats() {
    let catname = document.getElementById('nickname').value;
    let manname = document.getElementById('name').value;
    let manphone = document.getElementById('phone').value;
    let manadress = document.getElementById('adress').value;
    let catbreed = document.querySelector('.poroda').value;
    let catfood = document.querySelector('input[class="food"]:checked').value;
    let catsex = document.querySelector('input[class="sex"]:checked').value;

  
    let cat = new Cat(catname, manname, manphone, manadress, catbreed, catfood, catsex);

    console.log(cat.petname);
    console.log(cat.name);
    console.log(cat.phone);
    console.log(cat.adress);
    console.log(cat.breed);
    console.log(cat.food);
    console.log(cat.sex);
}
