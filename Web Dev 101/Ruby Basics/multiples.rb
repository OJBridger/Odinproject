# PROBLEM 1

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
# The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

topFigure = 1000	
currentFigure = 0
sum = 0 

while currentFigure < topFigure
	if currentFigure % 3 == 0
		sum += currentFigure
	elsif currentFigure % 5 ==0
		sum += currentFigure
	end
	currentFigure += 1
end

puts sum.to_s





