# Name Length Calcualtor

puts 'What is your firstname?'
first_name = gets.chomp
puts 'Thanks, and your middle name?'
middle_name = gets.chomp
puts 'Got it, and your last name please?'
last_name = gets.chomp

first_name_length = first_name.length
middle_name_length = middle_name.length
last_name_length = last_name.length

total_name_length = first_name_length + middle_name_length + last_name_length

puts 'Hey, did you know your full name is ' + total_name_length.to_s + ' characters long?'

# Angry Boss Reply 

puts 'Whaddaya want?'
answer = gets.chomp
puts 'WHAT? ' + answer + ' HAHAHAHHA'

# r/rjust and center

lineWidth = 20
puts 'Table of Contents'.center(lineWidth)
puts ''
puts 'Chapter 1:  Numbers'.ljust(lineWidth) +     'page 1'.rjust(lineWidth)
puts 'Chapter 2:  Letters'.ljust(lineWidth) +    'page 72'.rjust(lineWidth)
puts 'Chapter 3:  Variables'.ljust(lineWidth) + 'page 118'.rjust(lineWidth)

