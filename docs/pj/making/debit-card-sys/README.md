# 체크카드 시스템 구축
:::danger 진행상태
현재 **일시중단 중**인 프로젝트 입니다.
:::

|프로젝트 구분|버젼|사용 하드웨어|사용 소프트웨어|시작일|종료일|
|:--:|:--:|:--:|:--:|:--:|:--:|
| 자율 프로젝트 | v2.0.0 | 아두이노 | 아두이노<br>파이썬 | '20년 6월 10일 | 일시중단 |

## 청사진
### v1.0.0
***
```
----- : 유선연결
)) (( : 무선통신
                               디스플레이
                                   │
RFID 카드 )) (( RFID 센서 ----- 아두이노 ----- 컨트롤러
                                   │      │
                                배터리  SD카드
```
**시나리오**  
1. RFID 센서가 무선 통신을 바탕으로 RFID 카드의 ID를 읽습니다.
1. 아두이노는 이 정보를 바탕으로 SD카드에서 ID가 일치하는 회원을 찾아 디스플레이에 표시해줍니다. (디스플레이는 LCD 모니터 등을 이용합니다)
1. 전용 컨트롤러를 제작하여 포인트(화폐)를 추가할건지, 감소시킬건지, 리셋시킬것인지를 결정합니다.
    - 금액 변경을 원할 시, 변경하고자 하는 금액의 값을 컨트롤러를 통해 입력받습니다.
1. 변경사항을 저장할것인지, 취소할것인지 입력받습니다.
1. 해당 사항을 반영합니다.(SD카드에 저장-덮어쓰기)
  
### v1.1.0
***
```
----- : 유선연결
)) (( : 무선통신
                              PC(프로세싱)
                                   │
RFID 카드 )) (( RFID 센서 ----- 아두이노 ----- 컨트롤러
```
**변경사항**
- 이제 아두이노가 PC에 직접 연결됩니다.
  - 아두이노는 전력 공급과 저장공간 문제를 모두 PC로 해결할 수 있습니다. 즉, 배터리와 SD카드가 불필요해집니다.
  - 배터리와 SD카드를 위한 추가 회로 구성 및 예산 손실이 발생하지 않습니다.
  - 특히 SD카드의 경우, 리더기도 필요하기 때문에 다양한 문제를 야기하기 좋습니다.
  
- PC에 연결된 아두이노가 프로세싱으로 데이터를 전송하여, 프로세싱이 디스플레이를 대신합니다.
  - 훨씬 고화질의 디스플레이(컴퓨터 모니터)를 사용할 수 있습니다.
  - 훨씬 다양한 표현을 할 수 있습니다.
  - 디스플레이를 위한 추가 회로 구성 및 예산 손실이 발생하지 않습니다.
  
- 단점: 컴퓨터와 연결되어야 합니다.
  - 아두이노 자체만으로 구축되는 단일 시스템이 아닙니다. USB선을 통해 PC와 연결될 것이므로, 시스템 사용에 대해 거리적 제한이 생깁니다.
  - 이 시스템이 가동 중일 때, 컴퓨터로 다른 작업을 하기 어려울 수 있습니다. (이 부분은 사용자의 컴퓨터 시스템 숙련도에 영향을 받습니다.)

### v2.0.0
***
```
----- : 유선연결
)) (( : 무선통신
                               PC(파이썬)
                                   │
RFID 카드 )) (( RFID 센서 ----- 아두이노 ----- 키패드
```
**변경사항**  
- 프로세싱 대신 파이썬을 사용합니다.
  - 파이썬으로 그래픽 작업의 우위를 점합니다.
  - 코드 가독성을 올립니다.

## 개발 계획
1. v2.0.0을 먼저 제작할 생각입니다. 가장 이상적인 형태라고 생각되기 때문입니다.
1. v1.1.0을 아두이노-프로세싱 구성을 쓰고자 하는 사람들을 위해 구현할 예정입니다.
1. v1.0.0을 아두이노 단일 시스템 구현을 위해 시도할 것입니다.