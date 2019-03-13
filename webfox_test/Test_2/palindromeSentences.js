function palindrome(sentence) {
  var rex = /[^A-Za-z0-9]/g;
  var getLowerCase = sentence.toLowerCase().replace(rex, '');
  var split = getLowerCase.split('');
  var reverse = split.reverse().join('');
  return reverse === getLowerCase;
}

//True Tests:
palindrome("Dammit I'm madEvil is a deed as I live.God, am I reviled?I rise, my bed on a sun, I melt.To be not one man emanating is sad. I piss.Alas it is so late. Who stops to help? Man, it is hot. I'm in it.I tell.I am not a devil.I level 'Mad Dog'.Ah, say burning is as a deified gulpin my halo of a mired rum tin.I erase many men. Oh, to be man, a sin.Is evil in a clam? In a trap?No. It is open.On it I was stuck. Rats peed on hope.Elsewhere dips a web.Be still if I fill its ebb.Ew, a spider ... eh?We sleep. Oh no!Deep, stark cuts saw it in one position.Part animal, can I live? Sin is a name.Both, one ... my names are in it. Murder?I'm a fool. A hymn I plug,Deified as a sign in ruby ash - a Goddam level I lived at. On mail let it in. I'm it.Oh, sit in ample hot spots.Oh, wet!A loss it is alas (sip). I'd assign it a name.Name not one bottle minus an ode by me:'Sir, I deliver. I'm a dog.'Evil is a deed as I live.Dammit I'm mad.");
palindrome("tattarrattat");
palindrome("Able was I ere I saw Elba");
palindrome("A Santa dog lived as a devil god at NASA.");
palindrome("A fool, a tool, a pool; LOOPALOOTALOOFA!");
palindrome("Cigar? Toss it in a can. It is so tragic.");
palindrome("Degas, are we not drawn onward, no? In union, drawn onward to new eras aged?");
palindrome("Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.");
palindrome("Zoos, Otto & Sooz.");
palindrome("Won't lovers revolt now?");
palindrome("Too bad I hid a boot.");
palindrome("We__few.");
palindrome("                    ");
palindrome("Rats peed on hope.Elsewhere dips a web.Be still if I fill its ebb.Ew, a spider ... eh?We sleep.");
palindrome("Do I, like, look like I do?");
palindrome("King, are you glad you are king?");
palindrome("UFO tofu.");
palindrome("'Regal as tide', Kramer remarked. 'It's a lager!'");
palindrome("Hm... SMH!");
palindrome("Do good? I? No. Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I. Lo! Rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God.");

//False Tests:
palindrome("aeteweww ");
palindrome("Nothing beats a complete sentence.");
palindrome("And, if there's a subject");
palindrome("document.getElementById");
palindrome("Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.");
palindrome("Isn't language learning fun?");
palindrome("Of all the places to travel, Mexico is at the top of my list.");
palindrome("I ate dinner.");
palindrome("We_83_83_we");
palindrome("blablabla");
palindrome("They punctuate clauses within a complete sentence");
