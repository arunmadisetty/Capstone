# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Image.destroy_all
# RealEstateDatum.destroy_all
# School.destroy_all
# SavedSearch.destroy_all

User.create(name: "Arun", email: "arun@email.com", password: "password")
User.create(name: "Nikhil", email: "nikhil@email.com", password: "password")

# real_estate_ids =[]
RealEstateDatum.create(neighborhood: "Lakeview", avg_home_price: 500000, avg_rent: 2200, crime: 83, median_age: 32)
RealEstateDatum.create(neighborhood: "Lincoln Park", avg_home_price: 600000, avg_rent: 2300, crime: 89, median_age: 30)
RealEstateDatum.create(neighborhood: "Roscoe Village", avg_home_price: 700000, avg_rent: 2400, crime: 77, median_age: 38)
RealEstateDatum.create(neighborhood: "West Loop", avg_home_price: 800000, avg_rent: 2500, crime: 90, median_age: 28)

# RealEstateDatum.all.each do |item|
#   real_estate_ids << item.id
# end

# id = real_estate_ids[0]

School.create(name:"Burley", real_estate_datum_id: 1, address: "Fake st", level: "elementary", tier_rank: "1+", total_size: 500, grad_rate: 90, act_scores: 0, gifted_program: "Yes")
School.create(name:"Blaine", real_estate_datum_id: 1, address: "Make st", level: "elementary", tier_rank: "1+", total_size: 600, grad_rate: 80, act_scores: 0, gifted_program: "Yes")
School.create(name:"Lakeview High School", real_estate_datum_id: 1, address: "Plake st", level: "high school", tier_rank: "2", total_size: 1700, grad_rate: 70, act_scores: 16, gifted_program: "No")
School.create(name:"Prescott", real_estate_datum_id: 1, address: "Stake st", level: "elementary", tier_rank: "1", total_size: 900, grad_rate: 78, act_scores: 0, gifted_program: "No")

Image.create(url: "some image url here", school_id: 1)
Image.create(url: "some other image url here", school_id: 2)

SavedSearch.create(user_id: 1, school_id: 2)
SavedSearch.create(user_id: 2, school_id: 2)
SavedSearch.create(user_id: 1, school_id: 3)
SavedSearch.create(user_id: 2, school_id: 4)
SavedSearch.create(user_id: 1, school_id: 4)
