/*
    @Function to calculate the length of a string
*/
export function lengthOfString(str: string): number {
    return str.length;
}

/*
    @Function to concatenate two strings
*/
export function concatenation(str1: string, str2: string): string {
    return str1 + str2;
}

/*
    @Function to calculate the power of a string
*/
export function powerOfString(str: string, power: number): string {
    return str.repeat(power);
}

/*
    @Function to reverse a string
*/
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}