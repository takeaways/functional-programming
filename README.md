"# functional-programming"

## 성공적인 프로그래밍
1. 모든 프로그래밍 패러다임은 성공적인 프로그래밍을 위해 존재한다.
1. 성공적인 프로그래밍은 좋은 프로그램을 만드는 일이다.
1. 좋은 프로그램은 사용성, 성능, 확장성, 기획 변경에 대한 대응력이 좋다.
1. 이것들을 효율적이고 생상적으로 이루는 일이 성공적인 프로그래밍 이다.


## 함수형 프로그래밍 (평가시점..)
### 함수형 프로그래밍은 성공적이 프로그래밍을 위해 부수 효과를 미워하고 조합성을 강조하는 프로그래밍 패러다임이다.
<br/>
    1. 부수 효과를 미워한다 : 순수함수를 만든다 (수학적함수) -> 들어온 인자가 같으면 항상 같은 값을 내며, 외부에 영향을 주지 않으며 리턴값 외 외부와 연결되지 않는다.<br/>
    2. 조합성을 강조한다 : 모듈화 수준을 높인다. -> 오류는 적고 안정성을 높인다. -> 생산성을 높인다

##### 순수함수
<pre>
<code>
  /* 순수함수 */

  function add(a,b){
    return a+b;
  }
  console.log( add(10,10) );
  /////////////////////////////////////////////////////////////////////////////
  let c = 10; // c가 변화 할 수 있다고 가정한다면, add2는 순수함수라고 할 수 없다.
  function add2(a,b){
    return a + b + c;
  }
  console.log( add(10,20) ); //40
  c = 20;
  console.log( add(10,20) ); // 50
  /////////////////////////////////////////////////////////////////////////////
  let c = 20;
  function add3(a,b){
    c = b;
    return a+b; //출력외 외부 상태에 관여 -> 부수 효과발생 순수함수가 아니다.
  }
  console.log(c);
  console.log( add3(10,30) );
  console.log(c)
  console.log( add3(10,30) );

  /////////////////////////////////////////////////////////////////////////////
  const obj1 = {val :10};
  function add4(obj, b){
    obj.val += b;
  }
  console.log(obj1.val);
  add4(obj1,20);
  console.log(obj1,val); //값이 변경 순수 함수가 아니다.

  /////////////////////////////////////////////////////////////////////////////
  //다시 순수 함수
  const obj1 = {val : 10};
  function add5(obj, b){ //인자로 받은 값도, 외부에 영향도 주지 않고 있다.
    return {
      val: obj.val + b
    }
  }
  const obj2 = add5(obj1, 20); //초기값을 유지 하지않고 인자로 받은 값을 변경하지 않으며 프로그래밍


  <br/>
  /*일급함수*/
  함수를 인자로 사용할 수 있다.
</code>
</pre>

##### 일급함수
<pre>
<code>
  //함수를 값으로 다룰 수 있는 개념.
  const f1 = function(a) {return a*a};
  console.log(f1(10));

  const f2 = add;
  console.log(add);

  function f3(f){
    return f();
  }
  cosole.log(f3(function(){return 10}));
  cosole.log(f3(function(){return 20}));

  //add_maker//
  function add_maker(a){
    return function(b){ //a 값에 대한 클로저
      return a + b; //순수 함수가 된다.
    }
  }
  const add10 = add_maker(10);
  console.log(add10(3)); //13
  const add5 = add_maker(5);
  console.log(add5(10)); // 15

  function f4(f1, f2, f3){
    return f3(f1() + f2());
  }
  f4( function () {return 2;}, function() {return 3;}, function(a){return a*a});
</code>
</pre>

## 요즘 개발 이야기
#### 그렇지만 타협할 수 없는 생산성
<b>함수형 프로그래밍</b>은 애플리케이션, 함수의 구성요소, 더 나아가서 언어자체를 함수처럼 여기도록 만들고,
이러한 <b>함수 개념을 가장 우선순위</b>에 놓는다.
1. 좋아지는 하드웨어 성능
1. 좋아지는 컴파일러
1. 함수형 프로그래밍 기술
1. 좋아지는 분산 / 리액티브 환경
1. 동시성 + 병렬성 관련 기술
1. 성공적인 적용 사례와 영향
<table>
  <tr>
    <th>재미 / 실시간성 </th><td> 라이브 방송, 실시간 댓글, 협업, 메신저</td>
  </tr>
  <tr>
    <th>독창성 / 완성도 </th><td> 애니메이션, 무한 스크롤, 벽돌</td>
  </tr>
  <tr>
    <th>더 많아져야하는 동시성</th><td> 비동기 I/O, CSP, Actor, STM...</td>
  </tr>
  <tr>
    <th>더 빨라야하는 반응성 / 고가용성(절대 죽지않는 서비스)</th><td>ELB, Auto Scaling, OTP Supervisor.. </td>
  </tr>
  <tr>
    <th>대용량 / 정확성 / 병렬성</th><td>MapReduce, Clojure Reducers... </td>
  </tr>
  <tr>
    <th>복잡도 / MSA / ...</th><td> 많아지고 세밀해지는 도구들</td>
  </tr>
</table>

##### 다형성
1. 매서드 : 객체의 상태에 따른 결과가 달라진다. 순수 함수가 아니다.
 - 매서드는 객체 지향이다.
<pre>
<code>
  const all = documet.querySelectAll("*");
  all.map // map is not a function 메서드는 다형성을 지원하기 어렵다.
</code>
</pre>
