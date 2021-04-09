function quadratic() {
    let a = +(document.getElementById("a").value);
    let b = +(document.getElementById("b").value);
    let c = +(document.getElementById("c").value);
    let delta = b * b - 4 * a * c;
    let x = -b / 2 * a;
    let x1 = (-b + delta) / 2 * a;
    let x2 = (-b - delta) / 2 * a;
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById("kq").innerHTML = "phương trình vô số nghiệm ";
            }
            else {
                document.getElementById("kq").innerHTML = "phương trình vô nghiệm";
            }
        }
        else {
            document.getElementById("kq").innerHTML = "phương trình có nghiệm là " + -c / b;
        }
    }
    else {
        if (delta < 0) {
            document.getElementById("kq").innerHTML = "phương trình vô nghiệm";
        }
        else if (delta == 0) {
            document.getElementById("kq").innerHTML = "phương trình có nghiệm kép x1=x2 = " + x;
        }

        document.getElementById("kq").innerHTML = "phương trình có hai ngiệm x1, x2 là " + x1; + x2;

    }

}