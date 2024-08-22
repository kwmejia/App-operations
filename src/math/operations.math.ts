export type CharSet = Set<string>;

/*
    @Function to calculate the union of two sets
*/
export function union(a: CharSet, b: CharSet): string {
  return Array.from(new Set([...a, ...b])).join(", ");
}

/*
    @Function to calculate the intersection of two sets
*/
export function intersection(
  setA: Set<string>,
  setB: Set<string>
): Set<string> {
  const intersectionSet = new Set<string>(
    [...setA].filter((element) => setB.has(element))
  );
  return intersectionSet;
}

/*
    @Function to check if an element is a member of a set
*/
export function membership(element: string, set: CharSet): boolean {
  return set.has(element);
}

/*
    @Function to calculate the complement of a set
*/
export function complement(setA: CharSet, universal: CharSet): string {
  const complementSet = new Set<string>(
    [...universal].filter((element) => !setA.has(element))
  );
  return Array.from(complementSet).join(", ");
}
/*
    @Function to calculate the symmetric difference of two sets
*/
export function symmetricDifference(
  setA: Set<string>,
  setB: Set<string>
): string {
  const diffAB = new Set([...setA].filter((x) => !setB.has(x)));
  const diffBA = new Set([...setB].filter((x) => !setA.has(x)));
  const result = new Set([...diffAB, ...diffBA]);
  return Array.from(result).join(", ");
}

/*
    @Function to calculate the difference of two sets
*/
export function difference(setA: Set<string>, setB: Set<string>): string {
  const differenceSet = new Set([...setA].filter(x => !setB.has(x)));
  return Array.from(differenceSet).join(', ');
}

