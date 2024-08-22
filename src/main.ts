import "./helpers/events";
import {
  complement,
  difference,
  intersection,
  membership,
  symmetricDifference,
  union,
} from "./math/operations.math";
import {
  concatenation,
  lengthOfString,
  powerOfString,
  reverseString,
} from "./math/string-operations";
import { concatenateLanguages,powerOfLanguage } from "./math/language-operations";

const btnSend = document.getElementById("btn-send");
btnSend!.addEventListener("click", calculate);

function calculate() {
  const operation = (document.getElementById("operation") as HTMLSelectElement)
    .value;
  const inputA = (document.getElementById("inputA") as HTMLInputElement).value;
  const inputB = (document.getElementById("inputB") as HTMLInputElement).value;
  const resultElement = document.getElementById("resultText")!;

  let result: any = "";
  switch (operation) {
    case "union":
      const setA = new Set(inputA.split(",").map((s) => s.trim()));
      const setB = new Set(inputB.split(",").map((s) => s.trim()));
      result = union(setA, setB);
      break;

    case "intersection":
      const intersectSetA = new Set(inputA.split(",").map((s) => s.trim()));
      const intersectSetB = new Set(inputB.split(",").map((s) => s.trim()));
      result = intersection(intersectSetA, intersectSetB);
      break;
    case "membership":
      const checkSet = new Set(inputA.split(",").map((s) => s.trim()));
      result = membership(inputB.trim(), checkSet);
      result = `El elemento ${inputB.trim()} ${
        result ? "pertenece" : "no pertenece"
      } al conjunto.`;
      break;

    case "complement":
      const activeSet = new Set(inputA.split(",").map((s) => s.trim()));
      const universalSet = new Set(inputB.split(",").map((s) => s.trim()));
      result = complement(activeSet, universalSet);
      result = `Complemento del conjunto: ${result}`;
      break;

    case "symmetricDifference":
      const symDiffSetA = new Set(inputA.split(",").map((s) => s.trim()));
      const symDiffSetB = new Set(inputB.split(",").map((s) => s.trim()));
      result = `Diferencia simétrica: ${symmetricDifference(
        symDiffSetA,
        symDiffSetB
      )}`;
      break;

    case "difference":
      const diffSetA = new Set(inputA.split(",").map((s) => s.trim()));
      const diffSetB = new Set(inputB.split(",").map((s) => s.trim()));
      result = `Diferencia: ${difference(diffSetA, diffSetB)}`;
      break;

    case "length":
      result = `Longitud: ${lengthOfString(inputA)}`;
      break;

    case "concatenation":
      result = `Concatenación: ${concatenation(
        inputA.toString(),
        inputB.toString()
      )}` as string;
      break;

    case "power":
      const power = parseInt(inputB, 10);
      if (!isNaN(power)) {
        result = `Potenciación: ${powerOfString(inputA, power)}`;
      } else {
        result = "Error: El segundo parámetro debe ser un número entero.";
      }
      break;

    case "reverse":
      result = `Inversa: ${reverseString(inputA)}`;
      break;

    case "languageConcatenation":
      const setConcatenationA = new Set(inputA.split(",").map((s) => s.trim()));
      const setConcatenationB = new Set(inputB.split(",").map((s) => s.trim()));
      result = `Concatenación de Lenguajes: ${Array.from(
        concatenateLanguages(setConcatenationA, setConcatenationB)
      ).join(", ")}`;
      break;
    case "languagePower":
      const setlanguageA = new Set(inputA.split(",").map((s) => s.trim()));
      const powerLanguage = parseInt(inputB, 10);
      if (!isNaN(powerLanguage)) {
        result = `Potenciación de Lenguaje: ${Array.from(
          powerOfLanguage(setlanguageA, powerLanguage)
        ).join(", ")}`;
      } else {
        result = "Error: El segundo parámetro debe ser un número entero.";
      }
      break;
  }

  resultElement.textContent = `Resultado: ${
    typeof result === "string" ? result : Array.from(result).join(", ")
  }`;
}
