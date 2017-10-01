# Name Printer

puts 'Hello what is your first name?'
first_name = gets.chomp
puts 'Do you have a middle name?'
middle_name = gets.chomp
puts 'What is your surname?'
last_name = gets.chomp

puts 'Thanks for that ' + first_name + '. We can see your full name is ' + first_name + ' ' + middle_name + ' ' + last_name

# Favourite Number 

puts 'What is your favourite number?'
fav_num = gets.chomp
new_fav_num = fav_num.to_i + 1
puts 'Not bad... but how about ' + new_fav_num.to_s + '?'