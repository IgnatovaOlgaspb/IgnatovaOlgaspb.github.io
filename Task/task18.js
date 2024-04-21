// исходный код
const user = {
    id: 7,
    name: 'Bob',
    token: 12343423

};

//todo 9.1 Получите из объекта user значение id и разместите его в константу userId не используя выражение user.id.
const {id: userId } = user
console.log(userId)

//todo 9.2 Создайте новый объект на базе объекта user без свойства token через деструктуризацию объекта
const {token, ...user2} = user
console.log(user2)

//todo 9.3 Заморозьте объект user, так чтобы в него нельзя было добавить свойства.
Object.freeze(user)

//todo 9.4 Создайте на базе объекта user новый объкт с доп. полями login и password
const user3 = Object.assign({}, user)
user3.login = 'АБРАКАДАБРА'
user3.password = '1234567'
console.log(user3)

//todo 9.5 Добавьте к объекту user метод getId который возвращает свойство id
user.getId = function() { return user.id }

//todo 9.6 Добавьте к объекту user метод setId который устанавливает свойство id
user.setId = function(_id) { user.id = _id }

//todo 9.7 Проитерируйте объект user так чтобы при итерации можно было получить его ключ и значение.
for (let key in user) {
    console.log("Ключ: " + key + "Значение: " + user[key])
  }

//todo 9.8 Сериализуйте объект в json
let user4 = JSON.stringify(user)
console.log(user4)

//todo 9.9 Преобразуйте объект в ассоциативный массив.
const associativeArray = new Map()
    for (let key in user) {
    associativeArray.set(key, user[key])
}
  console.log(associativeArray)

 













