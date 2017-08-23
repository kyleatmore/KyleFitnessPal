# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
kyle = {
  email: "kyledemo@gmail.com",
  password: "password",
  height: 70,
  gender: "M",
  birth_date: Date.new(1989, 9, 5),
  username: "Kyle",
}

User.create(kyle)
