export function isValidParentheses(s: string): boolean {
    const stack: string[] = [];
    const brackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };


    for (const char of s) {
        // วงเล็บเปิด ให้เอาเข้า stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } 
        // วงเล็บปิด
        else if (char === ')' || char === ']' || char === '}') {
            // ตรวจสอบว่า stack ว่าง หรือวงเล็บเปิดตัวล่าสุดไม่ตรงคู่กันหรือไม่
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }
    
    // ถ้าตรวจครบแล้ว stack ว่างเปล่า แสดงว่าวงเล็บครบคู่พอดี
    return stack.length === 0;
    
}
// console.log(isValidParentheses("({")); // false
// console.log(isValidParentheses("({[]})")); // true