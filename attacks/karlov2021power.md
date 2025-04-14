---
source: https://eprint.iacr.org/2021/1311
year: 2021
authors: Alexandre Karlov, Natacha Linard de Guertechin
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
possible countermeasures: 
target:
  - pointwise multiplication
techniques:
  - CPA
implementation source: Seems to be pqm4 but without NTT
traces: 80
---
# Power analysis attack on Kyber
