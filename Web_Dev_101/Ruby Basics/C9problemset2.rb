puts ''
class OrangeTree

	def initialize

    	@age        = 0
	    @height     = 2 
	    @fruit      = 0 

	    puts ' A new Orange tree is planted.'
	    puts ' It is ' + @age.to_s + ' years old.'
	    puts ' It is ' + @height.to_s + ' feet tall.'
	    puts ' It has ' + @fruit.to_s + ' fruit.'
	    puts ''
	
	end

	def treeDie 

 	 	if @age >= 19
 	 		puts ' The Tree is too old, it has died.'
 	 		puts ''
 	 		exit
 	 	end

 	end

  	def ageYear

  		puts ' A Year has passed'
  		puts ' The Orange tree is now ' + @age.to_s + ' year(s) old'
  		puts ' The Orange tree is now ' + @height.to_s + ' feet tall'

  		@age += 1
  		if @height < 16
  			@height += 1
  		end

  		if @age < 4 
  			puts ' The Tree is young and grows quickly, it has grown quicker'
  			@height += 1 
  		end

  		puts ' The fruit picking season is now over! All of the fruit fall off the tree'
  		@fruit = 0

  		puts ''
  
 	end

 	def growFruit

 	 	if @age >= 3
 	 		@fruit += rand(9)
 	 		puts ' ' + @fruit.to_s + ' Fruit appear on the branches'
 	 	end

 	end

 	def countOranges

 	 	puts ' The tree has ' + @fruit.to_s + ' oranges.'

 	end

 	def pickOrange

 	 	if @fruit >= 1
 	 		puts ' There is fruit on the tree! You pick one and eat it, it is delicious.'
 	 		@fruit -= 1
 	 		puts ' There is now only ' + @fruit.to_s + ' left on the tree.'
 	 	else
 	 		puts ' There isnt any fruit to pick!'
 	 	end

 	end


end

tree = OrangeTree.new

count = 0
while count < 50
	tree.ageYear
	tree.treeDie
	tree.growFruit
	tree.countOranges
	tree.pickOrange
	count += 1
end




