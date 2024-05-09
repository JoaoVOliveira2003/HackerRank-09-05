/*
Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:

Equilateral: It's a triangle with  sides of equal length.
Isosceles: It's a triangle with  sides of equal length.
Scalene: It's a triangle with  sides of differing lengths.
Not A Triangle: The given values of A, B, and C don't form a triangle.
*/
/*

*/
SELECT
CASE WHEN (A = B) AND (B = C) THEN 'Equilateral'
WHEN (A = B AND A + B > C) OR (B = C AND B + C > A) OR (C = A AND C + A > B) THEN 'Isosceles'
WHEN (A + B > C) AND (B + C > A) AND (C + A > B) THEN 'Scalene'
ELSE 'Not A Triangle' END
FROM Triangles;

/*
Generate the following two result sets:

Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example: AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).
Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format:

*/
/*

*/
SELECT N FROM (
  (SELECT Name || '(' || LEFT(Occupation, 1) || ')' AS N, 1 AS O FROM Occupations ORDER BY Name)
  UNION ALL
  (SELECT 'There are total ' || COUNT(*) || ' ' || LOWER(Occupation) || 's.' AS N, 2 FROM Occupations GROUP BY Occupation ORDER BY 2)
) AS T
ORDER BY O, N;
