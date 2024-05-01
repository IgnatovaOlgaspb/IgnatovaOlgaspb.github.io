// todo: решить Задача 2 см. lesson9.pdf

class Car {
   constructor(f, c) {
      this.fuel = f
      this.consumption = c
      console.log('Машина создана. Бак заправлен на ' + this.fuel + 'л. ' + 'Расход топлива на 100 км составляет ' + this.consumption + '%.')
   }
   reFuel(q) {
      let diff = (this.fuel + q) - 100
      this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
      return (this.fuel + q) > 100 ? diff : 0
   }
   go(distance) {
      let rashod = this.fuel * (distance / 100) * (this.consumption / 100)
      this.fuel = this.fuel - rashod
      console.log('Расстояние, которое проехал автомобиль: ' + distance + 'км.')
      console.log('Расход топлива на установленную дистанцию составил: ' + rashod + 'л.')
      console.log('Текущий запас топлива:' + this.fuel + 'л.')
    
   }
   getFuelLevel() {
      return this.fuel
   }
}

   let mercedesBenz = new Car(71, 15)
   mercedesBenz.go(199)
   mercedesBenz.getFuelLevel()