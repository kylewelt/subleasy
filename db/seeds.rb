# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

text = "I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. I am a string. "

u = User.create(first_name: 'Carl', last_name: 'Person', email: 'c@example.com', password: 'dragons')

l = Location.create(long: 40.7128, lat: 74.0059)

s = Sublet.create(name: "Cool Digz", owner: u, price: 4000, start_date: Date.parse('Aug 1, 2017'), end_date: Date.parse('Jan 1, 2018'), location: l, description: text)

s.images << Image.create(url: 'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975')

u2 = User.create(first_name: 'Second', last_name: 'People', email: 's@example.com', password: 'dragons')

l2 = Location.create(long: 49.7128, lat: 94.0059)

s2 = Sublet.create(name: "Random Digz", owner: u2, price: 6000, start_date: Date.parse('Sep 1, 2017'), end_date: Date.parse('Sep 1, 2018'), location: l2, description: text)

s2.images << Image.create(url: 'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975')
