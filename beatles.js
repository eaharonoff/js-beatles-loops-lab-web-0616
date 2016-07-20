function theBeatlesPlay(musicians, instruments) {
  beatle_array = []
  for(let i = 0; i < musicians.length; i++) {
    beatle_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatle_array
}

function johnLennonFacts(fact_arr) {
  for(let i = 0; i <fact_arr.length; i++) {
    fact_arr[i]+="!!!"
  }
  return fact_arr
}

function iLoveTheBeatles(n) {
  beatles_love = []
  do{
    beatles_love.push("I love the Beatles!")
    n+=1
  }while(n < 15);

  return beatles_love
}