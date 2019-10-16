const users = [
  {id: 1, name:'ID1', age:22},
  {id: 2, name:'ID2', age:25},
  {id: 3, name:'ID3', age:26},
  {id: 4, name:'ID4', age:27},
  {id: 5, name:'ID5', age:24},
  {id: 6, name:'ID6', age:22},
  {id: 7, name:'ID7', age:20},
  {id: 8, name:'ID8', age:22},
]

//1. 명령형 코드
 //1. 25세 이상인 user를 거른다.
const over_25 = users.filter( user => user.age >= 25  );
console.log(over_25);
//2. 25세 이상인 user name을 수집한다.
const nams = over_25.map( user => user.name);
console.log(names);
//3 25 미만인 user를 거른다.
const under_25 = users.filter( user => user.age < 25  );
console.log(under_25);
//4 25 미만 나이.
const ages = under_25.map( user => user.age);
console.log(ages);


//2. 함수형 코드
  //응용형 함수 : 함수를 인자로 받아서 원하는 시점에 값을 적용
  //고차함수 : 함수를 인자로 받거나, 함수를 리턴, 함수를 내부에서 사용
  function _filter(list, predi){
    const new_list = [];
    for(let i = 0 ; i < list.length ; i++){
      if(predi(list[i])){
        new_list.push(list[i]);
      }
    }
    return new_list;
  }

  _filter(users, function(user){return user >= 25;});
  _filter([1,2,3,4], function(num){return !(num%2); });

  function _map(list, mapper){
    const new_list = [];
    for(let i = 0 ; i < list.length ; i++){
      new_list.push(mapper(list[i]));
    }
    return new_list;
  }

  console.log(_map(users, function(user){return user.name}));
  console.log(_map(users, function(user){return user.age}));
