nextNumber:
for (let i = 1; i < 101; i++) {

  for (let j = 2; j < i; j++) {
      if (i % j ==  0) continue nextNumber;
  }
  console.log(i +  ' - делитель этого числа 1 и ' + i);
}
