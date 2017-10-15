# 99 bottles of beer poem

def poem(num)
	bottle_count = num
	poem_line_one = " bottles of beer on the wall, "
	poem_line_two = " bottles of beer."
	poem_line_three = "Take one down pass it around, "
	poem_line_four = " bottles of beer on the wall."

	puts bottle_count.to_s + poem_line_one + bottle_count.to_s + poem_line_two
	bottle_count = bottle_count - 1
	puts poem_line_three + bottle_count.to_s + poem_line_four
	puts
end

verse_count = 0;
num = 99;
while verse_count < 99
	poem(num)
	verse_count = verse_count + 1
	num = num - 1
end

#Deaf Grandma

#Introduction and first response
correct_response = "NO, NOT SINCE 1983!"
incorrect_response = "HUH?! SPEAK UP SONNY!"

question = puts "Hello there sonny"
reply = gets.chomp

#User response logic
if reply == reply.capitalize
	puts correct_response
else
	puts incorrect_response
	while reply != reply.capitalize
		puts incorrect_response
		reply = gets.chomp
	end
	if reply == reply.capitalize
		puts correct_response
	end	

end

question_two = "WHATS THAT?!"
reply_two = gets.chomp

count = 0
while reply_two != "BYE" and count != 3	
	puts question_two
	reply_two = gets.chomp
	count = count + 1
end

puts "OH BYE THEN SONNY!"

#Leap Years

puts 'Input a starting year:'
start_year = gets.chomp
puts 'Input an ending year:'
end_year = gets.chomp
puts ''

while start_year.to_i <= end_year.to_i

if start_year.to_f%400 == 0
puts start_year
elsif start_year.to_f%100 == 0
elsif start_year.to_f%4 == 0
puts start_year
end

start_year = start_year.to_i + 1

end
