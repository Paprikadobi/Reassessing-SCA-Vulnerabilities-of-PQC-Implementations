---
source: https://eprint.iacr.org/2024/1248
year: 2024
authors: Morgane Guerreau, Mélissa Rossi
family:
  - lattice/M-LIP
  - DSA
scheme:
  - HAWK
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - profile
possible countermeasures: 
target:
  - sampler/Gaussian
techniques:
  - SPA
  - profiling/template
  - cryptanalysis
---
# A Not So Discrete Sampler: Power Analysis Attacks on HAWK signature scheme