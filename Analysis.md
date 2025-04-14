## Attacks (`$=dv.pages('"attacks"').length`)
### by Family
```dataview
TABLE length(rows) as Number
FROM "attacks"
FLATTEN family AS family
GROUP BY family
SORT length(rows) DESC
```
### by Scheme
```dataview
TABLE length(rows) as Number
FROM "attacks"
FLATTEN scheme AS scheme
GROUP BY scheme
SORT length(rows) DESC
```
### by Implementation
```dataview
TABLE length(rows) as Number
FROM "attacks"
FLATTEN implementation AS implementation
GROUP BY implementation
SORT length(rows) DESC
```
### by year
```dataview
TABLE length(rows) as Number
FROM "attacks"
WHERE any(techniques, (p) => p != "cryptanalysis")
GROUP BY year
SORT year DESC
```
### cryptanalysis by year
```dataview
TABLE length(rows) as Number
FROM "attacks"
WHERE any(techniques, (p) => p = "cryptanalysis")
GROUP BY year
SORT year DESC
```
## Countermeasures (`$=dv.pages('"countermeasures"').length`)
### by Family
```dataview
TABLE length(rows) as Number
FROM "countermeasures"
FLATTEN family AS family
GROUP BY family
SORT length(rows) DESC
```
### by Scheme
```dataview
TABLE length(rows) as Number
FROM "countermeasures"
FLATTEN scheme AS scheme
GROUP BY scheme
SORT length(rows) DESC
```
### by Protected Part
```dataview
TABLE length(rows) as Number
FROM "countermeasures"
FLATTEN row["protected part"] AS protected-part
GROUP BY protected-part
SORT length(rows) DESC
```
### by Countermeasure
```dataview
TABLE length(rows) as Number
FROM "countermeasures"
FLATTEN countermeasures AS countermeasures
GROUP BY countermeasures
SORT length(rows) DESC
```
