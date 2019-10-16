function _filter(list, predi){
  const new_list = [];
  _each(list, function(val){
    if(predi(val)) new_list.push(val);
  })
  return new_list;
}

function _map(list, mapper){
  const new_list = [];
  _each(list, function(val){
    new_list.push(mapper(val));
  })
  return new_list;
}

function _each(list, iter){
  for(let i = 0 ; i < list.length ; i++){
    iter(list[i]);
  }
  return list
}
