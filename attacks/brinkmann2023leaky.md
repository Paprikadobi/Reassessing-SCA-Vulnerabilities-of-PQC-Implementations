---
source: https://eprint.iacr.org/2023/1536
year: 2023
authors: Marcus Brinkmann, Chitchanok Chuengsatiansup, Alexander May, Julian Nowakowski, Yuval Yarom
family:
  - code
  - KEM
scheme:
  - McEliece
  - Botan
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
possible countermeasures: 
target:
  - Gaussian elimination
techniques:
  - CPA
  - cryptanalysis
implementation source: Botan cryptographic library, reference implementation of the Classic
---
# Leaky McEliece: Secret Key Recovery From Highly Erroneous Side-Channel Information

