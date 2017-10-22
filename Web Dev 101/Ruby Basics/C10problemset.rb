# Grandfather Clock
def clock proc1

#convert hours to 12 hour format
	current_hour = Time.new.hour
	if current_hour == 0
	current_hour = current_hour + 12
	elsif current_hour > 12
	current_hour = current_hour - 12
	end

#call the proc the number of hours passed
	current_hour.to_i.times do
	proc1.call
	end

end 

# Dong proc
dong_proc = Proc.new do
puts 'DONG!'
end

clock dong_proc

# Logger

def log block_description, &block
	puts 'Beginning "'+block_description+'" . . .' 
	value_returned = block.call
	puts '. . . "'+block_description+'" finished, returning:'
	puts value_returned
	end

	log 'outer block' do

	log 'some little block' do
	5
	end

	log 'yet another block' do
	'I like Thai food!'
	end

	false
end

# Better Logger

$nesting_depth = 0
$space = ' '

def log block_description, &block
	puts $space*$nesting_depth + 'Beginning "'+block_description+'" ...'
	$nesting_depth = $nesting_depth + 1
	value_returned = block.call
	$nesting_depth = $nesting_depth - 1 
	puts $space*$nesting_depth + '... "'+block_description+'" finished, returning:'
	puts $space*$nesting_depth + value_returned.to_s
	end

	log 'outer block' do

	log 'some little block' do

	log 'teeny-tiny block' do
	'lots of love'
	end

	42
	end

	log 'yet another block' do
	'I love Indian food!'
	end

	true
end

