let age = document.getElementById('age');
 
function User(surname, name) {
    this.surname = surname,
    this.name = name,
    this.value = age.value,
    this.showUser = function() {
         alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
    }
}

let user = new User('Барабина', 'Наталья');
user.showUser();

age.addEventListener('change', function(){
    let user = new User('Барабина', 'Наталья');
    user.showUser();
});
