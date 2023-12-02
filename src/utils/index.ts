export function cleanArray(arr: any[]): any[] {
  return arr.filter((a) => a);
}

export function createClassName(
  classNames: (string | false | undefined)[]
): string {
  return cleanArray(classNames).join(" ");
}

export function interleave(arr: any[], separator: any) {
  return arr.flatMap((element, index) =>
    index < arr.length - 1 ? [element, separator] : [element]
  );
}
