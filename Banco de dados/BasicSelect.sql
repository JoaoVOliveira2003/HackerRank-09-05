-- Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.
-- Selecione todas as colunas das cidades americanas da tabela CITY com população maior que 100000. O código para América é USA.
SELECT * FROM city WHERE Population > 100000 AND CountryCode = 'USA';

-- Query all columns (attributes) for every row in the CITY table.
-- Consulte todas as colunas (atributos) para cada linha na tabela CITY.
SELECT * FROM city;

-- Query all columns for a city in CITY with the ID 1661.
-- Consulte todas as colunas para uma cidade na tabela CITY com o ID 1661.
SELECT * FROM city WHERE ID = 1661;

-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.
-- Consulte todos os atributos de cada cidade japonesa na tabela CITY. O código para o Japão é JPN.
SELECT * FROM city WHERE COUNTRYCODE ='JPN';

-- Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
-- Consulte os nomes de todas as cidades japonesas na tabela CITY. O código para o Japão é JPN.
SELECT NAME FROM city WHERE CountryCode = 'JPN';

-- Query a list of CITY and STATE from the STATION table.
-- Consulte uma lista de CIDADE e ESTADO da tabela STATION.
SELECT CITY, STATE FROM STATION;

-- Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
-- Consulte uma lista de nomes de CIDADE de STATION para cidades que têm um número de ID par. Imprima os resultados em qualquer ordem, mas exclua duplicatas da resposta.
SELECT DISTINCT City FROM Station WHERE MOD(Id,2) = 0 ORDER BY City;

-- Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
-- Encontre a diferença entre o número total de entradas de CIDADE na tabela e o número de entradas distintas de CIDADE na tabela.
SELECT COUNT(CITY) - COUNT(DISTINCT CITY) FROM station;

-- Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
-- Consulte as duas cidades em STATION com os nomes de CIDADE mais curtos e mais longos, assim como seus respectivos comprimentos (ou seja: número de caracteres no nome). Se houver mais de uma cidade menor ou maior, escolha a que vem primeiro quando ordenada alfabeticamente.
SELECT CITY, LENGTH(CITY) AS name_length FROM STATION ORDER BY name_length ASC, CITY LIMIT 1;
SELECT CITY, LENGTH(CITY) AS name_length FROM STATION ORDER BY name_length DESC, CITY LIMIT 1;

-- Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
-- Consulte a lista de nomes de CIDADE começando com vogais (ou seja, a, e, i, o, ou u) de STATION. Seu resultado não pode conter duplicatas.
SELECT City FROM Station WHERE City LIKE 'A%' OR City LIKE 'E%' OR City LIKE 'I%' OR City LIKE 'O%' OR City LIKE 'U%';

-- Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.
-- Consulte a lista de nomes de CIDADE terminando com vogais (a, e, i, o, u) de STATION. Seu resultado não pode conter duplicatas.
SELECT DISTINCT City FROM Station WHERE City LIKE '%a' OR City LIKE '%e' OR City LIKE '%i' OR City LIKE '%o' OR City LIKE '%u';

-- Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.
-- Consulte a lista de nomes de CIDADE de STATION que têm vogais (ou seja, a, e, i, o, e u) como seus primeiros e últimos caracteres. Seu resultado não pode conter duplicatas.
SELECT DISTINCT CITY FROM STATION WHERE LOWER(LEFT(CITY, 1)) IN ('a', 'e', 'i', 'o', 'u') AND LOWER(RIGHT(CITY, 1)) IN ('a', 'e', 'i', 'o', 'u');

-- Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.
-- Consulte a lista de nomes de CIDADE de STATION que não começam com vogais. Seu resultado não pode conter duplicatas.
SELECT DISTINCT CITY FROM STATION WHERE LOWER(LEFT(CITY, 1)) NOT IN ('a', 'e', 'i', 'o', 'u');

-- Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.
-- Consulte a lista de nomes de CIDADE de STATION que não terminam com vogais. Seu resultado não pode conter duplicatas.
SELECT DISTINCT CITY FROM STATION WHERE LOWER(RIGHT(CITY, 1)) NOT IN ('a', 'e', 'i', 'o', 'u');

-- Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
-- Consulte a lista de nomes de CIDADE de STATION que não começam com vogais ou não terminam com vogais. Seu resultado não pode conter duplicatas.
SELECT DISTINCT CITY FROM STATION WHERE LOWER(LEFT(CITY, 1)) NOT IN ('a', 'e', 'i', 'o', 'u') OR LOWER(RIGHT(CITY, 1)) NOT IN ('a', 'e', 'i', 'o', 'u');

-- Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.
-- Consulte a lista de nomes de CIDADE de STATION que não começam com vogais e não terminam com vogais. Seu resultado não pode conter duplicatas.
SELECT DISTINCT CITY FROM STATION WHERE LOWER(LEFT(CITY, 1)) NOT IN ('a', 'e', 'i', 'o', 'u') AND LOWER(RIGHT(CITY, 1)) NOT IN ('a', 'e', 'i', 'o', 'u');

-- Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
-- Consulte o nome de qualquer aluno em STUDENTS que obteve uma nota superior a 75. Ordene sua saída pelos últimos três caracteres de cada nome. Se dois ou mais alunos tiverem nomes que terminam nos mesmos três últimos caracteres (ou seja: Bobby, Robby, etc.), ordene-os secundariamente por ID crescente.
SELECT name FROM students WHERE marks > 75 ORDER BY RIGHT(name, 3), id;

-- Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.
-- Escreva uma consulta que imprime uma lista de nomes de funcionários (ou seja, o atributo name) da tabela Employee em ordem alfabética.
SELECT name FROM Employee ORDER BY name;

-- Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than $2000 per month who have been employees for less than 10 months. Sort your result by ascending employee_id.
-- Escreva uma consulta que imprime uma lista de nomes de funcionários (ou seja, o atributo name) para funcionários em Employee que têm um salário maior que $2000 por mês e que foram funcionários por menos de 10 meses. Ordene seu resultado por employee_id ascendente.
SELECT name FROM Employee WHERE months < 10 AND Salary > 2000 ORDER BY employee_id;
