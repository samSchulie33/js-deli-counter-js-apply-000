function takeANumber(katzDeliLine,newName){
  return ('Welcome, '+newName+'. You are number '+katzDeliLine.length+1+' in line.');
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else{
    return katzDeliLine[0] 
    katzDeliLine.shift();
  }
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  else{
    let lineOrder=[];
    
  }
}
