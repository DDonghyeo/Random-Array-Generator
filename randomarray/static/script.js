var min = document.getElementById('min')
var max = document.getElementById('max')
var amount = document.getElementById('amount')
var checkbox = document.getElementById('checkbox')
var copybtn = document.getElementById("copy")

copybtn.addEventListener("click",copy)
min.addEventListener("keyup",check)
max.addEventListener("keyup",check)
amount.addEventListener("keyup",check)
checkbox.addEventListener("click",check)

function copy() {
    var obj = document.getElementById("result");
    var range = document.createRange();
    range.selectNode(obj.childNodes[0]);  //텍스트 정보를 Range 객체에 저장
    var sel = window.getSelection();
    sel.removeAllRanges();  //기존 선택정보 삭제
    sel.addRange(range);  //텍스트 정보 선택
    document.execCommand("copy");  //복사
    sel.removeRange(range);  //선택 정보 삭제
    alert("copied!");
  }

function isInt(num){
    return num %1 === 0;
}


function check(){
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    var amount = document.getElementById('amount').value
    var generate = document.getElementById('generate');
    var warning = document.getElementById('warning')

    //중복 허용 X일 경우
    if (!document.getElementById('checkbox').checked){
        if (( max - min + 1 )<amount){
            generate.disabled = true;
            warning.innerHTML = "범위만큼 생성할 수 없습니다.";
            warning.style.display = "block";
            return
        }
        else{
            generate.disabled = false;
            warning.style.display = "none"
        }
    }

    //최소값이 최대값보다 클 경우
    if(min>max){
        generate.disabled = true;
        warning.innerHTML = "최소값이 최대값보다 큽니다."
        warning.style.display = "block"
        return
    }else {
        generate.disabled = false;
        warning.style.display = "none"
    }

     //정수가 아닌 값이 입력됐을 경우
     if (!isInt(min) || !isInt(max) || !isInt(amount)){
        generate.disabled = true;
        warning.innerHTML = "정수만 입력 가능합니다."
        warning.style.display = "block"
        return
    }else {
        generate.disabled = false;
        warning.style.display = "none"
    }

    //아무 값을 입력하지 않았을 경우
    if (min == "" || max == "" || amount == "" || !isInt(min) || !isInt(max) || !isInt(amount)){
        generate.disabled = true;
        warning.innerHTML = "값을 입력해야 합니다."
        warning.style.display = "block"
    }else {
        generate.disabled = false;
        warning.style.display = "none"
    }
   
}



