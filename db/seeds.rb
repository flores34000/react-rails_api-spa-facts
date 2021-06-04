# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Fact.create(text:'5g causes covid', stars:1, source:'google', username: 'flo')
Fact.create(text:'world is flat', stars:1, source:'internet', username: 'flo')
Fact.create(text:'armadillos is a bullet proof', stars:0, source:'google', username: 'larry')
Fact.create(text:'Some fungi create a zombies', stars:3, source:'https://www.uu.nl/en/news/how-a-fungus-turns-ants-into-zombies#:~:text=The%20fungus%20Ophiocordyceps%20camponoti%2Dfloridani,branch%2C%20attaching%20themselves%20until%20death.', username: 'tim')
Fact.create(text:'text secret', stars:1, source:'http://getsecret.co/', username: 'flo')

puts "seeded facts size : #{Fact.all.size}"