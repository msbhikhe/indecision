console.log('utils.js is running');

const a = 4;
const c = 3;
//Named export
export {
    a
}

//Incorrect name export
// export {
//     b : 5
// }

// Add export to declaration
export const d = 6;

// Incorrect
// export 'test'

//----------------------------------------
// Default Export 
// const Z = 10;
// export {a, Z as default};

//Invalid
// export default const Z =10;

//Valid inline 1
// const Z = 10;

// Valid inline 2
export default 11;

