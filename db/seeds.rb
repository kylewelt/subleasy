# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

text = "Spacious, elegant, and majestic, this enormous 2125 sqft apartment features marble counter tops, Viking stainless steel appliances, bamboo floors and cabinets, deluxe bathrooms, featuring standing glass showers and beautiful soaking tub options, walk-in closets, and sweeping views of the Hudson River. Just as exquisite as it is practical, this gorgeous apartment is the epitome of Manhattan real estate heaven!"

u = User.create(first_name: 'Carl', last_name: 'Person', email: 'c@example.com', password: 'dragons')

l = Location.create(lat: 40.7128, long: -74.0059)

s = Sublet.create(name: "Cool Digz", owner: u, price: 4000, start_date: Date.parse('Aug 1, 2017'), end_date: Date.parse('Jan 1, 2018'), location: l, description: text)

s.images << Image.create(url: 'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975', caption: "room")

u2 = User.create(first_name: 'Second', last_name: 'People', email: 's@example.com', password: 'dragons')

l2 = Location.create(lat: 43.7128, long: -76.0059)

s2 = Sublet.create(name: "Random Digz", owner: u2, price: 6000, start_date: Date.parse('Sep 1, 2017'), end_date: Date.parse('Sep 1, 2018'), location: l2, description: text)

s2.images << Image.create(url: 'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975', caption: "room")
