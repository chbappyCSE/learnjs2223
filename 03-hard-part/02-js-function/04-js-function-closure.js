function temporary() {
    let counter = 0;

    return function plus() {
        counter += 1;
    }
}

const add = temporary(); // add is a function at the end

add();
add();