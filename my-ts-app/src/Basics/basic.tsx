export let username: string = "Radhika Kapoor";
export let age: number = 20;
export let isActive: boolean = true;

export let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
export let mark: number = 85;
export let subjects: string[] = ["Math", "Science", "History", "English"];
export let marks: number[] = [90, 80, 70, 80];

// Tuple — fixed length, fixed types ka array
export let student: [string, number] = ["Radhika", 6]; // [name, semester]

// any — TS ka "type check mat karo" wala escape hatch (avoid karo jitna ho sake)
export let randomThing: any = "kuch bhi ho sakta hai";

// unknown — safer version of any, use karne se pehle check karna padta hai
export let mysteryValue: number = 42;
export let unknownValue: unknown = "something unknown";