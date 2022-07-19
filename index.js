function scuberGreetingForFeet(distance){
  if (distance < 400) {
    return 'This one is on me!'
  } else if (distance > 2500) {
    return 'No can do.'
  } else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'That will be twenty bucks.'
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  // if (city === 'NYC') {
  //   return 'Ok, sounds good.'
  // } else {
  //   return 'No go.'
  // }
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
  // if (tip === 'generous') {
  //   return 'Thank you so much.'
  // } else if (tip === 'not as generous') {
  //   return 'Thank you.'
  // } else {
  //   return 'Bye.'
  // }
}