--Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
--Dadas as tabelas CITY e COUNTRY, consulte a soma das populações de todas as cidades onde o CONTINENTE é 'Ásia'.
select sum(c.population) from city c join country ct on c.countrycode=ct.code where ct.continent='Asia';

--Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
--Dadas as tabelas CITY e COUNTRY, consulte os nomes de todas as cidades onde o CONTINENT é 'África'.
SELECT CITY.Name
FROM CITY
JOIN COUNTRY ON CITY.CountryCode = COUNTRY.Code
WHERE COUNTRY.CONTINENT = 'Africa';

/*Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations 
(CITY.Population) rounded down to the nearest integer.*/
/*Dadas as tabelas CITY e COUNTRY, consulte os nomes de todos os continentes (COUNTRY.Continent) e suas respectivas populações médias de cidades
(CIDADE.População) arredondado para o número inteiro mais próximo.*/
SELECT Continent, FLOOR(AVG(City.Population)) AvgPop
FROM Country
JOIN City ON Country.Code = City.CountryCode
GROUP BY Continent;

/*ou did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!
The total score of a hacker is the sum of their maximum scores for all of the challenges. Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. Exclude all hackers with a total score of  from your result.*/

/*você fez um ótimo trabalho ajudando Julia em seu último desafio do concurso de codificação que ela quer que você trabalhe neste também!
A pontuação total de um hacker é a soma de suas pontuações máximas em todos os desafios. Escreva uma consulta para imprimir o hacker_id, o nome e a pontuação total dos hackers ordenados pela pontuação decrescente. Se mais de um hacker obtiver a mesma pontuação total, classifique o resultado em ordem crescente de hacker_id. 
Exclua todos os hackers com pontuação total de do seu resultado.*/
select
    h.hacker_id,
    h.name,
    sum(s.score)

from
    hackers h
    inner join
    (
        select
            hacker_id,
            challenge_id,
            max(score) as score
        from
            submissions
        group by 
            hacker_id,
            challenge_id
    ) as s
        on h.hacker_id = s.hacker_id
group by
    h.hacker_id,
    h.name
having
    sum(s.score) <> 0
order by
    sum(s.score) desc,
    h.hacker_id


/*Julia asked her students to create some coding challenges. Write a query to print the hacker_id, name, and the total number of challenges created by each student. Sort your results by the total number of challenges in descending order. If more than one student created the same number of challenges, then sort the result by hacker_id. If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.*/
/*Julia pediu aos alunos que criassem alguns desafios de codificação. Escreva uma consulta para imprimir o hacker_id, o nome e o número total de desafios criados por cada aluno. Classifique seus resultados pelo número total de desafios em ordem decrescente. Se mais de um aluno criou o mesmo número de desafios, classifique o resultado por hacker_id. Se mais de um aluno criou o mesmo número de desafios e a contagem for menor que o número máximo de desafios criados, exclua esses alunos do resultado.*/

SELECT
    H.hacker_id, H.name
FROM
    Hackers H
    INNER JOIN Submissions S ON S.hacker_id = H.hacker_id
    INNER JOIN Challenges C ON C.challenge_id = S.challenge_id
    INNER JOIN Difficulty D ON D.difficulty_level = C.difficulty_level AND D.score = S.score
GROUP BY H.hacker_id, H.name
HAVING COUNT(*) > 1
ORDER BY COUNT(*) DESC, H.hacker_id

--Você recebe duas tabelas: Alunos e Notas. Alunos contém três colunas ID, Nome e Marcas.
--You are given two tables: Students and Grades. Students contains three columns ID, Name and Marks.
select name, grade, marks from students s 
join grades g on s.marks >= g.min_mark and s.marks<= g.max_mark
where g.grade >= 8
order by g.grade desc, name asc 
; 
select 'NULL', grade, marks from students s 
join grades g on s.marks >= g.min_mark and s.marks<= g.max_mark
where g.grade < 8
order by g.grade desc , s.marks asc ;

/*Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard!
Write a query to print the respective hacker_id and name of hackers who achieved full scores for more 
than one challenge. Order your output in descending order by the total number of challenges in which 
the hacker earned a full score. If more than one hacker received full scores in same number of challenges,
then sort them by ascending hacker_id.*/

/*Julia acabou de realizar um concurso de codificação e precisa da sua ajuda para montar o placar!
Escreva uma consulta para imprimir o respectivo hacker_id e o nome dos hackers que alcançaram pontuação máxima para mais
do que um desafio. Ordene sua produção em ordem decrescente pelo número total de desafios em que
o hacker obteve pontuação máxima. Se mais de um hacker obtiver pontuação completa no mesmo número de desafios,
em seguida, classifique-os em ordem crescente hacker_id.*/

select hacker_id,name from
(
select 
Hackers.hacker_id,
Hackers.name,
sum(if(Submissions.score = Difficulty.score,1,0)) t

from
Submissions
left join
Challenges on Challenges.challenge_id = Submissions.challenge_id
left join
Difficulty on Difficulty.difficulty_level = Challenges.difficulty_level
left join
Hackers on Hackers.hacker_id = Submissions.hacker_id
group by 1,2
) A
where t > 1
order by
t desc,hacker_id;

/*Harry Potter and his friends are at Ollivander's with Ron, finally replacing Charlie's old broken wand.
Hermione decides the best way to choose is by determining the minimum number of gold galleons needed to buy each non-evil
wand of high power and age. Write a query to print the id, age, coins_needed, and power of the wands that Ron's interested
in, sorted in order of descending power. If more than one wand has same power, sort the result in order of descending age.*/

/*Harry Potter e seus amigos estão na casa de Ollivander com Ron, finalmente substituindo a velha varinha quebrada de Charlie.
Hermione decide que a melhor maneira de escolher é determinar o número mínimo de galeões de ouro necessários para comprar cada não-maligno.
varinha de alto poder e idade. Escreva uma consulta para imprimir o id, a idade, as moedas_necessárias e o poder das varinhas que interessam a Ron
em, classificados em ordem decrescente de potência. Se mais de uma varinha tiver o mesmo poder, classifique o resultado em ordem decrescente de idade.*/

select
B.id,B.age,B.coins_needed,B.power
from
(select
Wands.power power,
Wands_Property.age age,
min(coins_needed) coins_needed
from
Wands left join Wands_Property on Wands.code = Wands_Property.code
where
Wands_Property.is_evil = 0
group by power,age) A
left join
(
select 
Wands.id,
Wands.power power,
Wands_Property.age age,
Wands.coins_needed
from Wands left join Wands_Property on Wands.code = Wands_Property.code
where Wands_Property.is_evil = 0
) B
using(power,age,coins_needed)
order by
power desc,
age desc;