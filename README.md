1.
The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

For words beginning with a vowel, add "ay" to the end.
2.
The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
3.
The program adds "ay" to single-letter words beginning with one or more consonants. It moves all of the first consecutive consonants to the end and then adds the "ay".
Example Input: Kate
Example Output: atekay

If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
4.
The program moves the "u" along with the "q" when they are consecutive and within the first consonants (example "squeal") at the beginning of single letter words.
Example Input: squeal
Example Output: sealqu

For words beginning with a vowel, add "ay" to the end.
5.
The program does not add "ay" to single-letter words beginning with a "y" as it is treated as a consonant.
Example Input: yawn
Example Output: yawn
