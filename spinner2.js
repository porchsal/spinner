const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\n'];
  for(let i = 0; i < array.length; i++){
    setTimeout(() => {
    process.stdout.write(array[i]);
    }, (150 + i * 150));
}

