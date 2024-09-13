function pattern1() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function pattern2() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
  }
}

function pattern2_2() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function pattern3() {
  let n = 5;
  for (let i = n; i > 0; i--) {
    let str = "* ";
    console.log(str.repeat(i));
  }
}

function pattern3_2() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function pattern4() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j < 4) {
        process.stdout.write("  ");
      } else {
        process.stdout.write("* ");
      }
    }
    console.log();
  }
}

function pattern4_2() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(n - i - 1), str.repeat(i + 1));
  }
}

function pattern5() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i > j) process.stdout.write("  ");
      else process.stdout.write("* ");
    }
    console.log();
  }
}

function pattern5_2() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(i), str.repeat(n - i));
  }
}

function pattern6() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == 1 || j == 1 || i == n || j == n) process.stdout.write("* ");
      else process.stdout.write("  ");
    }
    console.log();
  }
}

function pattern7(){
  let n =5;
  for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
      process.stdout.write(" ")
    }
    for(let k=0;k<n;k++){
      process.stdout.write("*")
    }
    console.log()
  }
}

// pattern1();
// pattern2();
// pattern2_2();
// pattern3();
// pattern3_2();
// pattern4();
// pattern4_2();
// pattern5();
// pattern5_2();
// pattern6();
pattern7();
