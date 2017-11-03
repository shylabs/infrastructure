import myfitnesspal
import json
client = myfitnesspal.Client('steviehuh')
day = client.get_date(2017, 11, 3) 

#print(type(day.meals))
#print(day) #Shows overall macros
#print(day.meals) #Meals in a list
#print(day.meals[0]) #Individual meal
#print(day.water) #Liquid intake

print(day.totals)
