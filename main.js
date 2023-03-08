//UKOL 1
/*Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/

let jedna = document.querySelector(".jedna");

const salary = (wage, hours, days) => {
	return Math.round(wage * hours * days)
};

const taxed = (salary, taxPercentage) => {
	return Math.round((salary * (100 - taxPercentage)) / 100)
};

const wage = 400;
const hours = 6;
const days = 21;
const beforeTaxation = salary(wage, hours, days);
const afterTaxation = taxed(beforeTaxation, 15);

jedna.innerHTML = `
	<p>Wage: ${wage} Kč</p>
	<p>Hours: ${hours}</p>
	<p>Days: ${days}</p>
	<p>Before taxation: ${beforeTaxation} Kč</p>
	<p>After taxation: ${afterTaxation} Kč</p>
`;

// UKOL 2
/*Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calculate se třemi parametry number1, operation a number2, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.*/ 

let kalkulacka = document.querySelector(".dva");

const calculate = (number1, operation, number2) => {
	if (operation === '+') {
		return number1 + number2
	}
	if (operation === '-') {
		return number1 - number2
	}
	if (operation === '*') {
		return number1 * number2
	}
	if (operation === '/') {
		return number1 / number2
	}
};

