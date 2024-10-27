let triangleHeight = 4; // You can adjust this to make the triangle taller or shorter.

// Loop to print the upper part of the triangle
for (let i = 1; i <= triangleHeight; i++) {
    console.log("#".repeat(i));
}

// Loop to print the lower part of the triangle
for (let i = triangleHeight - 1; i >= 1; i--) {
    console.log("#".repeat(i));
}
