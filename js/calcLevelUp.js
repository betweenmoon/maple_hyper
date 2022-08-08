function calc_amount_mob(cur_level, cur_exp_rate, mob_exp, exp_coupon, exp_weather, ex_gold, exp_potion, zero, elf, pendant, ring, burning, hyper, union, user, hunt) {
    cur_exp_rate = parseFloat(cur_exp_rate)
    cur_level = parseInt(cur_level)
    let addition_exp = 0;

    if (exp_coupon === "0");
    else if(exp_coupon === "1"){
        addition_exp += 50
    }
    else if(exp_coupon === "2"){
        addition_exp += 100
    }
    else if(exp_coupon === "3"){
        addition_exp += 200
    } // 경쿠

    if (exp_weather === "0");
    else if(exp_weather === "1"){
        addition_exp += 50
    } // 경뿌

    if (ex_gold === "0");
    else if(ex_gold === "1"){
        addition_exp += 10
    } // 익골

    if (exp_potion === "0");
    else if(exp_potion === "1"){
        addition_exp += 10
    } // 경축비

    if (exp_potion === "0");
    else if(exp_potion === "1"){
        addition_exp += 10
    } // 경축비

    if (zero === "0");
    else if(zero === "1"){
        addition_exp += 4
    }
    else if(zero === "2"){
        addition_exp += 6
    }
    else if(zero === "3"){
        addition_exp += 8
    } 
    else if(zero === "4"){
        addition_exp += 10
    } 
    else if(zero === "5"){
        addition_exp += 12
    } // 제로

    if (elf === "0");
    else if(elf === "1"){
        addition_exp += 10
    }
    else if(elf === "2"){
        addition_exp += 15
    } // 메르 링크

    if (ring === "0");
    else if(ring === "1"){
        addition_exp += 10
    } // 혈반

    if (burning === "0");
    else if(burning === "1"){
        addition_exp += 10
    }
    else if(burning === "2"){
        addition_exp += 20
    }
    else if(burning === "3"){
        addition_exp += 30
    }
    else if(burning === "4"){
        addition_exp += 40
    }
    else if(burning === "5"){
        addition_exp += 50
    }
    else if(burning === "6"){
        addition_exp += 60
    }
    else if(burning === "7"){
        addition_exp += 70
    }
    else if(burning === "8"){
        addition_exp += 80
    }
    else if(burning === "9"){
        addition_exp += 90
    }
    else if(burning === "10"){
        addition_exp += 100
    } // 필드 버닝

    addition_exp += parseFloat(hyper) // 하이퍼
    addition_exp += parseFloat(union) // 유니온 점령
    addition_exp += parseFloat(user) // 추가

    

    mob_exp = Math.round(parseInt(mob_exp) * (1 + addition_exp * 0.01))

    if(cur_exp_rate >= 100 || cur_exp_rate < 0){
        return "유효하지 않은 경험치 % 값입니다."
    }

    let cur_exp_amount = exp_table[cur_level] * (cur_exp_rate * 0.01); // 현재 경험치량

    let remain_exp = exp_table[cur_level] - cur_exp_amount

    let amount_mob = Math.round(remain_exp / mob_exp)

    return amount_mob

}