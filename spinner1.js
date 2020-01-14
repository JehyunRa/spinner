for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    if (i === 0) process.stdout.write('\r|   ');
    else if (i % 4 === 1) process.stdout.write('\r|   ');
    else if (i % 4 === 2) process.stdout.write('\r/   ');
    else if (i % 4 === 3) process.stdout.write('\r-   ');
    else process.stdout.write('\r\\   ');
  }, i * 100);
}
