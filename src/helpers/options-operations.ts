export interface OperationOption {
  value: string;
  label: string;
}

export const alphabetOptions: OperationOption[] = [
  { value: "union", label: "Unión" },
  { value: "intersection", label: "Intersección" },
  { value: "membership", label: "Pertenencia" },
  { value: "complement", label: "Complemento" },
  { value: "symmetricDifference", label: "Diferencia Simetrica" },
  { value: "difference", label: "Diferencia Absoluta" },
];

export const stringOptions: OperationOption[] = [
  { value: "concatenation", label: "Concatenacion" },
  { value: "length", label: "Longitud" },
  { value: "power", label: "Potenciacion" },
  { value: "reverse", label: "Inversa" },
];

export const languageOptions: OperationOption[] = [
    { value: "languageConcatenation", label: "Concatenacion" },
    { value: "languagePower", label: "Potenciacion" },
];
