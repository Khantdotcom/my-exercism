export function toRna(s: string) {
  const dna : Record<string,string> = {"T": "A",
              "A" : "U",
               "C": "G",
               "G": "C"
              }
  let result = "";
  for (const chr of s){
    let trans: string = dna[chr];
    if (!trans) throw new Error("Invalid input DNA.");
    result += trans;
}

  return result;
}
