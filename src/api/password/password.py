import random


def generate_password():

    includedSets = []
    passwordArray = []

    lowerCase = list(map(chr, range(97, 123)))
    upperCase = [str(chr).upper() for chr in lowerCase]

    includedSets.append(lowerCase)
    includedSets.append(upperCase)
    # includedSets += upperCase[:]

    for x in range(8):
        random_num1 = random.randint(0,1)
        random_num2 = random.randint(0,25)       

        passwordArray.append(includedSets[random_num1][random_num2])
    
    return passwordArray
